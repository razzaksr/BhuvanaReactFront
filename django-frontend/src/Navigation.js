import {Container, Nav, Navbar} from 'react-bootstrap'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
export const Menu=()=>{
    return(
        <>
            <Navbar bg="light" expand="lg">
                <Container fluid>
                    <Navbar.Brand href="#home">
                        <img src="favicon.ico" width="100px" height="40px"/>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="corporate-crud" />
                    <Navbar.Collapse id="corporate-crud">
                    <Nav className="ms-auto">
                        <Nav.Link active href="/">Home</Nav.Link>
                        <Nav.Link href="/one">One</Nav.Link>
                        <Nav.Link href="/two">Two</Nav.Link>
                    </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    )
}