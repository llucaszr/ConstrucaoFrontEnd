import Aside from "../components/Aside";

export default function Requerimentos() {
  return (
    <div className="flex flex-col md:flex-row w-full min-h-screen bg-gray-50">
      <Aside />
      <main className="flex-1 flex flex-col w-full">
        <div className="px-4 md:px-8 pb-8 space-y-4">
          <header className="flex flex-col gap-2">
            <article className="flex flex-row place-content-between items-center">
              <h1 className="font-bold text-4xl text-gray-900">
                Meus Requerimentos
              </h1>
              <img src="/avatar.svg" className="w-12 h-12" alt="avatar" />
            </article>
            <h3 className="font-bold text-lg text-black">
              Acompanhe seus requerimentos
            </h3>
          </header>

          <section className="flex flex-col my-6 bg-white rounded-lg overflow-hidden shadow-sm p-6">
            <h2 className="font-bold text-2xl text-gray-900 mb-4">
              Requerimentos em Andamento
            </h2>
            <div className="space-y-3">
              <div className="p-3 border-l-4 border-yellow-500 bg-yellow-50">
                <p className="font-semibold text-gray-800">
                  Solicitação de Transferência de Disciplina
                </p>
                <p className="text-sm text-gray-600">Status: Pendente</p>
                <p className="text-sm text-gray-600">Data: 10/04/2026</p>
              </div>
              <div className="p-3 border-l-4 border-green-500 bg-green-50">
                <p className="font-semibold text-gray-800">Revisão de Prova</p>
                <p className="text-sm text-gray-600">Status: Aprovado</p>
                <p className="text-sm text-gray-600">Data: 05/04/2026</p>
              </div>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}
