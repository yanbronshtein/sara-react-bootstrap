import { Navbar, Nav } from 'react-bootstrap'
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
            content: "Introducing SARA, your favorite Search And Reporting Application!",
            email: false,
        }
    }

    handleClick = (i)=>{
        this.setState({
            content: i,
            email: false,
        })
    };

    handleImgEmail = (j)=>{
        this.setState({
            content: j,
            email: true,
        })
    };

    handleImg = (x)=>{
        this.setState({
            content: x,
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
                                        content: "Welcome home to SARA, your favorite Search And Reporting Application!",
                                    })}}>Home</Nav.Link>

                                <Course />
                                <Search onClick={(i)=>this.handleClick(i)}/>
                                <Browser onClick={(i)=>this.handleClick(i)}/>
                                <About onClick2={(j)=>this.handleImgEmail(j)} onClick={(x)=>this.handleImg(x)}/>

                            </Nav>
                        </Navbar.Collapse>
                    </Navbar>

                    <div id="content-container">
                        <div>

                            <h2>{this.state.content}</h2>
                            <h2>{this.state.email ? <a href="mailto:aimeedu11@gmail.com?subject=Harass your Developer"  rel="noopener noreferrer" target="_blank">Contact Us</a> : null }</h2>


                        </div>
                    </div>

                </header>
            </div>


        );
    }
}


export default App;
