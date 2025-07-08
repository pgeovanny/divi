// frontend/pages/simulador.js

import React, { useState } from 'react';

const questaoExemplo = {
  id: 1,
  enunciado: "Qual é a função do princípio da legalidade no Direito Administrativo?",
  alternativas: [
    "Garantir a supremacia do interesse público.",
    "Permitir à administração agir conforme sua conveniência.",
    "Limitar a atuação da administração àquilo que está previsto em lei.",
    "Atribuir poderes ilimitados à administração."
  ],
  correta: 2,
  fundamentacao: "Art. 37 da CF/88: A administração pública direta e indireta de qualquer dos Poderes (...) obedecerá aos princípios de legalidade, impessoalidade, moralidade, publicidade e eficiência.",
};

export default function Simulador() {
  const [respostaSelecionada, setRespostaSelecionada] = useState(null);
  const [respondido, setRespondido] = useState(false);

  const verificarResposta = () => {
    setRespondido(true);
  };

  const corAlternativa = (index) => {
    if (!respondido) return '';
    if (index === questaoExemplo.correta) return 'bg-green-200';
    if (index === respostaSelecionada) return 'bg-red-200';
    return '';
  };

  return (
    <div className="max-w-2xl mx-auto mt-10 p-4 bg-white shadow rounded">
      <h2 className="text-xl font-bold mb-4 text-center">Resolução de Questões</h2>

      <p className="font-medium mb-4">{questaoExemplo.enunciado}</p>

      <div className="space-y-2">
        {questaoExemplo.alternativas.map((alt, index) => (
          <button
            key={index}
            onClick={() => setRespostaSelecionada(index)}
            className={`w-full text-left p-2 border rounded ${corAlternativa(index)} ${respostaSelecionada === index ? 'ring-2 ring-blue-400' : ''}`}
            disabled={respondido}
          >
            {alt}
          </button>
        ))}
      </div>

      <div className="mt-4 flex justify-between">
        <button className="bg-gray-300 px-4 py-2 rounded" disabled>Anterior</button>
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded"
          onClick={verificarResposta}
          disabled={respostaSelecionada === null || respondido}
        >
          Responder
        </button>
        <button className="bg-gray-300 px-4 py-2 rounded" disabled>Próxima</button>
      </div>

      {respondido && (
        <div className="mt-6 bg-gray-100 p-4 rounded">
          <p className="font-semibold text-green-700">Fundamentação:</p>
          <p className="text-sm mt-1">{questaoExemplo.fundamentacao}</p>
        </div>
      )}
    </div>
  );
}
