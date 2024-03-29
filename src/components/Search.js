import React from 'react'
import '../App.css'
import 'bootstrap/dist/css/bootstrap.min.css' //Added line for bootstrap stylesheets

import { NavDropdown } from 'react-bootstrap';
const Search = (props) => {
    return (
        <div>
            <NavDropdown title="Search" id="search-dropdown">
                <NavDropdown.Item href="#">From File</NavDropdown.Item>
                <NavDropdown.Item href="#">Google API</NavDropdown.Item>
                <NavDropdown.Item href="#">Google Drive</NavDropdown.Item>
                <NavDropdown.Item href="#">My Search Engine</NavDropdown.Item>
            </NavDropdown>
        </div>
    )
};

export default Search;