import NavDropdown from 'react-bootstrap/NavDropdown';
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