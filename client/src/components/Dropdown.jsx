import NavDropdown from 'react-bootstrap/NavDropdown';
/* 
Location ID's inorder:
    12
    27
    26
    15
    14
    10
*/

function DropMenu() {
    return (
        <NavDropdown
        data-bs-theme="dark"  
        key='down-centered'
        drop='down-centered'
        title='Locations'>
                <NavDropdown.Item>Cape Canaveral, FL, USA</NavDropdown.Item> 
                <NavDropdown.Item>Kennedy Space Center, FL, USA</NavDropdown.Item>
                <NavDropdown.Item>Tanegashima Space Center, Japan</NavDropdown.Item>
                <NavDropdown.Item>Baikonur Cosmodrome, Republic of Kazakhstan</NavDropdown.Item>
                <NavDropdown.Item>Satish Dhawan Space Centre, India</NavDropdown.Item>
                <NavDropdown.Item>Onenui Station, Mahia Peninsula, New Zealand</NavDropdown.Item>
        </NavDropdown>
    )
}

export default DropMenu