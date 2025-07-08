import { useState } from 'react';

export default function AdminPage() {
  const [csvFile, setCsvFile] = useState(null);

  const handleCsvChange = (e) => {
    setCsvFile(e.target.files[0]);
  };

  const handleCsvUpload = (e) => {
    e.preventDefault();
    if (csvFile) {
      console.log('Enviando CSV:', csvFile.name);
      // Aqui será feito o upload para o backend futuramente
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-3xl mx-auto bg-white rounded-2xl shadow-lg p-6">
        <h1 className="text-2xl font-bold text-blue-600 mb-6">Painel do Administrador</h1>

        <form onSubmit={handleCsvUpload} className="mb-8">
          <label className="block mb-2 font-semibold text-gray-700">Importar CSV de Questões</label>
          <input
            type="file"
            accept=".csv"
            onChange={handleCsvChange}
            className="mb-4 block w-full border border-gray-300 p-2 rounded-lg"
          />
          <button
            type="submit"
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
          >
            Enviar CSV
          </button>
        </form>

        <div className="border-t pt-4">
          <h2 className="text-lg font-semibold text-gray-800 mb-2">Gerenciar Questões</h2>
          <p className="text-gray-600">Em breve: listagem, edição e exclusão de questões.</p>
        </div>
      </div>
    </div>
  );
}
