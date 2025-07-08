from flask import Blueprint, request, jsonify
from app.models import db, User
from flask_jwt_extended import create_access_token
from datetime import datetime

auth_bp = Blueprint('auth', __name__)

@auth_bp.route('/register', methods=['POST'])
def register():
    data = request.json
    user = User(
        nome=data['nome'],
        cpf=data['cpf'],
        email=data['email'],
        data_nascimento=datetime.strptime(data['data_nascimento'], "%Y-%m-%d"),
        estado=data['estado'],
        area_estudo=data['area_estudo'],
        curso_preparatorio=data.get('curso_preparatorio', ''),
        admin=data.get('admin', False)
    )
    user.set_password(data['senha'])
    db.session.add(user)
    db.session.commit()
    return jsonify({'msg': 'Cadastro realizado!'}), 201

@auth_bp.route('/login', methods=['POST'])
def login():
    data = request.json
    user = User.query.filter_by(email=data['email']).first()
    if user and user.check_password(data['senha']):
        access_token = create_access_token(identity={'id': user.id, 'admin': user.admin})
        return jsonify({'token': access_token, 'admin': user.admin})
    return jsonify({'msg': 'E-mail ou senha inválidos!'}), 401
