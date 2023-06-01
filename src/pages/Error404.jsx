import AppLayout from "../layout/AppLayout.jsx"
import { Container, Row, Col } from "react-bootstrap"

export default function Error404() {

  return (
    <AppLayout>
      <Container>
        <Row>
          <Col>
          <h1>error</h1>
          </Col>
        </Row>
      </Container>
    </AppLayout>
  )
}