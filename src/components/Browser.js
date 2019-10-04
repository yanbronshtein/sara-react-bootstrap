import React from 'react'
import { NavDropdown } from 'react-bootstrap'
import '../App.css'
import 'bootstrap/dist/css/bootstrap.min.css' //Added line for bootstrap stylesheets




const Browser = (props) => {
    return (
        <div>
            <NavDropdown title="Browser" id="browser-dropdown">
                <NavDropdown.Item onClick={()=> props.onClick(browserContent)}>Navigator</NavDropdown.Item>
                <NavDropdown.Item onClick={()=> props.onClick(windowContent)}>Window</NavDropdown.Item>
                <NavDropdown.Item onClick={()=> props.onClick(screenContent)}>Screen</NavDropdown.Item>
                <NavDropdown.Item onClick={()=> props.onClick(locationContent)}>Location</NavDropdown.Item>
                <NavDropdown.Item onClick={()=> props.onClick(geoLocationContent)}>GeoLocation</NavDropdown.Item>
            </NavDropdown>
        </div>
    )
};

const browserContent = "Browser CodeName: " + window.navigator.appCodeName + "\n"
    + "Browser Name: " + window.navigator.appName + "\n"
    + "Browser Version: " + window.navigator.appVersion + "\n"
    + "Cookies Enabled: " + window.navigator.cookieEnabled + "\n"
    + "Browser Language: " + window.navigator.language + "\n"
    + "Browser Online: " + window.navigator.onLine + "\n"
    + "Platform: " + window.navigator.platform + "\n"
    + "User-agent header: " + navigator.userAgent + "\n";


const windowContent = "Window innerHeight: " + window.innerHeight + "\n"
    + "Window innerWidth: " + window.innerWidth + "\n";


const screenContent = "Screen Height: " + window.screen.height + "\n"
    + "Screen Width: " + window.screen.width + "\n"
    + "Screen availHeight: " + window.screen.availHeight + "\n"
    + "Screen colorDepth: " + window.screen.colorDepth + "\n"
    + "Screen pixelDepth: " + window.screen.pixelDepth + "\n";


const locationContent = "Location href: " + window.location.href + "\n"
    + "Location hostname: " + window.location.hostname + "\n"
    + "Location pathname: " + window.location.pathname + "\n"
    + "Location protocol: " + window.location.protocol + "\n";


if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(displayLocationInfo);
}

let geoLocationContent = "";
function displayLocationInfo(position) {
    geoLocationContent = "GeoLocation longitude: " + position.coords.longitude
    + "GeoLocation latitude: "+ position.coords.latitude;
}






export default Browser
