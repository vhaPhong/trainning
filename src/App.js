import React,{Component} from 'react';
import './App.css';
import Background from './Background/background.js';
import {Layout} from "antd";
import Menu from './Navbar/Navbar';
import Intro from './Intro/Intro';
import Benefits from './Benefits/benefits';
import Comment from './Comment/Comment';
import Contact from './Contact/Contact';
import { Container,Row,Button } from 'react-bootstrap';
import imagePlay from './play.png';
import imageResponsive from './Responsive.png';
import imageScreen from './screen.png';
import imagePeople from './people.jpg';
import Test1 from './Test1Component/Test1';
import Test2 from './Test2Component/Test2';
const {Header,Content,Footer} = Layout;

class App extends Component {
  state = {
    intros:[
      {title: 'Fully Responsive',text:'Lorem Ipsum is simply dummy text of the printing',icon:'fa fa-desktop fa-5x'},
      {title: 'Ready to Use',text:'Lorem Ipsum is simply dummy text of the printing',icon:'fa fa-desktop fa-5x'},
      {title: 'Bootstrap 4 Ready',text:'Lorem Ipsum is simply dummy text of the printing',icon:'fa fa-desktop fa-5x'}
    ],
    benefits:[
      {image:imagePlay},
      {image:imageResponsive},
      {image:imageScreen}
    ],
    persons:[
      {name:'Margaret E.',comment:'This is fantastic! Thanks so much guys!',image:imagePeople},
      {name:'Fred S.',comment:'Bootstrap is amazing! i\'ve been using it to create lots of super nice landing pages'},
      {name:'Sarah W.',comment:'Thanks so much for making these free resources available to us!'},
    ],  
    dem : 0
  }

  countNumber = () => {
    this.setState({dem : this.state.dem + 1 })
  }
render (){
    return (
      <Layout>
        <div>
        <Test2 countNumber={this.countNumber}/>
        <Test1 number={this.state.dem}/>
          <Button style={{backgroundColor:'red'}} onClick={this.countNumber}>{this.state.dem}</Button>
        </div>
        {/* <p>{this.state.dem}</p> */}
        <Header>
        <Menu/>
        <Background/>
        </Header>
        <Content style={{paddingTop: 40}}>
        <Container>
          <Row>
            <Intro title={this.state.intros[0].title}
            text={this.state.intros[0].text}
            icon={this.state.intros[0].icon}/>
            <Intro title={this.state.intros[1].title}
            text={this.state.intros[1].text}
            icon={this.state.intros[0].icon}/>
            <Intro title={this.state.intros[2].title}
            text={this.state.intros[2].text}
            icon={this.state.intros[0].icon}/>
          </Row>
        </Container>


        <Container fluid={true}>
          <Row>
            <Benefits title={this.state.intros[0].title}
            text={this.state.intros[0].text}
            image={this.state.benefits[0].image}/>
            <Benefits title={this.state.intros[1].title}
            text={this.state.intros[1].text}
            image={this.state.benefits[1].image}/>
            <Benefits title={this.state.intros[2].title}
            text={this.state.intros[2].text}
            image={this.state.benefits[2].image}/>
          </Row>
        </Container>
        <Container style={{padding: '45px 0'}}>          
        <h2 className="text-center font-weight-bold">What are people saying....</h2>
        <div className="d-flex justify-content-center">
        <Comment name={this.state.persons[0].name}
            comment={this.state.persons[0].comment}
            image={this.state.persons[0].image}
          />
          <Comment name={this.state.persons[1].name}
            comment={this.state.persons[1].comment}
            image={this.state.persons[0].image}
          />
          <Comment name={this.state.persons[2].name}
            comment={this.state.persons[2].comment}
            image={this.state.persons[0].image}
          />
        </div>        
        </Container>
        </Content>
        <Footer>
        <Background/>
        <Contact/>
        {/* <Test1 number={this.state.dem}/>
          <Button style={{backgroundColor:'red'}} onClick={this.countNumber}>{this.state.dem}</Button> */}
        </Footer>
        </Layout>
    );
  }
}

export default App;
