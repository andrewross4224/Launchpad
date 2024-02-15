import Card from '../Cards'
import Dropdown from '../Dropdown'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import Detail from '../Detail';
import { useState, useEffect } from 'react';
import axios from 'axios';

export default function Single() {

    const [loading, setLoading] = useState(true);
    const [results, setResults] = useState({});

    const callAPI = async (query) => {
        const searchResult = await axios.get('https://api.openweathermap.org/data/2.5/weather?lat=28.440797968127775&lon=-80.57989329685985&appid=b364c079aaefaadfbc5f1d3a45eebea4&units=imperial')
        setResults(searchResult);
        setLoading(false)
    };

    useEffect(() => {
        console.log(results);
    }, [loading]);

    useEffect(() => {
        callAPI();
        console.log(results)
    }, []);
    return (
        <main>
            {loading ?
                (<>
                <h1 className='loading'>Loading your launches!<br/> (this will take a second)</h1>
                <div className="moon">
                    <img src="https://cdn2.iconfinder.com/data/icons/thesquid-ink-40-free-flat-icon-pack/64/space-rocket-512.png" style={{"height" : "20px", "width" : "30px"}} className="loaderRocket" />
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
                </>) : (  
        <Container className='top'>
            <Row>
                <Col className='p-3'>
                    <Detail />
                </Col>
            </Row>
        </Container>
    )} </main>)
}