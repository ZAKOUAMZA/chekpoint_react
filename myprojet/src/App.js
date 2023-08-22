import {Navbar,Form,Card,Button,NavDropdown,Container,Nav} from "react-bootstrap"
import "./App.css"
export default function App() {
  return (
    
    <div className="App">
    <Card.Header style={{ backgroundColor: '#3f4649', height:"80px" }}></Card.Header>
    <Navbar expand="lg" className="bg">
      <Container fluid>
        <Navbar.Brand href="#" style={{ color: 'white',fontSize: '2em' }}>Hamza_Coder</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link href="#" id="acceuil">Acceuil</Nav.Link>
            <Nav.Link href="#" id="Appropos">Contact</Nav.Link>
            <NavDropdown title="Appropos" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action4">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5">
                Something else here
              </NavDropdown.Item>
            </NavDropdown>
            
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
           />
         <Button variant="" id="me-2">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    <div className="container">
    <div >
    <Card  border="primary" style={{ width: '18rem' }}>
        <Card.Header>Amza</Card.Header>
        <Card.Body>
          <Card.Title>Etudiant Canadien</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
          <Card.Footer>Salut !</Card.Footer>
        </Card.Body>
      </Card>
      <br />
    </div>
    <div >
    <Card  border="primary" style={{ width: '18rem' }}>
        <Card.Header>Zakou</Card.Header>
        <Card.Body>
          <Card.Title>Revendeur Ivoirien</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
          <Card.Footer>Cool !</Card.Footer>

        </Card.Body>
      </Card>
      <br />
    </div>
    <div >
    <Card  border="primary" style={{ width: '18rem' }}>
    <Card.Header>Zalika</Card.Header>
<Card.Body>
  <Card.Title>Ménagère Nigérienne</Card.Title>
  <Card.Text>
    Some quick example text to build on the card title and make up the
    bulk of the card's content.
  </Card.Text>
  <Card.Footer>How are you !</Card.Footer>

</Card.Body>

      </Card>
      <br />
    </div>
    </div>
    <div>
    
    </div>
    </div>
  );
}


