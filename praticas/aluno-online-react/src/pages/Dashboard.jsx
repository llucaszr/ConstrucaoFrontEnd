import Aside from "../components/Aside";
import PageHeader from "../components/PageHeader";
import Card from "../components/Card";

export default function Dashboard() {
  return (
    <div className="flex flex-col md:flex-row w-full min-h-screen bg-gray-50">
      <Aside />
      <main className="flex-1 flex flex-col w-full">
        <div className="px-4 md:px-8 pb-8 space-y-4">
          <PageHeader
            title="Olá, Aluno!"
            subtitle="Bem-vindo ao portal do aluno"
          />

          <Card title="Mural de Avisos">
            <p className="text-gray-800 text-base">
              Inscrição para o projeto de extensão
            </p>
            <p className="text-gray-800 text-base">
              Eleição para representante de turma
            </p>
          </Card>

          <Card title="Calendário Acadêmico">
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
          </Card>

          <Card title="Minhas Disciplinas">
            <p className="text-gray-800 text-base">Construção de Frontend</p>
            <p className="text-gray-800 text-base">DevOps</p>
            <p className="text-gray-800 text-base">BI e Datawarehousing</p>
          </Card>
        </div>
      </main>
    </div>
  );
}
