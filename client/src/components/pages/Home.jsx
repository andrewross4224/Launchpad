import Card from '../../cards'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';

export default function Home() {
    return (
        <Container>
            <Row>
                <Col xs={12} md={4} className='p-3'>
                    <Card />
                </Col>
                <Col xs={12} md={4} className='p-3'>
                    <Card />
                </Col>
                <Col xs={12} md={4} className='p-3'>
                    <Card />
                </Col>
            </Row>
        </Container>
    )
}