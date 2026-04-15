export default function FaltasTable2026() {
  return (
    <section className="flex flex-col my-6 bg-white rounded-lg overflow-hidden shadow-sm">
      <h2 className="bg-gray-300 font-bold text-base p-3 text-gray-900">
        2026.1
      </h2>
      <table className="w-full">
        <thead>
          <tr className="bg-gray-300">
            <th className="p-3 text-left font-bold text-gray-900">
              Disciplina
            </th>
            <th className="p-3 text-center font-bold text-gray-900">
              Total de Faltas
            </th>
            <th className="p-3 text-center font-bold text-gray-900">
              % de Presença
            </th>
          </tr>
        </thead>
        <tbody>
          <tr className="hover:bg-gray-50 border-b border-gray-200">
            <td className="p-3 text-gray-800">BI e Data Warehousing</td>
            <td className="p-3 text-center text-gray-800">0</td>
            <td className="p-3 text-center text-gray-800">100%</td>
          </tr>
          <tr className="hover:bg-gray-50 border-b border-gray-200">
            <td className="p-3 text-gray-800">Construção de Frontend</td>
            <td className="p-3 text-center text-gray-800">0</td>
            <td className="p-3 text-center text-gray-800">100%</td>
          </tr>
          <tr className="hover:bg-gray-50">
            <td className="p-3 text-gray-800">
              Manutenção de Software e Devops
            </td>
            <td className="p-3 text-center text-gray-800">0</td>
            <td className="p-3 text-center text-gray-800">100%</td>
          </tr>
        </tbody>
      </table>
    </section>
  );
}
