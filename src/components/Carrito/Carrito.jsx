import React from 'react';
import { Card, Row, Col, Button, ListGroup, ListGroupItem } from 'react-bootstrap';

const Index = () => {
    return (
        <div>

            <Row>
                <Col sm={8} />
                <Col sm={3}>
                    <Card className="card-carrito">
                        <Card.Body>
                            <Card.Title className="justify-content-center text-center"><strong>Orden Details</strong></Card.Title>
                        </Card.Body>
                        {/* <ListGroup style={{color: ''}} className="border-0">
                            <ListGroupItem></ListGroupItem>
                        </ListGroup> */}
                        <div className="text-center">
                            <Button style={{ backgroundColor: '#B1CA9E', borderColor:'#B1CA9E', marginBottom: '10px', width: '30%'}} size="sm">Clear</Button>
                        </div>
                        <div className="text-center">
                            <Button style={{ backgroundColor: '#EE7F7B', borderColor:'#EE7F7B', marginBottom: '10px', width: '30%' }} size="sm">Place Order</Button>
                        </div>

                    </Card>
                </Col>
            </Row>
        </div>
    );
};
export default Index;