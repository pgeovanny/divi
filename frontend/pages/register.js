// frontend/pages/register.js

import React, { useState } from 'react';

export default function RegisterPage() {
  const [formData, setFormData] = useState({
    nome: '',
    cpf: '',
    nascimento: '',
    estado: '',
    area: '',
    curso: '',
    email: '',
    senha: '',
    confirmSenha: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Enviar dados para API
    console.log('Cadastro enviado:', formData);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-blue-200 to-blue-500 p-4">
      <div className="bg-white p-8 rounded shadow-md w-full max-w-xl">
        <h1 className="text-2xl font-bold mb-6 text-center text-blue-700">Cadastro</h1>
        <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input type="text" name="nome" placeholder="Nome completo" value={formData.nome} onChange={handleChange} className="border p-2 rounded" required />
          <input type="text" name="cpf" placeholder="CPF" value={formData.cpf} onChange={handleChange} className="border p-2 rounded" required />

          <input type="date" name="nascimento" placeholder="Data de nascimento" value={formData.nascimento} onChange={handleChange} className="border p-2 rounded" required />
          <select name="estado" value={formData.estado} onChange={handleChange} className="border p-2 rounded" required>
            <option value="">UF</option>
            {['AC','AL','AP','AM','BA','CE','DF','ES','GO','MA','MT','MS','MG','PA','PB','PR','PE','PI','RJ','RN','RS','RO','RR','SC','SP','SE','TO'].map(uf => (
              <option key={uf} value={uf}>{uf}</option>
            ))}
          </select>

          <input type="text" name="area" placeholder="Área de estudo" value={formData.area} onChange={handleChange} className="border p-2 rounded" />
          <input type="text" name="curso" placeholder="Curso preparatório (opcional)" value={formData.curso} onChange={handleChange} className="border p-2 rounded" />

          <input type="email" name="email" placeholder="E-mail" value={formData.email} onChange={handleChange} className="border p-2 rounded" required />
          <input type="password" name="senha" placeholder="Senha (mín. 8 dígitos)" value={formData.senha} onChange={handleChange} className="border p-2 rounded" required />
          <input type="password" name="confirmSenha" placeholder="Confirmar senha" value={formData.confirmSenha} onChange={handleChange} className="border p-2 rounded" required />

          <button type="submit" className="bg-blue-600 text-white p-2 rounded hover:bg-blue-700 col-span-full mt-4">Cadastrar</button>
        </form>
        <p className="text-sm text-center mt-4">Já possui conta? <a href="/login" className="text-blue-600 hover:underline">Login</a></p>
      </div>
    </div>
  );
}
