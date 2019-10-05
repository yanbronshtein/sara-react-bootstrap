import { Form, Navbar, Nav, Button, FormControl } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';

import React from 'react';
import './App.css';
import Course from "./components/Course";
import Search from "./components/Search";
import Browser from "./components/Browser";
import About from "./components/About";


class App extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            content: "This is my home page for CS 355",
            img: false,
            email: false,
        }
    }

    handleClick = (i)=>{
        this.setState({
            content: i,
            img: false,
            email: false,
        })
    };

    handleImgEmail = (j)=>{
        this.setState({
            content: j,
            img: true,
            email: true,
        })
    };

    handleImg = (x)=>{
        this.setState({
            content: x,
            img: true,
            email: false,
        })
    };


    render() {

        return (

            <div className="App">


                <header className="App-header">


                    <Navbar collapseOnSelect="true" bg="light" variant="light" expand="lg">
                        <Navbar.Brand href="#home">CS355</Navbar.Brand>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="mr-auto">

                                <Nav.Link onClick={()=>{
                                    this.setState({
                                        content: "This is my home page for CS 355",
                                    })}}>Home</Nav.Link>

                                <Course />
                                <Search onClick={(i)=>this.handleClick(i)}/>
                                <Browser onClick={(i)=>this.handleClick(i)}/>
                                <About onClick2={(j)=>this.handleImgEmail(j)} onClick={(x)=>this.handleImg(x)}/>

                            </Nav>
                            <Form inline>
                                <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                                <Button variant="outline-success">Search</Button>
                            </Form>
                        </Navbar.Collapse>
                    </Navbar>

                    <div id="content-container">
                        <div>

                            <h2>{this.state.content}</h2>
                            <h2>{this.state.email ? <a href="mailto:aimeedu11@gmail.com?subject=Contact Developer"target="_blank">Contact Us</a> : null }</h2>


                        </div>
                    </div>

                </header>
            </div>


        );
    }
}


export default App;
