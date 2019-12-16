import React,{Component} from 'react';
import {Col} from 'react-bootstrap';

class Intro extends Component {
        render(){
                return (
                        <Col className="text-center">
                        <i className={this.props.icon}></i>
                        <h2>{this.props.title}</h2>
                        <p>{this.props.text}</p>
                        </Col>
                );

        }
}
export default Intro;


        // <Container style={{paddingBottom: 40}}>
        //     <Row>
        //         <Col className="text-center">
        //         <i className="fa fa-desktop fa-5x"></i>
        //         <h2>{this.state.intros[0].title}</h2>
        //         <p>{this.state.intros[0].text}</p>
        //         </Col>
        //         <Col className="text-center">
        //         <i className="fa fa-desktop fa-5x"></i>
        //         <h2>{this.state.intros[1].title}</h2>
        //         <p>{this.state.intros[1].text}</p>
        //         </Col>
        //         <Col className="text-center">
        //         <i className="fa fa-desktop fa-5x"></i>
        //         <h2>{this.state.intros[2].title}</h2>
        //         <p>{this.state.intros[2].text}</p>
        //         </Col>
        //     </Row>
        // </Container>