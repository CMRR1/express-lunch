import React from 'react';
import { Card, Row, Col, Button, ListGroup, ListGroupItem, InputGroup,FormControl } from 'react-bootstrap';
import { FaTrash } from "react-icons/fa";
const Index = () => {
    return (
        <div>

            <Row>
                <Col sm={8} />
                <Col sm={3}>
                    <Card className="card-carrito shadow p-3 mb-5 bg-white rounded">
                        <Card.Body>
                            <Card.Title style={{ color: '#172940' }} className="justify-content-center text-center"><strong>Orden Details</strong></Card.Title>
                        </Card.Body>
                        <InputGroup className="mb-3 ml-3 mr-3">
                            <FormControl style={{backgroundColor: '#f1f5f8', border: 'none'}}/>
                            <Button style={{backgroundColor: '#a2d0f5', border: 'none', color:'#172940'}}variant="outline-secondary" id="button-addon2">
                                Add
                            </Button>
                        </InputGroup>
                        <ListGroup className="border-0">
                            <Row>
                                <Col sm={9} >
                                    <ListGroupItem style={{ color: '#172940', border: 'none' }}>Item 1 (3)</ListGroupItem>
                                </Col>
                                <Col sm={3}>
                                    <Button style={{ backgroundColor: 'Transparent', border: 'none', color: '#EE7F7B' }} className="button-trash"><FaTrash className='icon m-auto p-auto' /></Button>
                                </Col>
                            </Row>

                        </ListGroup>
                        <div className="text-center">
                            <Button style={{ backgroundColor: '#EE7F7B', borderColor: '#EE7F7B', marginBottom: '10px', width: '30%', marginTop: '10px' }} size="sm">Clear</Button>
                        </div>
                        <div className="text-center">
                            <Button style={{ backgroundColor: '#B1CA9E', borderColor: '#B1CA9E', marginBottom: '10px', width: '30%' }} size="sm">Place Order</Button>
                        </div>

                    </Card>
                </Col>
            </Row>
        </div>
    );
};
export default Index;