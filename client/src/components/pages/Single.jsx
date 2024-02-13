import Card from '../Cards'
import Dropdown from '../Dropdown'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Detail from '../Detail';


export default function Home() {
    return (
        <Container className='top'>
            <Row>
                <Col className='p-3'>
                    <Detail />
                </Col>
            </Row>
        </Container>
    )
}