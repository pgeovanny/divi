// frontend/pages/admin.js

import { useState } from 'react';

export default function AdminPage() {
  const [modalidade, setModalidade] = useState('Certo/Errado');
  const [nivel, setNivel] = useState('Fácil');
  const [lei, setLei] = useState('');
  const [questaoGerada, setQuestaoGerada] = useState('');
  const [usuarios, setUsuarios] = useState([]);

  const gerarQuestao = () => {
    // Aqui futuramente será chamada a API do GPT
    const comando = `Crie uma questão ${modalidade}, nível ${nivel}, com base na Lei ${lei}.`;
    setQuestaoGerada(`🔧 GPT gerará: ${comando}`);
  };

  const conferir = () => {
    alert('Questão revisada com sucesso!');
  };

  const exportar = () => {
    alert('Questão exportada com sucesso!');
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.titulo}>Painel do Administrador</h1>

      <div style={styles.box}>
        <h2>Gerar Questão com IA</h2>
        <label>Modalidade:</label>
        <select value={modalidade} onChange={e => setModalidade(e.target.value)} style={styles.input}>
          <option>Certo/Errado</option>
          <option>Múltipla Escolha</option>
        </select>

        <label>Nível de Dificuldade:</label>
        <select value={nivel} onChange={e => setNivel(e.target.value)} style={styles.input}>
          <option>Fácil</option>
          <option>Médio</option>
          <option>Difícil</option>
        </select>

        <label>Número da Lei:</label>
        <input
          type="text"
          value={lei}
          onChange={e => setLei(e.target.value)}
          placeholder="Ex: 8.112"
          style={styles.input}
        />

        <button onClick={gerarQuestao} style={styles.btn}>Gerar Questão</button>

        {questaoGerada && (
          <div style={styles.card}>
            <p>{questaoGerada}</p>
            <button onClick={conferir} style={styles.btnSec}>Conferir</button>
            <button onClick={exportar} style={styles.btnSec}>Exportar</button>
          </div>
        )}
      </div>

      <div style={styles.box}>
        <h2>Cadastrar Novo Usuário</h2>
        <p>[Área de cadastro de usuário será implementada aqui futuramente]</p>
      </div>
    </div>
  );
}

const styles = {
  container: {
    maxWidth: 800,
    margin: '0 auto',
    padding: 20,
    fontFamily: 'Arial',
  },
  titulo: {
    textAlign: 'center',
    color: '#0057FF',
  },
  box: {
    background: '#f2f2f2',
    borderRadius: 10,
    padding: 20,
    marginBottom: 30,
    boxShadow: '0 0 10px rgba(0,0,0,0.1)',
  },
  input: {
    width: '100%',
    padding: 10,
    marginBottom: 15,
    borderRadius: 5,
    border: '1px solid #ccc',
  },
  btn: {
    background: '#0057FF',
    color: 'white',
    padding: '10px 20px',
    border: 'none',
    borderRadius: 5,
    cursor: 'pointer',
    marginRight: 10,
  },
  btnSec: {
    background: '#ccc',
    color: '#000',
    padding: '8px 16px',
    border: 'none',
    borderRadius: 5,
    cursor: 'pointer',
    marginRight: 10,
    marginTop: 10,
  },
  card: {
    background: '#fff',
    padding: 15,
    border: '1px solid #ccc',
    borderRadius: 8,
    marginTop: 20,
  },
};
