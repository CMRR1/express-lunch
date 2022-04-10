import React from "react";
import "./styles.css";
import { Nav, Navbar } from "react-bootstrap";


const Index = (props) => {
    var prueba = [true, true, true];
    function setFiltro(index) {
        if (index !== -1) {
            prueba.forEach(element => {
                element = false;
            });
            prueba[index] = true;
        }
        console.log(prueba);
    }
    console.log(props.filtro)
    return (
        <div className="menu">
            <Navbar.Brand className="title"><strong style={{ color: "#c23982" }}><em>Express</em></strong> Lunch Delivery</Navbar.Brand>
            <Navbar className="bar">
                <Nav className="me-auto">
                    <Nav.Link className="item" href="#home">All</Nav.Link>
                    <Nav.Link className="item" onClick={() => setFiltro(0)}>Breakfast</Nav.Link>
                    <Nav.Link className="item" onClick={() => setFiltro(1)}>Lunch</Nav.Link>
                    <Nav.Link className="item" onClick={() => setFiltro(2)}>shakes</Nav.Link>
                </Nav>
            </Navbar>
        </div>
    );
}
export default Index;