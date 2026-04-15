import Aside from "../components/Aside";

export default function Notas() {
  return (
    <div className="flex flex-col md:flex-row w-full min-h-screen bg-gray-50">
      <Aside />
      <main className="flex-1 flex flex-col w-full">
        <div className="px-4 md:px-8 pb-8 space-y-4">
          <header className="flex flex-col gap-2">
            <article className="flex flex-row place-content-between items-center">
              <h1 className="font-bold text-4xl text-gray-900">Minhas Notas</h1>
              <img src="/avatar.svg" className="w-12 h-12" alt="avatar" />
            </article>
            <h3 className="font-bold text-lg text-black">
              Acompanhe seu desempenho acadêmico
            </h3>
          </header>

          <section className="flex flex-col my-6 bg-white rounded-lg overflow-hidden shadow-sm p-6">
            <h2 className="font-bold text-2xl text-gray-900 mb-4">
              Semestre 2026.1
            </h2>
            <div className="space-y-3">
              <div className="flex justify-between items-center p-3 border-b border-gray-300">
                <span className="font-semibold text-gray-800">
                  BI e Data Warehousing
                </span>
                <span className="text-lg font-bold text-blue-600">9.5</span>
              </div>
              <div className="flex justify-between items-center p-3 border-b border-gray-300">
                <span className="font-semibold text-gray-800">
                  Construção de Frontend
                </span>
                <span className="text-lg font-bold text-blue-600">8.7</span>
              </div>
              <div className="flex justify-between items-center p-3">
                <span className="font-semibold text-gray-800">
                  Manutenção de Software e Devops
                </span>
                <span className="text-lg font-bold text-blue-600">9.2</span>
              </div>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}
