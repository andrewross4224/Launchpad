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
        const searchResult = await axios.get('https://lldev.thespacedevs.com/2.2.0/launch/upcoming/?limit=25')
        setResults(searchResult.data.results);
        setLoading(false);
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
                (<div>loading</div>)
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