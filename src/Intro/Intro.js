import React , {Component} from 'react';
import {Container,Row,Col} from 'react-bootstrap';

class Intro extends Component{
        state = {
        intros:[
            {title: 'Fully Responsive',text:'Lorem Ipsum is simply dummy text of the printing'},
            {title: 'Ready to Use',text:'Lorem Ipsum is simply dummy text of the printing'},
            {title: 'Bootstrap 4 Ready',text:'Lorem Ipsum is simply dummy text of the printing'}
        ],
        }
    render () {
        return (
        <Container style={{paddingBottom: 40}}>
            <Row>
                <Col className="text-center">
                <i className="fa fa-desktop fa-5x"></i>
                <h2>{this.state.intros[0].title}</h2>
                <p>{this.state.intros[0].text}</p>
                </Col>
                <Col className="text-center">
                <i className="fa fa-desktop fa-5x"></i>
                <h2>{this.state.intros[1].title}</h2>
                <p>{this.state.intros[1].text}</p>
                </Col>
                <Col className="text-center">
                <i className="fa fa-desktop fa-5x"></i>
                <h2>{this.state.intros[2].title}</h2>
                <p>{this.state.intros[2].text}</p>
                </Col>
            </Row>
        </Container>
        );
    }
}


export default Intro;