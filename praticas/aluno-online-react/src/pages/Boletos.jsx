import Aside from "../components/Aside";
import PageHeader from "../components/PageHeader";
import DataTable from "../components/DataTable";

const BOLETOS_COLUMNS = [
  { label: "Vencimento", key: "vencimento" },
  { label: "Valor R$", key: "valor", align: "center" },
  { label: "Situação", key: "situacao", align: "center" },
];

const BOLETOS_DATA = [
  { vencimento: "19/01/2026", valor: "500,00", situacao: "Pago" },
  { vencimento: "19/02/2026", valor: "500,00", situacao: "Em atraso" },
  { vencimento: "19/03/2026", valor: "500,00", situacao: "A Pagar" },
  { vencimento: "19/04/2026", valor: "500,00", situacao: "A Pagar" },
  { vencimento: "19/05/2026", valor: "500,00", situacao: "A Pagar" },
  { vencimento: "19/06/2026", valor: "500,00", situacao: "A Pagar" },
  { vencimento: "19/07/2026", valor: "500,00", situacao: "A Pagar" },
  { vencimento: "19/08/2026", valor: "500,00", situacao: "A Pagar" },
  { vencimento: "19/09/2026", valor: "500,00", situacao: "A Pagar" },
  { vencimento: "19/10/2026", valor: "500,00", situacao: "A Pagar" },
  { vencimento: "19/11/2026", valor: "500,00", situacao: "A Pagar" },
  { vencimento: "19/12/2026", valor: "500,00", situacao: "A Pagar" },
  { vencimento: "19/01/2027", valor: "500,00", situacao: "A Pagar" },
  { vencimento: "19/02/2027", valor: "500,00", situacao: "A Pagar" },
];

export default function Boletos() {
  return (
    <div className="flex flex-col md:flex-row w-full min-h-screen bg-gray-50">
      <Aside />
      <main className="flex-1 flex flex-col w-full">
        <div className="px-4 md:px-8 pb-8 space-y-4">
          <PageHeader
            title="Meus Boletos"
            subtitle="Histórico de Pagamentos"
          />
          <DataTable columns={BOLETOS_COLUMNS} data={BOLETOS_DATA} />
        </div>
      </main>
    </div>
  );
}
