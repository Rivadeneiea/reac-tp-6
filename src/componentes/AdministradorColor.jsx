import { Button } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import ListaColor from "./ListaColor";

const AdministradorColor = () => {
  return (
    <>
      {" "}
      <Form>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Control type="text" placeholder="Ingrese un color" />
        </Form.Group>
        <Button variant="primary">Guardar</Button>
      </Form>{" "}
      <ListaColor></ListaColor>
    </>
  );
};

export default AdministradorColor;
