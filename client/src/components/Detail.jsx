import { CiStar } from "react-icons/ci";
import Container from "react-bootstrap/esm/Container";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { QUERY_COMMENTS } from '../utils/queries'
import { useQuery } from '@apollo/client';
import { useLocation } from 'react-router-dom';
import axios from "axios";
import { useState, useEffect } from "react";
import dayjs from 'dayjs'
import utc from 'dayjs/plugin/utc'


function detail() {
    const { state: { data } } = useLocation();
    const [weather, setWeather] = useState();

    useEffect(() => {
        getWeather(data.pad.latitude, data.pad.longitude)
    }, []);

    const getWeather = async (lat, lon) => {
        const searchResult = await axios.get(`https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&exclude=current,minutely,daily&appid=1c080c27bdccf0e577c9e856b87b1d20&units=imperial`);
        for(let i = 0; i < searchResult.data.list.length; i++) {
            if(searchResult.data.list[i].dt >= searchFormatDate(data.window_start)){
                return setWeather(searchResult.data.list[i -1])
            }
        }
    };

    dayjs.extend(utc)
    const formatDate = (date) => { return dayjs.utc(date).utcOffset(-5).format("MMM DD, YYYY h:mma") }
    const searchFormatDate = (date) => { return dayjs.utc(date).utcOffset(-5).unix() }

    console.log(data);
    console.log(weather);

    return (
        <>
            <Container className="detailContainer mb-2">
                <Row>
                    <h1 className="mt-2">{formatDate(data.window_start)}</h1>
                    <Col lg={6}><img src={data.image} className="detailImg" /></Col>
                    <Col lg={6} className="detailLaunch">
                        <h1>{data.name}</h1>
                        <p>{data.mission.description}</p>
                    </Col>
                </Row>
            </Container>
            {weather ?
                <Container className="detailContainer w-80">
                    <Row>
                        <Col>
                            <h1>Weather</h1>
                            <h4>{weather.main.temp}</h4>
                        </Col>
                    </Row>
                </Container>
                :
                <Container className="detailContainer w-80">
                <Row>
                    <Col>
                        <h1>There is no weather data for this launch</h1>
                    </Col>
                </Row>
            </Container>}
        </>
    )
}

export default detail;