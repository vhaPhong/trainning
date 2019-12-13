import React, {Component} from 'react';
import './style.css';
import imagePlay from './play.png';
import imageResponsive from './Responsive.png';
import imageScreen from './screen.png';
import { Container,Row } from 'react-bootstrap';

class Benefits extends Component {
    state = {
        benefits:[
            {title: 'Fully Responsive Design',
            text:'When you use a theme created by Start Bootstrap, you know that the theme will look great on any device, whether it\'s a phone, tablet, or desktop the page will behave responsively!'},
            {title: 'Ready to Use',
            text:'Lorem Ipsum is simply dummy text of the printing'},
            {title: 'Bootstrap 4 Ready',
            text:'Lorem Ipsum is simply dummy text of the printing',}
        ],
    }
    render () {
        return (
            <Container fluid={true}>
                <Row>
                    <div className="d-flex benefits">
                        <div className="benefits__content">
                            <h2>{this.state.benefits[0].title}</h2>
                            <p>{this.state.benefits[0].text}</p>
                        </div>
                        <img className="benefits__img" src={imagePlay} alt="" />
                    </div>
                        <div className="d-flex benefits">
                            <img className="benefits__img" src={imageResponsive} alt=""/>
                            <div className="benefits__content">
                                <h2>{this.state.benefits[1].title}</h2>
                                <p>{this.state.benefits[1].text}</p>
                            </div>
                        </div>
                    <div className="d-flex benefits">
                        <div className="benefits__content">
                            <h2>{this.state.benefits[2].title}</h2>
                            <p>{this.state.benefits[2].text}</p>
                        </div>
                        <img className="benefits__img" src={imageScreen} alt=""/>
                    </div>
                </Row>
            </Container>
        );
    }
}





export default Benefits