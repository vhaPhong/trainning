import React,{Component} from 'react';
import {Container} from 'react-bootstrap';
import image from './people.jpg';

const peopleStyle = {
    width: '33.3333%'
}

const peopleImage = {
    borderRadius: '50%',
    width: '220px',
    height: '210px',
    backgroundImage: `url(${image})`,
    backgrondRepeat: 'no-repeat',
    backgroundSize: 'cover',
    margin: '0 auto'
}

class Comment extends Component {
    state = {
        persons:[
            {name:'Margaret E.',comment:'This is fantastic! Thanks so much guys!'},
            {name:'Fred S.',comment:'Bootstrap is amazing! i\'ve been using it to create lots of super nice landing pages'},
            {name:'Sarah W.',comment:'Thanks so much for making these free resources available to us!'},
        ]
    }
    render () {
        return (
            <Container style={{padding: '45px 0'}}>
                <h2 className="text-center font-weight-bold">What people are saying.....</h2>
                <div className="container mt-5 d-flex justify-content-center">
                    <div className=" text-center" style={peopleStyle}>
                        <div style={peopleImage}></div>
                        <h3 className="mt-3 font-weight-bold">{this.state.persons[0].name}</h3>
                        <p className="mt-3">{this.state.persons[0].comment}</p>
                    </div>
                    <div className=" text-center" style={peopleStyle}>
                        <div style={peopleImage}></div>
                        <h3 className="mt-3 font-weight-bold">{this.state.persons[1].name}</h3>
                        <p className="mt-3">{this.state.persons[1].comment}</p>
                    </div>
                    <div className=" text-center" style={peopleStyle}>
                        <div style={peopleImage}></div>
                        <h3 className="mt-3 font-weight-bold">{this.state.persons[2].name}</h3>
                        <p className="mt-3">{this.state.persons[2].comment}</p>
                    </div>
                </div>
            </Container>
        )
    }
}



export default Comment