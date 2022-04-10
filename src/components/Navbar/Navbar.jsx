import React from "react";
import "./styles.css";
import { Nav, Navbar } from "react-bootstrap";


const Index = (props) => {
    function setFiltro(index) {
        props.updateFiltro(index);
    }
    return (
        <div className="menu">
            <Navbar.Brand className="title"><strong style={{ color: "#c23982" }}><em>Express</em></strong> Lunch Delivery</Navbar.Brand>
            <Navbar className="bar">
                <Nav className="me-auto">
                    <Nav.Link className="item" onClick={() => setFiltro(-1)}>All</Nav.Link>
                    <Nav.Link className="item" onClick={() => setFiltro(0)}>Breakfast</Nav.Link>
                    <Nav.Link className="item" onClick={() => setFiltro(1)}>Lunch</Nav.Link>
                    <Nav.Link className="item" onClick={() => setFiltro(2)}>shakes</Nav.Link>
                </Nav>
            </Navbar>
        </div>
    );
}
export default Index;