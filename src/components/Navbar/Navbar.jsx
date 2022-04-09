import React from "react";
import "./styles.css";
import { Nav, Navbar} from "react-bootstrap";

const Index = () => {
    return (
        <div className="menu">
            <Navbar.Brand className="title"><strong><em>Express</em></strong> Lunch Delivery</Navbar.Brand>
            <Navbar className="bar">
                    <Nav className="me-auto">
                        <Nav.Link className="item" href="#home">All</Nav.Link>
                        <Nav.Link className="item" href="#features">Breakfast</Nav.Link>
                        <Nav.Link className="item"href="#features">Lunch</Nav.Link>
                        <Nav.Link className="item"href="#features111">Snakes</Nav.Link>
                    </Nav>
            </Navbar>
        </div>
    );
}
export default Index;