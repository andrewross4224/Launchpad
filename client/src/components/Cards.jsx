import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import dayjs from 'dayjs'
import { CiStar } from "react-icons/ci";
import utc from 'dayjs/plugin/utc'

function OurCard({launch}) {
    // Functions for formating date
    dayjs.extend(utc)
    const formatDate = (date) => {return dayjs.utc(date).utcOffset(-5).format("MMM DD, YYYY")}
    const formatTime = (date) => {return dayjs.utc(date).utcOffset(-5).format("hh:mma")}
    // Card data
    return (
        <Card className='p-2'>
            <Button variant="outline-warning" className='position-absolute Favorite' href=''><CiStar /></Button>
            <Card.Img variant='top' src={launch.image} />
            <Card.Title>{launch.pad.location.name}</Card.Title>
            <Card.Title>{launch.rocket.configuration.full_name}</Card.Title>
            <Card.Title>{formatDate(launch.window_start)}</Card.Title>
            <Card.Title>{formatTime(launch.window_start)}</Card.Title>
            <Button variant="outline-warning" href='/single'>Launch Details</Button>
        </Card>
    )
}

export default OurCard;