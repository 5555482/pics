import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID 48aa2e70684f7a0b4c51f1b447abff99231f2583ee0f5ce3844209e95c92b104'
    }
});