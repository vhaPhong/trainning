import React,{Component} from 'react';
import {Button} from 'react-bootstrap';

class Test1 extends Component {
    // state = {
    //     dem : 0
    // }

    // countNumber = () => {
    //     this.setState({dem: this.state.dem + 1})
    //     console.log(this.props);
    //     this.props.countNumber();
    // }

    render(){
        console.log(this.props);
        return (
            <Button>{this.props.number}</Button>
        )
    }
}

export default Test1


