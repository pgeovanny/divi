import { useRef, useState } from "react";

export default function AdminImport() {
  const fileRef = useRef();
  const [msg, setMsg] = useState("");
  function handleImport(e) {
    e.preventDefault();
    if (!fileRef.current.files.length) return setMsg("Selecione um arquivo CSV!");
    setMsg("Arquivo enviado (simulação)");
    // Aqui você pode conectar com a rota de importação real via fetch/axios
  }
  return (
    <form onSubmit={handleImport} style={{margin:"4rem auto",maxWidth:400,display:"flex",flexDirection:"column",gap:"1rem"}}>
      <h2>Importar Questões (Admin)</h2>
      <input type="file" accept=".csv" ref={fileRef} />
      <button style={{background:"#0057FF",color:"#fff"}} type="submit">Importar CSV</button>
      <span>{msg}</span>
    </form>
  )
}
