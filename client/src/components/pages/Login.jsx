import Form from 'react-bootstrap/form'
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Dropdown from '../Dropdown'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import { useState } from 'react';
import { useQuery, useMutation } from '@apollo/client'
import Auth from '../../utils/auth'

import { ADD_USER } from '../../utils/mutations';


export default function Home() {

  const [userSignupData, setSignupData] = useState({ SIGNUPusername: '', SIGNUPemail: '', SIGNUPpassword: '' });
  const [addUser, { error }] = useMutation(ADD_USER);

  const handleSignupChange = (event) => {
    const { name, value } = event.target;
    setSignupData({ ...userSignupData, [name]: value });
  };

  const handleSignup = async (e) => {
    e.preventDefault();
    console.log(userSignupData)
    try {
      const { data } = await addUser({ variables: { userName: userSignupData.SIGNUPusername, email: userSignupData.SIGNUPemail, password: userSignupData.SIGNUPpassword } })
      console.log(data)
      Auth.login(data.addUser.token);
    } catch (err) {
      console.error(err);
    }

    setSignupData({
      SIGNUPusername: '',
      SIGNUPemail: '',
      SIGNUPpassword: '',
    });
  };

  const [login, setLogin] = useState(true)

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
        (<Form className='form px-3 pt-2 pb-2' onSubmit={handleSignup}>
          <h1 className='text-center'>Signup</h1>
          <Form.Group className="mb-3 pb-4" controlId="formBasicUsername">
            <Form.Label>Username</Form.Label>
            <Form.Control type="username" name='SIGNUPusername' placeholder="Username" onChange={handleSignupChange} value={userSignupData.username} />
          </Form.Group>

          < Form.Group className="mb-3" controlId="formBasicEmail" >
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" name='SIGNUPemail' placeholder="Enter email" onChange={handleSignupChange} value={userSignupData.email} />
            <Form.Label id="disclaim">
              We'll never share your email with anyone else.
            </Form.Label>
          </Form.Group >

          <Form.Group className="mb-3 pb-4" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" name='SIGNUPpassword' placeholder="Password" onChange={handleSignupChange} value={userSignupData.password} />
          </Form.Group>
          <Form.Group className="mb-3 pb-4" controlId="formBasicDropdown">
            <Row>
              <Form.Label>Please Select a Launch Location</Form.Label>
            </Row>
            {/* <Row>
              <Col className='drop'>
                <Dropdown />
              </Col>
            </Row> */}
          </Form.Group>
          <Button variant="outline-warning" type="submit">
            Submit
          </Button>
          <a className='loginState mt-3' onClick={() => { setLogin(login => !login) }}>
            Login?
          </a>
        </Form >)}
    </div>
  );
}