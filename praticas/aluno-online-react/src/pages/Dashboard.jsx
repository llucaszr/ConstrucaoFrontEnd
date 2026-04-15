import Header from "../components/Header";
import CardMuralAvisos from "../components/CardMuralAvisos";
import CardCalendario from "../components/CardCalendario";
import CardDisciplinas from "../components/CardDisciplinas";
import Aside from "../components/Aside";

export default function Dashboard() {
  return (
    <div className="flex flex-col md:flex-row w-full min-h-screen bg-gray-50">
      <Aside />
      <main className="flex-1 flex flex-col w-full">
        <div className="px-4 md:px-8 pb-8 space-y-4">
          <Header />
          <CardMuralAvisos />
          <CardCalendario />
          <CardDisciplinas />
        </div>
      </main>
    </div>
  );
}
