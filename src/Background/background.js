import React, {Component} from 'react';
import {Button} from 'react-bootstrap';
import background from './sea.jpg';
import './style.css';

const conStyle = {
    backgroundSize: 'cover',
    backgroundImage: `url(${background})`,
    alignItems:'center',
    height: '400px'
};

class Background extends Component{
    render() {
        return (
            <div className="header__banner container-fuild d-flex justify-content-center" style={conStyle} >
                <div className="text-center header--width-50">
                    <h2 className="header__title">Build a landing page for your business or project and generate more leads!</h2>
                    <div className=" d-flex justify-content-center">
                        <input className="header__input" placeholder="Enter your Email...." />
                        <Button className="header__btn" color="info">Sign up</Button>
                    </div>
                </div>
            </div>
        );
    }
}


export default Background;