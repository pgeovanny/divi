import { useState } from "react";
import axios from "axios";

export default function Register() {
  const [form, setForm] = useState({nome:"", cpf:"", email:"", senha:"", data_nascimento:"", estado:"", area_estudo:"", curso_preparatorio:""});
  const [msg, setMsg] = useState("");

  async function handleRegister(e) {
    e.preventDefault();
    try {
      await axios.post("/api/auth/register", {...form});
      setMsg("Cadastro realizado!");
    } catch {
      setMsg("Erro no cadastro.");
    }
  }

  return (
    <form style={{display:"flex",flexDirection:"column",gap:"1rem",maxWidth:400,margin:"4rem auto"}} onSubmit={handleRegister}>
      <h2>Cadastro</h2>
      <input placeholder="Nome" value={form.nome} onChange={e=>setForm({...form, nome:e.target.value})} required />
      <input placeholder="CPF" value={form.cpf} onChange={e=>setForm({...form, cpf:e.target.value})} required />
      <input placeholder="Email" value={form.email} onChange={e=>setForm({...form, email:e.target.value})} required />
      <input placeholder="Senha" type="password" value={form.senha} onChange={e=>setForm({...form, senha:e.target.value})} required />
      <input placeholder="Data de Nascimento" type="date" value={form.data_nascimento} onChange={e=>setForm({...form, data_nascimento:e.target.value})} required />
      <input placeholder="Estado" value={form.estado} onChange={e=>setForm({...form, estado:e.target.value})} required />
      <input placeholder="Área de Estudo" value={form.area_estudo} onChange={e=>setForm({...form, area_estudo:e.target.value})} required />
      <input placeholder="Curso Preparatório" value={form.curso_preparatorio} onChange={e=>setForm({...form, curso_preparatorio:e.target.value})} />
      <button style={{background:"#0057FF",color:"#fff"}} type="submit">Cadastrar</button>
      <span>{msg}</span>
    </form>
  )
}
