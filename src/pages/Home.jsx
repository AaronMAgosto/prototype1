import { Container, Row, Col } from "react-bootstrap"
import Gallery from "../components/Gallery"
import AppLayout from "../layout/AppLayout.jsx"

export default function Home() {

  return (
    <AppLayout>
      <Container>
        <Row>
          <Col>
          <h2>Home</h2>
          </Col>
        </Row>

        <Row>
          <Col md={9} className="mb-5">
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Velit, nisi sunt. Quisquam excepturi, accusantium culpa reiciendis placeat beatae, rerum sequi, nulla asperiores esse tempora accusamus! Reiciendis omnis voluptatum enim aliquid.</p>
          </Col>
        </Row>
      </Container>
      
      <Gallery/>
    </AppLayout>
  )
}