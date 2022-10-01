import Clients from "../components/assets/Clients";
import Projects from "../components/assets/Projects";
import AddClientModal from "../components/addClientModal";
import AddProjectModal from "../components/addProjectModal";

export default function Home() {
  return (
    <>
      <div className="d-flex gap-3 mb-4">
        <AddClientModal />
        <AddProjectModal />
      </div>
      <Projects />
      <hr />
      <Clients />
    </>
  );
}
