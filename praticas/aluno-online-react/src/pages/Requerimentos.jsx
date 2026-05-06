import Aside from "../components/Aside";
import PageHeader from "../components/PageHeader";
import DataTable from "../components/DataTable";

const REQUERIMENTOS_COLUMNS = [
  { label: "Tipo de Requerimento", key: "tipo" },
  { label: "Data de Solicitação", key: "data", align: "center" },
  { label: "Situação", key: "situacao", align: "center" },
];

const REQUERIMENTOS_DATA = [
  {
    tipo: "Revisão de Menção",
    data: "15/12/2025",
    situacao: "Indeferido",
  },
  {
    tipo: "Dispensa de Disciplina",
    data: "12/06/2025",
    situacao: "Indeferido",
  },
  {
    tipo: "Trancamento de Matrícula",
    data: "05/01/2024",
    situacao: "Deferido",
  },
  {
    tipo: "Mudança de Turno",
    data: "10/10/2023",
    situacao: "Deferido",
  },
  {
    tipo: "Renovação de Matrícula",
    data: "20/02/2023",
    situacao: "Deferido",
  },
];

export default function Requerimentos() {
  return (
    <div className="flex flex-col md:flex-row w-full min-h-screen bg-gray-50">
      <Aside />
      <main className="flex-1 flex flex-col w-full">
        <div className="px-4 md:px-8 pb-8 space-y-4">
          <PageHeader
            title="Meus Requerimentos"
            subtitle="Faça solicitações online para a secretaria"
          />
          <DataTable
            columns={REQUERIMENTOS_COLUMNS}
            data={REQUERIMENTOS_DATA}
          />
        </div>
      </main>
    </div>
  );
}
