import axios from 'axios';

const spiderApi = axios.create({
        headers: {
            'Authorization': `Token ${process.env.REACT_APP_BRASILIO_TOKEN}`
        }
})

export default spiderApi