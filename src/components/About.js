import React from 'react'
import '../App.css'
import 'bootstrap/dist/css/bootstrap.min.css' //Added line for bootstrap stylesheets
import { NavDropdown } from 'react-bootstrap'


const About = (props) => {
    let developerContent = "\t Yaniv Bronshtein is an aspiring Software Engineer.\n "
        + "He likes to play tennis. He does not like front end yet but through blood, sweat, and tears will";

    return (
        <div>
            <NavDropdown title="About" id="about-dropdown">
                <NavDropdown.Item onClick={()=>props.onClick("Yaniv Bronshtein is an aspiring Software Engineer.")}>Developers</NavDropdown.Item>
                <NavDropdown.Item onClick={()=>props.onClick2()}>Contact Us</NavDropdown.Item>
            </NavDropdown>
        </div>
    )
};



export default About;