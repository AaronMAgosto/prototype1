import AppLayout from'../layout/AppLayout.jsx'
import { Container,Row, Col } from "react-bootstrap"

export default function About() {

  return(
    <AppLayout>
      <Container>
        <Row>
          <Col>
          <h1>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illo assumenda dicta reprehenderit eligendi doloribus. Officiis reiciendis cupiditate expedita inventore sint eos in velit nulla deserunt, distinctio praesentium, eaque maxime officia.</h1>
          </Col>
        </Row>
      </Container>
    </AppLayout>

  )
}