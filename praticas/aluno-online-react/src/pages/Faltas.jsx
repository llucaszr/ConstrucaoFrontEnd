import Aside from "../components/Aside";
import PageHeader from "../components/PageHeader";
import DataTable from "../components/DataTable";

const FALTAS_COLUMNS = [
  { label: "Disciplina", key: "disciplina" },
  { label: "Total de Faltas", key: "faltas", align: "center" },
  { label: "% de Presença", key: "presenca", align: "center" },
];

const DISCIPLINAS_2026_1 = [
  { disciplina: "BI e Data Warehousing", faltas: 0, presenca: "100%" },
  { disciplina: "Construção de Frontend", faltas: 0, presenca: "100%" },
  {
    disciplina: "Manutenção de Software e Devops",
    faltas: 0,
    presenca: "100%",
  },
];

const DISCIPLINAS_2025_2 = [
  { disciplina: "Construção de Backend", faltas: 27, presenca: "87.5%" },
  { disciplina: "Estrutura de Dados", faltas: 9, presenca: "85%" },
  { disciplina: "Gerenciamento de Projetos", faltas: 10.5, presenca: "82.5%" },
];

export default function Faltas() {
  return (
    <div className="flex flex-col md:flex-row w-full min-h-screen bg-gray-50">
      <Aside />
      <main className="flex-1 flex flex-col w-full">
        <div className="px-4 md:px-8 pb-8 space-y-4">
          <PageHeader
            title="Minhas Faltas"
            subtitle="Histórico de Faltas por Semestre"
          />
          <DataTable
            title="2026.1"
            columns={FALTAS_COLUMNS}
            data={DISCIPLINAS_2026_1}
          />
          <DataTable
            title="2025.2"
            columns={FALTAS_COLUMNS}
            data={DISCIPLINAS_2025_2}
          />
        </div>
      </main>
    </div>
  );
}
