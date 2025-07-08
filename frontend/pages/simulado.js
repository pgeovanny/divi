import Card from "../components/Card";
import Button from "../components/Button";

export default function Simulado() {
  // Simulação de questão
  const questao = {
    texto: "É estável o servidor após 3 anos?",
    alternativas: ["Certo", "Errado"],
    artigo: "Art. 2º - Lei 8112",
    fundamentacao: "Art. 2º - literalidade da lei."
  };
  return (
    <div style={{display:"flex",flexDirection:"column",alignItems:"center",marginTop:"2rem"}}>
      <h2>Simulado</h2>
      <Card>
        <div style={{marginBottom:"1rem"}}><b>{questao.texto}</b></div>
        {questao.alternativas.map((alt, idx) => (
          <Button key={idx} style={{margin:"0.25rem 0"}}>{alt}</Button>
        ))}
        <div style={{fontSize:12,marginTop:"1rem",color:"#888"}}>
          {questao.artigo}
        </div>
      </Card>
    </div>
  )
}
