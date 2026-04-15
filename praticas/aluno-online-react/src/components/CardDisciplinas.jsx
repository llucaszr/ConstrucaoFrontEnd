export default function CardDisciplinas() {
  return (
    <section className="flex flex-col my-6 mx-4 md:mx-8 bg-white rounded-lg overflow-hidden shadow-sm">
      <h2 className="bg-gray-300 font-bold text-base p-3 text-gray-900">
        Minhas Disciplinas
      </h2>
      <div className="flex flex-col p-4 space-y-3">
        <p className="text-gray-800 text-base">Construção de Frontend</p>
        <p className="text-gray-800 text-base">DevOps</p>
        <p className="text-gray-800 text-base">BI e Datawarehousing</p>
      </div>
    </section>
  );
}
