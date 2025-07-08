export default function Card({children}) {
  return (
    <div style={{border:"2px solid #0057FF",borderRadius:"12px",padding:"2rem",margin:"1rem 0",background:"#F8F8FF",maxWidth:600}}>
      {children}
    </div>
  )
}
