from flask import Blueprint, request, jsonify
from app.models import db, User
from .models_extras import Lei, Artigo, Questao, RespostaUsuario, Comentario
from flask_jwt_extended import jwt_required, get_jwt_identity
from sqlalchemy import func

simulado_bp = Blueprint('simulado', __name__)

# Importação CSV (admin)
@simulado_bp.route('/import_csv', methods=['POST'])
@jwt_required()
def import_csv():
    user = get_jwt_identity()
    if not user.get('admin'):
        return jsonify({'msg': 'Acesso restrito ao admin!'}), 403
    # Simulação de importação (CSV via upload seria implementado)
    return jsonify({'msg': 'Importação simulada'}), 200

# Buscar questões com filtros
@simulado_bp.route('/questoes', methods=['GET'])
@jwt_required()
def get_questoes():
    # filtros: lei, artigo, nivel, tipo
    args = request.args
    query = Questao.query
    if args.get('lei'):
        query = query.filter_by(lei_id=args.get('lei'))
    if args.get('artigo'):
        query = query.filter_by(artigo_id=args.get('artigo'))
    if args.get('nivel'):
        query = query.filter_by(nivel=args.get('nivel'))
    if args.get('tipo'):
        query = query.filter_by(tipo=args.get('tipo'))
    questoes = query.all()
    # Exemplo: só retorna id e texto
    return jsonify([{'id':q.id, 'texto':q.texto} for q in questoes])

# Responder questão
@simulado_bp.route('/questoes/<int:qid>/responder', methods=['POST'])
@jwt_required()
def responder_questao(qid):
    user = get_jwt_identity()
    data = request.json
    questao = Questao.query.get_or_404(qid)
    correta = (data['resposta'].strip().upper() == questao.resposta.strip().upper())
    resposta = RespostaUsuario(usuario_id=user['id'], questao_id=qid, resposta=data['resposta'], correta=correta)
    db.session.add(resposta)
    db.session.commit()
    return jsonify({'correta': correta, 'fundamentacao': questao.fundamentacao})

# Favoritar questão
@simulado_bp.route('/questoes/<int:qid>/favoritar', methods=['POST'])
@jwt_required()
def favoritar_questao(qid):
    user = get_jwt_identity()
    resposta = RespostaUsuario.query.filter_by(usuario_id=user['id'], questao_id=qid).first()
    if resposta:
        resposta.favoritada = not resposta.favoritada
        db.session.commit()
        return jsonify({'favoritada': resposta.favoritada})
    return jsonify({'msg': 'Responda a questão antes de favoritar.'}), 400

# Comentar questão
@simulado_bp.route('/questoes/<int:qid>/comentar', methods=['POST'])
@jwt_required()
def comentar_questao(qid):
    user = get_jwt_identity()
    data = request.json
    comentario = Comentario(usuario_id=user['id'], questao_id=qid, texto=data['texto'])
    db.session.add(comentario)
    db.session.commit()
    return jsonify({'msg': 'Comentário enviado!'})

# Estatísticas (exemplo: acerto por lei)
@simulado_bp.route('/estatisticas', methods=['GET'])
@jwt_required()
def estatisticas():
    user = get_jwt_identity()
    total = RespostaUsuario.query.filter_by(usuario_id=user['id']).count()
    certas = RespostaUsuario.query.filter_by(usuario_id=user['id'], correta=True).count()
    return jsonify({'total': total, 'certas': certas, 'percentual': round(100*certas/total,1) if total else 0})
