import Card from '../Cards'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import { useState, useEffect } from 'react';

import queryLaunches from '../../utils/launchAPI';

import axios from 'axios';


export default function Home() {

    const [loading, setLoading] = useState(true);
    const [results, setResults] = useState({});

    const callAPI = async (query) => {
        const searchResult = await axios.get('https://lldev.thespacedevs.com/2.2.0/launch/upcoming/?limit=100')
        setResults(searchResult.data.results);
        setLoading(false)
    };

    useEffect(() => {
        console.log(results);
    }, [loading]);

    useEffect(() => {
        callAPI();
    }, []);

    return (
        <main>
            {loading ?
                (<div className="moon">
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
                </div>)
                :
                (<Container results={results}>
                    <a href={results}>click this</a>
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
                )}</main>)
}