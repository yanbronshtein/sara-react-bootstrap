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
            // content: "Welcome to SARA",
            content: "",
            image: false,
            email: false
        }

    }

    /**Just content but no images */
    handleClick = (i) => {
        this.setState({
            content:i,
            image: false,
            email: false,
        })
    };

    handleEmailDisplay = (j)=>{
        this.setState({
            content: j,
            image: true,
            email: true,
        })
    };

    handleImageDisplay = (x)=>{
        this.setState({
            content: x,
            image: true,
            email: false,
        })
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
                                    <Search onClick={(i)=>this.handleClick(i)}/>
                                    <Browser onClick={(i) => {this.handleClick(i)}}/>
                                    <About onClick2={(j)=>this.handleEmailDisplay(j)} onClick={(x)=>this.handleImageDisplay(x)}/>
                                </Nav>
                                {/*<Form inline>*/}
                                {/*    <FormControl type="text" placeholder="Search" className="ml-sm-2" />*/}
                                {/*    <Button variant="outline-success">Search</Button>*/}
                                {/*</Form>*/}
                            </Navbar.Collapse>
                        </Navbar>
                    </Container>
                    <h1>{this.state.content}</h1>
                    <div id="content-container">
                        <div>
                            {/*<h2>{this.state.content}</h2>*/}
                            <h2>{this.state.email ? <a href="mailto:yanbron96@gmail.com?subject=Contact Developer" target="_blank">Contact Us</a> : null }</h2>


                        </div>
                    </div>
                </header>
            </div>
        );
    }


}



export default App;
