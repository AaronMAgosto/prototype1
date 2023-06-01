import AppLayout from "../layout/AppLayout.jsx"
import { Container, Row, Col } from "react-bootstrap"

export default function Home() {

  return (
    <AppLayout>
      <Container>
        <Row>
          <Col>
          <h1>Home</h1>
          </Col>
        </Row>
      </Container>
    </AppLayout>
  )
}