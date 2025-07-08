from flask_sqlalchemy import SQLAlchemy
from flask_bcrypt import generate_password_hash, check_password_hash
from datetime import datetime

db = SQLAlchemy()

class User(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    nome = db.Column(db.String(100), nullable=False)
    cpf = db.Column(db.String(14), unique=True, nullable=False)
    email = db.Column(db.String(120), unique=True, nullable=False)
    senha_hash = db.Column(db.String(128), nullable=False)
    data_nascimento = db.Column(db.Date, nullable=False)
    estado = db.Column(db.String(2), nullable=False)
    area_estudo = db.Column(db.String(50), nullable=False)
    curso_preparatorio = db.Column(db.String(50), nullable=True)
    admin = db.Column(db.Boolean, default=False)

    def set_password(self, senha):
        self.senha_hash = generate_password_hash(senha).decode('utf-8')

    def check_password(self, senha):
        return check_password_hash(self.senha_hash, senha)
