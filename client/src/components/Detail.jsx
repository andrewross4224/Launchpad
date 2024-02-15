import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import { CiStar } from "react-icons/ci";
import CardTitle from 'react-bootstrap/esm/CardTitle';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { QUERY_COMMENTS } from '../utils/queries'
import { useQuery } from '@apollo/client';
import Form from 'react-bootstrap/Form'


function detail({launch}) {

    // const data = useQuery(QUERY_COMMENTS, {
    //     variables: launchId
    // })
    console.log(launch)
    return (
        <Card className='p-2'>
            <Button variant="outline-warning" className='position-absolute Favorite' href=''><CiStar /></Button>
            <Card.Img variant='top' src='data:image/png;base64,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' />
            <Card.Header className='large-title'>Launch Forecast</Card.Header>
                <Row>
                    <Col xs={12} md={4} className='p-3'>
                        <Card className='p-2'>
                            <Card.Title>1 A.M.</Card.Title>
                                <Card.Text>Chance of rain: </Card.Text>
                                <Card.Text>Wind Speed: </Card.Text>
                                <Card.Text>Cloud Coverage: </Card.Text>
                                <Card.Text>Visibility: </Card.Text>
                        </Card>
                    </Col>
                    <Col xs={12} md={4} className='p-3'>
                        <Card className='p-2'>
                            <Card.Title>2 A.M.</Card.Title>
                                <Card.Text>Chance of rain: </Card.Text>
                                <Card.Text>Wind Speed: </Card.Text>
                                <Card.Text>Cloud Coverage: </Card.Text>
                                <Card.Text>Visibility: </Card.Text>
                        </Card>
                    </Col>
                    <Col xs={12} md={4} className='p-3'>
                        <Card className='p-2'>
                            <Card.Title>3 A.M.</Card.Title>
                                <Card.Text>Chance of rain: </Card.Text>
                                <Card.Text>Wind Speed: </Card.Text>
                                <Card.Text>Cloud Coverage: </Card.Text>
                                <Card.Text>Visibility: </Card.Text>
                        </Card>
                    </Col>
                </Row>

            <Card.Header className='large-title'>Make a new comment?</Card.Header>
                    <Form className='p-2'>
                        <Form.Control placeholder='Type comment here...'></Form.Control>
                    </Form>
                    <Row >
                        <Col md={{ span: 4, offset: 8}}>
                            <Button variant="outline-warning" type="submit">Submit</Button>
                        </Col>
                    </Row>

            <Card.Header className='large-title'>Comments:</Card.Header>
            
            {/* {data.comments.length > 0 ? (
                data.comments.map(comment => 
                    <Card>
                        <Card>
                            <Card.Title>{comment.commentAuthor}</Card.Title></Card>
                        <Card.Body>{comment.commentText}.</Card.Body>
                    </Card>
                )) : (
                    <Card>
                        <Card>
                            <Card.Title>No comments yet!</Card.Title></Card>
                    </Card>
                )} */}
            <Row className='justify-content-md-center'>
                <Col xs={12} md={3} className='p-3'>
                    <Button variant="outline-warning" href='/' className='mt-5' >Back to home?</Button>
                </Col>
            </Row>
        </Card>
    )
}

export default detail;