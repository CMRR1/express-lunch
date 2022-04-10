import React from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import "./styles.css";
import { menudata } from '../../static/data/menu';


const Index = (props) => {
    const breakfast = menudata.breakfast.map(i =>
        <Col md={4} style={{ width: '38em', marginBottom: '2em', marginLeft: '0' }}>
            <Card className="border-0">
                <Row>
                    <Col sm={4} className="border-bottom-1">
                        <Card.Img className='img' src={require("../../static/assets/" + i.image + ".jpg")} />
                    </Col>
                    <Col sm={7}>
                        <Card.Body>
                            <Col>
                            </Col>
                            <div className='card-title' style={{ border: 'solid', borderLeft: '0px', borderRight: '0px', borderTop: '0px', borderWidth: '2px', borderColor: '#f3f3fb' }}>
                                <Card.Title><strong>{i.title}</strong></Card.Title>
                                <h5 style={{ color: '#bd9158', float: 'right', marginLeft: '22%' }}><strong> ${i.price}</strong></h5>
                            </div>
                            <Card.Text style={{ color: '#6c8099' }}>
                                {i.description}
                            </Card.Text>
                            <button className='card-button'>Add</button>
                        </Card.Body>
                    </Col>
                </Row>
            </Card>
        </Col>
    );
    const lunch = menudata.lunch.map(i =>
        <Col md={4} style={{ width: '38em', marginBottom: '2em' }}>
            <Card className="border-0">
                <Row>
                    <Col sm={4} className="border-bottom-1">
                        <Card.Img className='img' src={require("../../static/assets/" + i.image + ".jpg")} />
                    </Col>
                    <Col sm={7}>
                        <Card.Body>
                            <Col>
                            </Col>
                            <div className='card-title' style={{ border: 'solid', borderLeft: '0px', borderRight: '0px', borderTop: '0px', borderWidth: '2px', borderColor: '#f3f3fb' }}>
                                <Card.Title><strong>{i.title}</strong></Card.Title>
                                <h5 style={{ color: '#bd9158', float: 'right', marginLeft: '22%' }}><strong> ${i.price}</strong></h5>
                            </div>
                            <Card.Text style={{ color: '#6c8099' }}>
                                {i.description}
                            </Card.Text>
                            <button className='card-button'>Add</button>
                        </Card.Body>
                    </Col>
                </Row>
            </Card>
        </Col>
    );
    const shakes = menudata.shakes.map(i =>
        <Col md={4} style={{ width: '38em', marginBottom: '2em' }}>
            <Card className="border-0">
                <Row>
                    <Col sm={4} className="border-bottom-1">
                        <Card.Img className='img' src={require("../../static/assets/" + i.image + ".jpg")} />
                    </Col>
                    <Col sm={7}>
                        <Card.Body>
                            <Col>
                            </Col>
                            <div className='card-title' style={{ border: 'solid', borderLeft: '0px', borderRight: '0px', borderTop: '0px', borderWidth: '2px', borderColor: '#f3f3fb' }}>
                                <Card.Title><strong>{i.title}</strong></Card.Title>
                                <h5 style={{ color: '#bd9158', float: 'right', marginLeft: '22%' }}><strong> ${i.price}</strong></h5>
                            </div>
                            <Card.Text style={{ color: '#6c8099' }}>
                                {i.description}
                            </Card.Text>
                            <button className='card-button'>Add</button>
                        </Card.Body>
                    </Col>
                </Row>
            </Card>
        </Col>
    );

    return (
        <div>
            <Container>
                {props.filtro.b ?
                    <Row>
                        {breakfast}
                    </Row> : null}

                {props.filtro.l ?
                    <Row>
                        {lunch}
                    </Row> : null
                }

                {props.filtro.s ?
                    <Row>
                        {shakes}
                    </Row> : null
                }

            </Container>


        </div>
    );
}
export default Index;