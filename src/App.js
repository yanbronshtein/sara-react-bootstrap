import React,{Component} from 'react'
import {Button, Container, Form, FormControl, Nav, Navbar, NavDropdown} from 'react-bootstrap'
import logo from './logo.svg'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import About from "./components/About"
import Browser from "./components/Browser"
import Search from "./components/Search"
import Course from "./components/Course" //Added line for bootstrap stylesheets
class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      content: "Welcome to SARA",
      //todo: Add images
    }

  }

  handleClick = (i) => {
    this.setState({content:i})

  };



  render() {

    return (
        <div className="App">
          <header className="App-header">
            <Container>
              <Navbar bg="light" expand="lg">
                <Navbar.Brand href="#home">SARA</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                <Navbar.Collapse id="basic-navbar-nav">
                  <Nav className="mr-auto">
                    <Nav.Link href="#home">Home</Nav.Link>
                    <Course/>
                    <Search/>

                    <Browser onClick={(i) => {this.handleClick(i)}}/>

                    <About/>
                  </Nav>

                </Navbar.Collapse>
              </Navbar>
            </Container>
            <h1>{this.state.content}</h1>
          </header>
        </div>
    );
  }
}



export default App;
