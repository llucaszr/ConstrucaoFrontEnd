import avatar from "/avatar.svg";

export default function FaltasHeader() {
  return (
    <header className="flex flex-col gap-2 mb-6">
      <article className="flex flex-row place-content-between items-center">
        <h1 className="font-bold text-4xl text-gray-900">Minhas Faltas</h1>
        <img src={avatar} className="w-12 h-12" alt="avatar" />
      </article>
      <h3 className="font-bold text-lg text-black">
        Histórico de Faltas por Semestre
      </h3>
    </header>
  );
}
