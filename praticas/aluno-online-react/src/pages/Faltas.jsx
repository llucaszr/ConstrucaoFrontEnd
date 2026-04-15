import Aside from "../components/Aside";
import FaltasHeader from "../components/FaltasHeader";
import FaltasTable2026 from "../components/FaltasTable2026";
import FaltasTable2025 from "../components/FaltasTable2025";

export default function Faltas() {
  return (
    <div className="flex flex-col md:flex-row w-full min-h-screen bg-gray-50">
      <Aside />
      <main className="flex-1 flex flex-col w-full">
        <div className="px-4 md:px-8 pb-8 space-y-4">
          <FaltasHeader />
          <FaltasTable2026 />
          <FaltasTable2025 />
        </div>
      </main>
    </div>
  );
}
