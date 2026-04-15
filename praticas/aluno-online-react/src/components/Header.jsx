import avatar from "/avatar.svg";

export default function Header() {
  return (
    <header className="flex flex-col my-6 mx-4 md:mx-8 gap-2">
      <article className="flex flex-row place-content-between items-center">
        <h1 className="font-bold text-4xl text-gray-900">Olá, Aluno!</h1>
        <img src={avatar} className="w-12 h-12" alt="avatar" />
      </article>
      <h3 className="font-bold text-lg text-black">
        Bem-vindo ao portal do aluno
      </h3>
    </header>
  );
}
