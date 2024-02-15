import Form from 'react-bootstrap/form'
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Dropdown from '../Dropdown'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import { useState } from 'react';
import { useQuery, useMutation } from '@apollo/client'
import Auth from '../../utils/auth'

import { ADD_USER, LOGIN_USER } from '../../utils/mutations';
import Container from 'react-bootstrap/esm/Container';


export default function Home() {

  const [userLoginData, setLoginData] = useState({ LOGINemail: '', LOGINpassword:''})
  const [userSignupData, setSignupData] = useState({ SIGNUPusername: '', SIGNUPemail: '', SIGNUPpassword: '' });

  const [login, { error: loginErr }] = useMutation(LOGIN_USER);
  const [addUser, { error }] = useMutation(ADD_USER);

  const handleLoginChange = (event) => {
    const { name, value } = event.target;
    setLoginData({ ...userLoginData, [name]: value });
  };

  const handleSignupChange = (event) => {
    const { name, value } = event.target;
    setSignupData({ ...userSignupData, [name]: value });
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const { data } = await login({ variables: { email: userLoginData.LOGINemail, password: userLoginData.LOGINpassword } })
      Auth.login(data.login.token)
    } catch (err) {
      console.error(err);
    }

    setLoginData({
      LOGINemail: '',
      LOGINpassword: '',
    });
  };

  const handleSignup = async (e) => {
    e.preventDefault();
    try {
      console.log(userSignupData)
      const { data } = await addUser({ variables: { userName: userSignupData.SIGNUPusername, email: userSignupData.SIGNUPemail, password: userSignupData.SIGNUPpassword, SIGNUPlocation: 'mylocation'} })
      Auth.login(data.addUser.token);
    } catch (err) {
      console.error(err);
    }

    setSignupData({
      userName: '',
      SIGNUPemail: '',
      SIGNUPpassword: '',
    });
  };

  const [loginForm, setLoginForm] = useState(true)

  return (
    <Container className='loginContainer'>
      {loginForm ? (<Form className='form px-3 pt-2 pb-2' onSubmit={handleLogin}>
        <h1 className='text-center'>Login</h1>
        < Form.Group className="mb-3" controlId="formBasicEmail" >
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" name='LOGINemail' placeholder="Enter email" onChange={handleLoginChange} value={userLoginData.LOGINemail}/>
          <Form.Label id="disclaim">
            We'll never share your email with anyone else.
          </Form.Label>
        </Form.Group >

        <Form.Group className="mb-3 pb-4" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" name='LOGINpassword' placeholder="Password" onChange={handleLoginChange} value={userLoginData.LOGINpassword}/>
        </Form.Group>
        <Button variant="outline-warning" type="submit">
          Submit
        </Button>
        <a className='loginState mt-3' onClick={() => { setLoginForm(loginForm => !loginForm) }}>
          Signup?
        </a>
      </Form >)
        :
        (<Form className='form px-3 pt-2 pb-2' onSubmit={handleSignup}>
          <h1 className='text-center'>Signup</h1>
          <Form.Group className="mb-3 pb-4" controlId="formBasicUsername">
            <Form.Label>Username</Form.Label>
            <Form.Control type="username" name='SIGNUPusername' placeholder="Username" onChange={handleSignupChange} value={userSignupData.SIGNUPusername} />
          </Form.Group>

          < Form.Group className="mb-3" controlId="formBasicEmail" >
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" name='SIGNUPemail' placeholder="Enter email" onChange={handleSignupChange} value={userSignupData.SIGNUPemail} />
            <Form.Label id="disclaim">
              We'll never share your email with anyone else.
            </Form.Label>
          </Form.Group >

          <Form.Group className="mb-3 pb-4" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" name='SIGNUPpassword' placeholder="Password" onChange={handleSignupChange} value={userSignupData.SIGNUPpassword} />
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
          <a className='loginState mt-3' onClick={() => { setLoginForm(loginForm => !loginForm) }}>
            Login?
          </a>
        </Form >)}
    </Container>
  );
}