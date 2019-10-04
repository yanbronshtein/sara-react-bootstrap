import React from 'react'
// import Mailto from 'react-mailto'
import '../App.css'
import 'bootstrap/dist/css/bootstrap.min.css' //Added line for bootstrap stylesheets
// import Mailto from 'react-protected-mailto'
// import MailDeveloper from "./MailDeveloper";
import { NavDropdown } from 'react-bootstrap'

const About = (props) => {
    let developerContent = "\t Yaniv Bronshtein is an aspiring Software Engineer.\n "
        + "He likes to play tennis. He does not like front end yet but through blood, sweat, and tears will";

    return (
        <div>
            <NavDropdown title="About" id="about-dropdown">
                <NavDropdown.Item onClick={()=> props.onClick(developerContent)}>Developers</NavDropdown.Item>
                <NavDropdown.Item onClick={()=>MailDeveloper}>Contact Us</NavDropdown.Item>

            </NavDropdown>
        </div>
    )

};


// export default () => (
//     <p>
//         Phone: <Mailto tel='205-454-1234' /><br />
//         Email: <Mailto
//         email='hello@coston.cool'
//         headers={
//             {subject:'Question from the website'},
//         {cc:'friend@coston.cool'}
//         }/>
//     </p>
// )
// const mailDeveloper = () => (
//     <p>
//         Phone: <Mailto tel='205-454-1234' /><br />
//         Email: <Mailto
//         email='hello@coston.cool'
//
//         />
//     </p>
// );
// const mailDeveloper = () => {
//     var React  = require('react');
//     var Mailto = require('react-mailto');
//
//     var Component = React.createClass({
//         render: function () {
//             return (
//                 <Mailto email="j@sonbellamy.com" obfuscate={true}>
//                     Email me!
//                 </Mailto>
//             );
//         }
//     });
//
// };
//
export default About;