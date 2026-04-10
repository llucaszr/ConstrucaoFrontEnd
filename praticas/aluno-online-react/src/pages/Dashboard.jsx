import Topbar from "../components/Topbar";
import Card from "../components/Card";
import Sidebar from "../components/Sidebar";

function Dashboard() {
  return (
    <>
      <main>
        <Topbar />
        <h2>Bem vindo ao Portal do aluno</h2>
        <section>
          <Card />
          <Card />
          <Card />
        </section>
      </main>
    </>
  );
}

export default Dashboard;
