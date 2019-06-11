import React, { Component } from 'react';
import { 
    Container,
    Row, 
    Col 
} from 'react-bootstrap';

class NoPage extends Component {
    render (){
        return(
            <Container>
                <Row>
                    <Col md={12}>
                        <h1>Sorry...Something Wrong...</h1>
                    </Col>
                </Row>
            </Container>
        )
    }
}

export default NoPage;