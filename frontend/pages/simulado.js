// Caminho: frontend/pages/simulado.js
import { useState } from 'react';

export default function SimuladoPage() {
  const [questaoAtual, setQuestaoAtual] = useState(0);
  const [respostaSelecionada, setRespostaSelecionada] = useState(null);
  const [respostaCorreta] = useState('B'); // Simulação
  const [statusResposta, setStatusResposta] = useState(null);
  const [fundamentacao] = useState('Art. 5º, inciso II - ninguém será obrigado a fazer ou deixar de fazer alguma coisa senão em virtude de lei.');

  const questaoExemplo = {
    enunciado: 'De acordo com a Constituição Federal, é correto afirmar que:',
    alternativas: {
      A: 'Todos são iguais perante a lei, exceto militares.',
      B: 'Ninguém será obrigado a fazer ou deixar de fazer alguma coisa senão em virtude de lei.',
      C: 'A liberdade de expressão pode ser proibida por lei ordinária.',
      D: 'A casa é um local público durante o dia.'
    }
  };

  const responder = (letra) => {
    setRespostaSelecionada(letra);
    setStatusResposta(letra === respostaCorreta ? 'acertou' : 'errou');
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.titulo}>Resolução de Questões</h1>
      <div style={styles.card}>
        <p><strong>Questão {questaoAtual + 1}:</strong> {questaoExemplo.enunciado}</p>
        {Object.entries(questaoExemplo.alternativas).map(([letra, texto]) => (
          <button
            key={letra}
            onClick={() => responder(letra)}
            style={{
              ...styles.botao,
              background: respostaSelecionada === letra ? (letra === respostaCorreta ? '#4CAF50' : '#F44336') : '#eee'
            }}
          >
            <strong>{letra})</strong> {texto}
          </button>
        ))}

        {statusResposta && (
          <div style={styles.resultado}>
            <p style={{ color: statusResposta === 'acertou' ? 'green' : 'red' }}>
              Você {statusResposta === 'acertou' ? 'acertou!' : 'errou!'}
            </p>
            <p><strong>Fundamentação:</strong> {fundamentacao}</p>
          </div>
        )}
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
  card: {
    background: '#f9f9f9',
    borderRadius: 10,
    padding: 20,
    boxShadow: '0 0 10px rgba(0,0,0,0.1)',
  },
  botao: {
    display: 'block',
    width: '100%',
    padding: 10,
    marginTop: 10,
    borderRadius: 5,
    border: '1px solid #ccc',
    textAlign: 'left',
    cursor: 'pointer',
  },
  resultado: {
    marginTop: 20,
    padding: 15,
    borderTop: '1px solid #ccc',
    background: '#fffbe6',
    borderRadius: 8,
  },
};
