import { Navbar, Nav } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';

import React from 'react';
import './App.css';
import Course from "./components/Course";
import Search from "./components/Search";
import Browser from "./components/Browser";
import About from "./components/About";

//Hmmm
class App extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            content: "Introducing SARA, your favorite Search And Reporting Application!",
            email: false,
            img: false
        }
    }

    handleClick = (i)=>{
        this.setState({
            content: i,
            email: false,
            img: false
        })
    };

    handleImgEmail = (j)=>{
        this.setState({
            content: j,
            email: true,
            img: true
        })
    };

    handleImg = (x)=>{
        this.setState({
            content: x,
            email: false,
            img: true
        })
    };


    render() {

        return (

            <div className="App">


                <header className="App-header">


                    <Navbar collapseOnSelect="true" bg="light" variant="light" expand="lg">
                        <Navbar.Brand href="#home">SARA</Navbar.Brand>
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
                            {this.state.img ?

                                <img
                                    src="https://scontent-lga3-1.xx.fbcdn.net/v/t31.0-8/21457847_1789910061037885_1525542044708099137_o.jpg?_nc_cat=103&_nc_oc=AQlYOu-5jY7uX3jGPa79JspMs423PbETM1A5NpjmYH4m8bZXKBYtOAZtfc0Vo5ZARks&_nc_ht=scontent-lga3-1.xx&oh=5ab436c710c26e0b437f8c78ff41d3e8&oe=5E243A5F"
                                    alt="me"></img>
                                // :<img src="https://images-na.ssl-images-amazon.com/images/I/61F6AWE5fkL._SY741_.jpg" alt="c1"></img>
                                : <img
                                    src="data:image/jpeg;base64,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"
                                    alt="cap"></img>
                            }

                            <h3>{this.state.content}</h3>
                            <h3>{this.state.email ? <a href="mailto:yanbron96@gmail.com?subject=By Contact Developer we mean Yaniv: Go fix"  rel="noopener noreferrer" target="_blank">Contact Us</a> : null }</h3>


                        </div>
                    </div>

                </header>
            </div>


        );
    }
}


export default App;
