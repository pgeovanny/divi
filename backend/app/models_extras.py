from flask_sqlalchemy import SQLAlchemy
from datetime import datetime

db = SQLAlchemy()

class Lei(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    nome = db.Column(db.String(100), nullable=False)

class Artigo(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    lei_id = db.Column(db.Integer, db.ForeignKey('lei.id'))
    numero = db.Column(db.String(10))
    texto = db.Column(db.Text)

class Questao(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    lei_id = db.Column(db.Integer, db.ForeignKey('lei.id'))
    artigo_id = db.Column(db.Integer, db.ForeignKey('artigo.id'))
    texto = db.Column(db.Text)
    tipo = db.Column(db.String(20))
    nivel = db.Column(db.String(20))
    alternativas = db.Column(db.JSON, nullable=True)
    resposta = db.Column(db.String(10))
    fundamentacao = db.Column(db.Text)

class RespostaUsuario(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    usuario_id = db.Column(db.Integer, db.ForeignKey('user.id'))
    questao_id = db.Column(db.Integer, db.ForeignKey('questao.id'))
    resposta = db.Column(db.String(10))
    correta = db.Column(db.Boolean)
    favoritada = db.Column(db.Boolean, default=False)
    data = db.Column(db.DateTime, default=datetime.utcnow)

class Comentario(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    usuario_id = db.Column(db.Integer, db.ForeignKey('user.id'))
    questao_id = db.Column(db.Integer, db.ForeignKey('questao.id'))
    texto = db.Column(db.Text)
    data = db.Column(db.DateTime, default=datetime.utcnow)
