import Dropdown from "react-bootstrap/Dropdown"
import Form from 'react-bootstrap/form'
import DropdownButton from 'react-bootstrap/DropdownButton'
import ButtonGroup from 'react-bootstrap/ButtonGroup';
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