import React, {Component} from 'react';
import {Container,Row,Col} from 'react-bootstrap';
import './style.css';
class Contact extends Component{
    render (){
        return (
            <Container className="footer">
                <Row>
                    <Col sm={8}>
                        <ul className="footer__list">
                            <li className="footer__item"><a href="#0">About</a></li>
                            <li className="footer__item"><a href="#0">Contact</a></li>
                            <li className="footer__item"><a href="#0">Terms of Use</a></li>
                            <li className="footer__item"><a href="#0">Privacy Policy</a></li>
                        </ul>
                        <p className="text-muted" style={{fontSize: '13px'}}>Your website 2019. All Rights Reserved</p>
                    </Col>
                    <Col sm={4}>
                        <ul>
                            <li className="footer__item"><i className="fa fa-facebook-square fa-2x"></i></li>
                            <li className="footer__item"><i className="fa fa-twitter-square fa-2x"></i></li>
                            <li className="footer__item"><i className="fa fa-instagram fa-2x"></i></li>
                        </ul>
                    </Col>
                </Row>
            </Container>
        )
    }
}


export default Contact