export default function CardCalendario() {
  return (
    <section className="flex flex-col my-6 mx-4 md:mx-8 bg-white rounded-lg overflow-hidden shadow-sm">
      <h2 className="bg-gray-300 font-bold text-base p-3 text-gray-900">
        Calendário Acadêmico
      </h2>
      <div className="flex flex-col p-4 space-y-3">
        <p className="text-gray-800 text-base">
          23/02 - Início do período letivo 2026-1
        </p>
        <p className="text-gray-800 text-base">
          25/04 - Prazo final para aplicação da P1
        </p>
        <p className="text-gray-800 text-base">
          23/06 - Prazo final para aplicação da P2
        </p>
        <p className="text-gray-800 text-base">
          04/07 - Fim do período letivo 2026-1
        </p>
      </div>
    </section>
  );
}
