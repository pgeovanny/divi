import { PieChart, Pie, Cell, Legend, Tooltip } from 'recharts';

const data = [
  { name: 'Certas', value: 87 },
  { name: 'Erradas', value: 13 },
];
const COLORS = ['#00C49F', '#FF4444'];

export default function Estatisticas() {
  return (
    <div style={{display:"flex",flexDirection:"column",alignItems:"center",marginTop:"2rem"}}>
      <h2>Estatísticas do Simulado</h2>
      <PieChart width={340} height={240}>
        <Pie data={data} dataKey="value" cx="50%" cy="50%" outerRadius={70} fill="#8884d8" label>
          {data.map((entry, idx) => <Cell key={`cell-${idx}`} fill={COLORS[idx % COLORS.length]} />)}
        </Pie>
        <Tooltip />
        <Legend />
      </PieChart>
      <p>Total respondidas: 100 | Certas: 87 | Erradas: 13</p>
    </div>
  )
}
