export default function Button({children, ...props}) {
  return (
    <button style={{background:"#0057FF",color:"#fff",padding:"0.75rem 2rem",borderRadius:"8px",fontWeight:600}} {...props}>
      {children}
    </button>
  )
}
