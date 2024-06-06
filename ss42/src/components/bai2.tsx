import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Form } from 'react-bootstrap';
export default function bai2() {
  return (
    <div>
        <Container>
      <Form>
        <Form.Group controlId="formLargeInput">
          <Form.Control size="lg" type="text" placeholder="Input cỡ lơn" />
        </Form.Group>

        <Form.Group controlId="formMediumInput">
          <Form.Control type="text" placeholder="Input cỡ trung bình" />
        </Form.Group>

        <Form.Group controlId="formSmallInput">
          <Form.Control size="sm" type="text" placeholder="Input cỡ bé" />
        </Form.Group>
      </Form>
    </Container>
    </div>
  )
}
