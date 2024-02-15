import { CiStar } from "react-icons/ci";
import Container from "react-bootstrap/esm/Container";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button'
import CommentList from "./Comments";
import axios from "axios";
import utc from 'dayjs/plugin/utc'
import dayjs from 'dayjs'
import Auth from '../utils/auth'
import { useMutation, useQuery } from '@apollo/client';
import { useLocation } from 'react-router-dom';
import { useState, useEffect } from "react";
import { QUERY_COMMENTS } from '../utils/queries'
import { ADD_COMMENT } from "../utils/mutations";


function detail() {
    const { state: { data } } = useLocation();
    const [weather, setWeather] = useState();
    const [addComment, { error }] = useMutation(ADD_COMMENT);

    const { loading, data: commentData} = useQuery(QUERY_COMMENTS, {
        variables: { launchId: data.id },
      });

    const comment = commentData?.comment || {};

    useEffect(() => {
        getWeather(data.pad.latitude, data.pad.longitude)
    }, []);

    const getWeather = async (lat, lon) => {
        const searchResult = await axios.get(`https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&exclude=current,minutely,daily&appid=1c080c27bdccf0e577c9e856b87b1d20&units=imperial`);
        for (let i = 0; i < searchResult.data.list.length; i++) {
            if (searchResult.data.list[i].dt >= searchFormatDate(data.window_start)) {
                return setWeather(searchResult.data.list[i - 1])
            }
        }
    };

    dayjs.extend(utc)
    const formatDate = (date) => { return dayjs.utc(date).utcOffset(-5).format("MMM DD, YYYY h:mma") }
    const searchFormatDate = (date) => { return dayjs.utc(date).utcOffset(-5).unix() }

    console.log(data);
    console.log(comment);
    


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
                <Container className="detailContainer w-80 mb-2">
                    <Row>
                        <Col>
                            <h1>Weather : {weather.weather[0].description}</h1>
                            <h4>Temp : {weather.main.temp} F</h4>
                            <h4>Humidity : {weather.main.humidity}%</h4>
                            <h4>Wind : {weather.wind.speed} mph</h4>
                            <h4>Gusts : {weather.wind.gust} mph</h4>
                        </Col>
                    </Row>
                </Container>
                :
                <Container className="detailContainer w-80 mb-2">
                    <Row>
                        <Col>
                            <h1>There is no weather data for this launch</h1>
                        </Col>
                    </Row>
                </Container>}
            {Auth.loggedIn() ? <Container className="detailContainer w-80">
                <Form className="pb-2">
                    <h1 className='text-center'>Leave a comment</h1>
                    < Form.Group className="mb-3" controlId="formBasicEmail" >
                        <Form.Control as='textarea' style={{ height: '100px' }} name='commentText' placeholder="Super cool comments go here" />
                    </Form.Group >
                    <Button variant="outline-warning" type="submit" className='submit'>
                            Submit
                    </Button>
                </Form>
            </Container>:
            <Container className="detailContainer w-80 mb-2">
            <Row>
                <Col>
                    <h1>Login to leave a comment!</h1>
                </Col>
            </Row>
        </Container>}
        <Container className="detailContainer w-80 mb-2 mt-2">
        <CommentList comment={comment}/>
        </Container>
        </>
    )
}

export default detail;