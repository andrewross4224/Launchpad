import NavDropdown from 'react-bootstrap/NavDropdown';
import { useContext } from "react";
import { LocationContext } from "../App";
/* 
Location ID's inorder:
    12   28.440797968127775, -80.57989329685985
    27   28.524165372862775, -80.68099057929525
    26   30.377882432462272, 130.95768901302168
    15   45.96480879985383, 63.305221340387675
    14   13.725917398821657, 80.22642575142532
    10   -39.258229128862176, 177.86863750871214
*/

function DropMenu() {

    const { location, setLocation } = useContext(LocationContext);

    return (
        <NavDropdown
        data-bs-theme="dark"
        key='down-centered'
        drop='down-centered'
        title='Locations'>
                <NavDropdown.Item onClick={() => {setLocation('12')}}>Cape Canaveral, FL, USA</NavDropdown.Item> 
                <NavDropdown.Item onClick={() => {setLocation('27')}}>Kennedy Space Center, FL, USA</NavDropdown.Item>
                <NavDropdown.Item onClick={() => {setLocation('26')}}>Tanegashima Space Center, Japan</NavDropdown.Item>
                <NavDropdown.Item onClick={() => {setLocation('15')}}>Baikonur Cosmodrome, Republic of Kazakhstan</NavDropdown.Item>
                <NavDropdown.Item onClick={() => {setLocation('14')}}>Satish Dhawan Space Centre, India</NavDropdown.Item>
                <NavDropdown.Item onClick={() => {setLocation('10')}}>Onenui Station, Mahia Peninsula, New Zealand</NavDropdown.Item>
        </NavDropdown>
    )
}

export default DropMenu