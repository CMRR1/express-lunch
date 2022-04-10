import React from "react";
import "./styles.css";
import { Nav, Navbar, Row, Col } from "react-bootstrap";


const Index = (props) => {
    function setFiltro(index) {
        props.updateFiltro(index);
    }
    return (

        <div className="menu shadow-sm p-3  bg-white rounded">
            <Row>
                <Col sm={9}>
                <Navbar.Brand className="title"><strong style={{ color: "#c23982" }}><em>Express</em></strong> Lunch Delivery</Navbar.Brand>
                </Col>
                <Col sm={3}>
                    <Navbar className="bar">
                        <Nav className="me-auto">
                            <Nav.Link className="item" onClick={() => setFiltro(-1)}>All</Nav.Link>
                            <Nav.Link className="item" onClick={() => setFiltro(0)}>Breakfast</Nav.Link>
                            <Nav.Link className="item" onClick={() => setFiltro(1)}>Lunch</Nav.Link>
                            <Nav.Link className="item" onClick={() => setFiltro(2)}>shakes</Nav.Link>
                        </Nav>
                    </Navbar>
                </Col>
            </Row>


        </div>
    );
}
export default Index;