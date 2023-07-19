import { Container } from "react-bootstrap";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import AdministradorColor from "./componentes/AdministradorColor";

function App() {
  return (
    <>
      <Container>
        <h1>Administrador de colores</h1>
        <AdministradorColor></AdministradorColor>
      </Container>
    </>
  );
}

export default App;
