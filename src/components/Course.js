import React from 'react'
import '../App.css'
import 'bootstrap/dist/css/bootstrap.min.css' //Added line for bootstrap stylesheets

import { NavDropdown } from 'react-bootstrap'


const Course = (props) => {
    return (
        <div>
            <NavDropdown title="Course" id="course-dropdown">
                <NavDropdown.Item href="https://learn.zybooks.com/zybook/CUNYCSCI355TeitelmanFall2019/" rel="noopener noreferrer" target="_blank">Zysbooks</NavDropdown.Item>
                <NavDropdown.Item href="https://app.tophat.com/e/648883/lecture/" rel="noopener noreferrer" target="_blank" >TopHat</NavDropdown.Item>
                <NavDropdown.Item href="https://drive.google.com/drive/folders/1AsHhIFfQ3yNE_m2z4wswRfKh77K0UH9w" rel="noopener noreferrer" target="_blank">Google Drive</NavDropdown.Item>
                <NavDropdown.Item href="https://www.w3schools.com/" rel="noopener noreferrer" target="_blank">W3Schools</NavDropdown.Item>
            </NavDropdown>
        </div>


    )

};


export default Course;