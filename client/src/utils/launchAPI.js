import axios from 'axios';

const queryLaunches = (location) => {
    axios.get('https://lldev.thespacedevs.com/2.2.0/launch/upcoming/?limit=25').catch(function (error) {
        console.log(error.toJSON());
      });
}

export default queryLaunches;