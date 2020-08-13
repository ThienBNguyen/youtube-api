import axios from 'axios';



const KEY = 'AIzaSyCEo3RA2Cn3Mo384wAQsFBh7lgXqq2l_jw'

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        type: 'video',
        maxResults: 5,
        key: KEY
    }
});