import Card from '../Cards'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import axios from 'axios';
import { useState, useEffect, useContext } from 'react';
import { LocationContext } from "../../App";

import Auth from '../../utils/auth'



export default function Home() {

    const { location, setLocation } = useContext(LocationContext);

    const [loading, setLoading] = useState(true);
    const [results, setResults] = useState({});

    const callAPI = async (location) => {
        setLoading(true)
        const searchResult = await axios.get(`https://lldev.thespacedevs.com/2.2.0/launch/upcoming/?limit=25&pad__location=${location}`)
        setResults(searchResult.data.results);
        setLoading(false)
    };

    const checkLogin = async () => {
        // if the user is logged in use the location they set on account creation otherwise use default cape
        await Auth.loggedIn() ?
            callAPI(location ? location : Auth.getProfile().data.location)
            :
            callAPI(location ? location : '12');
    }

    useEffect(() => {
        checkLogin();
    }, [location]);


    return (
        <main>
            {loading ?
                (<>
                    <h1 className='loading'>Loading your launches!<br /> (this will take a second)</h1>
                    <div className="moon">
                        <img src="https://cdn2.iconfinder.com/data/icons/thesquid-ink-40-free-flat-icon-pack/64/space-rocket-512.png" style={{ "height": "20px", "width": "30px" }} className="loaderRocket" />
                        <ul>
                            <li className='rocket rocket1'></li>
                            <li className='rocket rocket2'></li>
                            <li className='rocket rocket3'></li>
                            <li className='rocket rocket4'></li>
                            <li className='rocket rocket5'></li>
                            <li className='rocket rocket6'></li>
                            <li className='rocket rocket7'></li>
                        </ul>
                    </div>
                </>)
                :
                (<Container>
                    <Row>
                        <Col xs={12} md={6} lg={4} className='p-3'>
                            <Card launch={results[0]} />
                        </Col>
                        <Col xs={12} md={6} lg={4} className='p-3'>
                            <Card launch={results[1]} />
                        </Col>
                        <Col xs={12} md={{ span: 6, offset: 3 }} lg={{ span: 4, offset: 0 }} className='p-3'>
                            <Card launch={results[2]} />
                        </Col>
                    </Row>
                </Container>
                )}</main>)
}