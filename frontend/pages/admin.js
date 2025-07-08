// frontend/pages/admin.js
import { useState } from 'react';

export default function AdminPage() {
  const [modalidade, setModalidade] = useState('Certo/Errado');
  const [nivel, setNivel] = useState('Fácil');
  const [lei, setLei] = useState('');
  const [questaoGerada, setQuestaoGerada] = useState('');

  const [novoUsuario, setNovoUsuario] = useState({
    nome: '',
    cpf: '',
    email: '',
    estado: '',
    areaEstudo: '',
    curso: '',
    senha: '',
    isAdmin: false,
  });

  const gerarQuestao = () => {
    const comando = `Crie uma questão ${modalidade}, nível ${nivel}, com base na Lei ${lei}.`;
    setQuestaoGerada(`🔧 GPT gerará: ${comando}`);
  };

  const conferir = () => {
    alert('Questão revisada com sucesso!');
  };

  const exportar = () => {
    alert('Questão exportada com sucesso!');
  };

  const cadastrarUsuario = () => {
    console.log('Usuário cadastrado:', novoUsuario);
    alert('Usuário cadastrado com sucesso!');
    // Aqui você pode integrar com o backend futuramente
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
        <input
          type="text"
          placeholder="Nome completo"
          value={novoUsuario.nome}
          onChange={e => setNovoUsuario({ ...novoUsuario, nome: e.target.value })}
          style={styles.input}
        />
        <input
          type="text"
          placeholder="CPF"
          value={novoUsuario.cpf}
          onChange={e => setNovoUsuario({ ...novoUsuario, cpf: e.target.value })}
          style={styles.input}
        />
        <input
          type="email"
          placeholder="Email"
          value={novoUsuario.email}
          onChange={e => setNovoUsuario({ ...novoUsuario, email: e.target.value })}
          style={styles.input}
        />
        <input
          type="text"
          placeholder="Estado (sigla)"
          value={novoUsuario.estado}
          onChange={e => setNovoUsuario({ ...novoUsuario, estado: e.target.value })}
          style={styles.input}
        />
        <input
          type="text"
          placeholder="Área de Estudo"
          value={novoUsuario.areaEstudo}
          onChange={e => setNovoUsuario({ ...novoUsuario, areaEstudo: e.target.value })}
          style={styles.input}
        />
        <input
          type="text"
          placeholder="Curso Preparatório"
          value={novoUsuario.curso}
          onChange={e => setNovoUsuario({ ...novoUsuario, curso: e.target.value })}
          style={styles.input}
        />
        <input
          type="password"
          placeholder="Senha (mínimo 8 dígitos)"
          value={novoUsuario.senha}
          onChange={e => setNovoUsuario({ ...novoUsuario, senha: e.target.value })}
          style={styles.input}
        />
        <label>
          <input
            type="checkbox"
            checked={novoUsuario.isAdmin}
            onChange={e => setNovoUsuario({ ...novoUsuario, isAdmin: e.target.checked })}
          />
          {' '}É administrador
        </label>
        <br /><br />
        <button onClick={cadastrarUsuario} style={styles.btn}>Cadastrar Usuário</button>
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
}
