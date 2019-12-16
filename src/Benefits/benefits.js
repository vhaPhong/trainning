import React,{Component} from 'react';
import './style.css';

class Benefits extends Component {
    render(){

        return (
            <div className="d-flex benefits">
                <div className="benefits__content">
                    <h2>{this.props.title}</h2>
                    <p>{this.props.text}</p>
                </div>
                <img className="benefits__img" src={this.props.image} alt="" />
            </div>
        );

    }

}





export default Benefits


            /*<Container fluid={true}>
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
            </Container>*/