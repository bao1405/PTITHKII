import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';

const ProductCard = ({ imageSrc, title, description, price }) => {
  // Format the price to Vietnamese currency format
  const formattedPrice = new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(price);

  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={imageSrc} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{description}</Card.Text>
        <Row>
          <Col>
            <Button variant="primary">Xem chi tiết</Button>
          </Col>
          <Col>
            <Card.Text>{formattedPrice}</Card.Text>
          </Col>
        </Row>
      </Card.Body>
    </Card>
  );
};

const App = () => {
  return (
    <Container>
      <h1>Bài 3</h1>
      <Row>
        <Col>
          <ProductCard
            imageSrc="https://up.yimg.com/ib/th?id=OIP.JJgWGj67saBa2GGqu9cPTAHaHa&pid=Api&rs=1&c=1&qlt=95&w=106&h=106"
            title="Macbook"
            description="The reason I am selling the machine is because it is too much power for what I need."
            price={30000000}
          />
        </Col>
        <Col>
          <ProductCard
            imageSrc="https://up.yimg.com/ib/th?id=OIP.JJgWGj67saBa2GGqu9cPTAHaHa&pid=Api&rs=1&c=1&qlt=95&w=106&h=106"
            title="Macbook"
            description="The reason I am selling the machine is because it is too much power for what I need."
            price={30000000}
          />
        </Col>
      </Row>
    </Container>
  );
};

export default App;
