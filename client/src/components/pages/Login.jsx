import Form from 'react-bootstrap/form'
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';

export default function Home() {
    return (
        <Form className='form px-3 py-5'>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
            <Form.Label id="disclaim">
              We'll never share your email with anyone else.
            </Form.Label>
          </Form.Group>
    
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" />
          </Form.Group>
          <Button variant="outline-warning" type="submit">
            Submit
          </Button>
        </Form>
      );
}