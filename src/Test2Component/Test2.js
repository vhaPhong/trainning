import React,{Component} from 'react';
import {Button} from 'react-bootstrap';


class Test2 extends Component{
    count = () => {
        this.props.countNumber();
    }

    render(){
        return (
            <div>
            <Button onClick={this.count}>Count</Button>
            </div>
        )
    }
}

export default Test2