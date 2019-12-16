import React,{Component} from 'react';


class Comment extends Component {
    render(){

        const peopleImage = {
            borderRadius: '50%',
            width: '220px',
            height: '210px',
            backgroundImage: `url(${this.props.image})`,
            backgrondRepeat: 'no-repeat',
            backgroundSize: 'cover',
            margin: '0 auto'
        }
        const peopleStyle = {
            width: '33.3333%'
        }
            return (
                <div className="text-center" style={peopleStyle}>
                    <div style={peopleImage}></div>
                    <h3 className="mt-3 font-weight-bold">{this.props.name}</h3>
                    <p className="mt-3">{this.props.comment}</p>
                </div>
            );
    }
}



export default Comment

            /*<Container style={{padding: '45px 0'}}>
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
            </Container>*/