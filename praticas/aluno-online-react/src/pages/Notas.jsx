import Aside from "../components/Aside";
import PageHeader from "../components/PageHeader";
import DataTable from "../components/DataTable";

const NOTAS_COLUMNS = [
  { label: "Disciplina", key: "disciplina" },
  { label: "A1", key: "a1", align: "center" },
  { label: "A2", key: "a2", align: "center" },
  { label: "A3", key: "a3", align: "center" },
  { label: "Menção", key: "mencao", align: "center", bold: true },
];

const DISCIPLINAS_2026_1 = [
  {
    disciplina: "BI e Data Warehousing",
    a1: "",
    a2: "",
    a3: "",
    mencao: "SR",
  },
  {
    disciplina: "Construção de Frontend",
    a1: "",
    a2: "",
    a3: "",
    mencao: "SR",
  },
  {
    disciplina: "Manutenção de Software e Devops",
    a1: "",
    a2: "",
    a3: "",
    mencao: "SR",
  },
];

const DISCIPLINAS_2025_2 = [
  {
    disciplina: "Construção de Backend",
    a1: "5.4",
    a2: "6.2",
    a3: "",
    mencao: "MM",
  },
  {
    disciplina: "Estrutura de Dados",
    a1: "6.3",
    a2: "6.1",
    a3: "",
    mencao: "MM",
  },
  {
    disciplina: "Gerenciamento de Projetos",
    a1: "7.4",
    a2: "7.1",
    a3: "",
    mencao: "MS",
  },
];

export default function Notas() {
  return (
    <div className="flex flex-col md:flex-row w-full min-h-screen bg-gray-50">
      <Aside />
      <main className="flex-1 flex flex-col w-full">
        <div className="px-4 md:px-8 pb-8 space-y-4">
          <PageHeader
            title="Minhas Notas"
            subtitle="Histórico de Notas por Semestre"
          />
          <DataTable
            title="2026.1"
            columns={NOTAS_COLUMNS}
            data={DISCIPLINAS_2026_1}
          />
          <DataTable
            title="2025.2"
            columns={NOTAS_COLUMNS}
            data={DISCIPLINAS_2025_2}
          />
        </div>
      </main>
    </div>
  );
}
