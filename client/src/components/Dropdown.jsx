import Dropdown from "react-bootstrap/Dropdown"
import Form from 'react-bootstrap/form'
import DropdownButton from 'react-bootstrap/DropdownButton'
import ButtonGroup from 'react-bootstrap/ButtonGroup';
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
        <DropdownButton
        data-bs-theme="dark"  
        as={ButtonGroup} 
        key='down-centered'
        drop='down-centered'
        title='Locations'>
                <Dropdown.Item>Cape Canaveral, FL, USA</Dropdown.Item> 
                <Dropdown.Item>Kennedy Space Center, FL, USA</Dropdown.Item>
                <Dropdown.Item>Tanegashima Space Center, Japan</Dropdown.Item>
                <Dropdown.Item>Baikonur Cosmodrome, Republic of Kazakhstan</Dropdown.Item>
                <Dropdown.Item>Satish Dhawan Space Centre, India</Dropdown.Item>
                <Dropdown.Item>Onenui Station, Mahia Peninsula, New Zealand</Dropdown.Item>
                <Dropdown.Divider />
                <Dropdown.Item>
                    <Form>
                        <Form.Label>Search other Places?</Form.Label>
                        <Form.Control placeholder="Search"></Form.Control>
                    </Form>
                </Dropdown.Item>
        </DropdownButton>
    )
}

export default DropMenu