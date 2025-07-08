import { useState } from "react";
import axios from "axios";

export default function Login() {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [msg, setMsg] = useState("");

  async function handleLogin(e) {
    e.preventDefault();
    try {
      const res = await axios.post("/api/auth/login", { email, senha });
      setMsg("Login realizado!");
    } catch {
      setMsg("Usuário ou senha inválidos.");
    }
  }

  return (
    <form style={{display:"flex",flexDirection:"column",gap:"1rem",maxWidth:400,margin:"4rem auto"}} onSubmit={handleLogin}>
      <h2>Login</h2>
      <input placeholder="Email" value={email} onChange={e=>setEmail(e.target.value)} required />
      <input placeholder="Senha" type="password" value={senha} onChange={e=>setSenha(e.target.value)} required />
      <button style={{background:"#0057FF",color:"#fff"}} type="submit">Entrar</button>
      <span>{msg}</span>
    </form>
  )
}
