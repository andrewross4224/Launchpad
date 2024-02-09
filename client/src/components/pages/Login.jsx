import Form from 'react-bootstrap/form'
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import { useState } from 'react';

export default function Home() {
  const [login, setLogin] = useState(true);
  return (
    <div>
      {login ? (<Form className='form px-3 py-5'>
        < Form.Group className="mb-3" controlId="formBasicEmail" >
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
          <Form.Label id="disclaim">
            We'll never share your email with anyone else.
          </Form.Label>
        </Form.Group >

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>
        <Button variant="outline-warning" type="submit">
          Submit
        </Button>
        <Button variant="outline-warning" onClick={setLogin(login => !login)}>
          Signup?
        </Button>
      </Form >)
        :
        <Form className='form px-3 py-5'>
          < Form.Group className="mb-3" controlId="formBasicEmail" >
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
            <Form.Label id="disclaim">
              We'll never share your email with anyone else.
            </Form.Label>
          </Form.Group >

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" />
          </Form.Group>
          <Button variant="outline-warning" type="submit">
            Submit
          </Button>
          <Button variant="outline-warning" onClick={setLogin(login => !login)}>
          Login?
        </Button>
        </Form >}
    </div>
  );
}