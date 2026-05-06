import avatar from "/avatar.svg";

export default function PageHeader({ title, subtitle }) {
  return (
    <header className="flex flex-col gap-2 mb-6">
      <div className="flex flex-row justify-between items-center">
        <h1 className="font-bold text-4xl text-gray-900">{title}</h1>
        <img
          src={avatar}
          alt="Avatar do usuário"
          className="w-12 h-12 rounded-full"
        />
      </div>
      {subtitle && (
        <h2 className="font-bold text-lg text-black">{subtitle}</h2>
      )}
    </header>
  );
}
