import axios from 'axios';

let baseURL = 'http://localhost:3001';

if(process.env.NODE_ENV === 'production') {
    baseURL = 'https://yelpcamp-hnekh.herokuapp.com/';
} 

export default axios.create({
    baseURL
});


