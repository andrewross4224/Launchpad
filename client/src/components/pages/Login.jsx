import Form from 'react-bootstrap/form'
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import { useState } from 'react';

export default function Home() {
  const [login, setLogin] = useState(true);
  return (
    <div>
      {login ? (<Form className='form px-3 pt-2 pb-2'>
        <h1 className='text-center'>Login</h1>
        < Form.Group className="mb-3" controlId="formBasicEmail" >
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
          <Form.Label id="disclaim">
            We'll never share your email with anyone else.
          </Form.Label>
        </Form.Group >

        <Form.Group className="mb-3 pb-4" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>
        <Button variant="outline-warning" type="submit">
          Submit
        </Button>
        <a className='loginState mt-3' onClick={() => { setLogin(login => !login) }}>
          Signup?
        </a>
      </Form >)
        :
        <Form className='form px-3 pt-2 pb-2'>
          <h1 className='text-center'>Signup</h1>
          < Form.Group className="mb-3" controlId="formBasicEmail" >
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
            <Form.Label id="disclaim">
              We'll never share your email with anyone else.
            </Form.Label>
          </Form.Group >

          <Form.Group className="mb-3 pb-4" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" />
          </Form.Group>
          <Button variant="outline-warning" type="submit">
            Submit
          </Button>
          <a className='loginState mt-3' onClick={() => { setLogin(login => !login) }}>
            Login?
          </a>
        </Form >}
    </div>
  );
}