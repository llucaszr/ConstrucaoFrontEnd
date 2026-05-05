import learn from "/learn.svg";

export default function Aside() {
  return (
    <section className="hidden md:flex flex-col flex-none md:flex-1 bg-gray-200 w-full md:w-auto md:max-w-xs">
      <article className="flex flex-1 flex-row p-3 max-h-20 items-center">
        <img src={learn} alt="logo" className="w-12 h-12" />
        <h1 className="text-xl font-bold">Aluno Online</h1>
      </article>
      <ul className="list-disc list-inside p-4 font-bold space-y-5">
        <li>DashBoard</li>
        <li>Notas</li>
        <li>Faltas</li>
        <li>Boletos</li>
        <li>Requerimento</li>
        <li>Sair</li>
      </ul>
    </section>
  );
}
