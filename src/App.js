import React,{Component} from 'react';
import './App.css';
import Background from './Background/background.js';
import {Layout} from "antd";
import Menu from './Navbar/Navbar';
import Intro from './Intro/Intro';
import Benefits from './Benefits/benefits';
import Comment from './Comment/Comment';
import Contact from './Contact/Contact';
const {Header,Content,Footer} = Layout;

class App extends Component {
render (){
    return (
      <Layout>
        <Header>
        <Menu/>
        <Background/>
        </Header>
        <Content style={{paddingTop: 40}}>
        <Intro/>
        <Benefits/>
        <Comment/>
        </Content>
        <Footer>
          <Background/>
          <Contact/>
        </Footer>
        </Layout>
    );
  }
}

export default App;
