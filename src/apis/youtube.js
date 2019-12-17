import axios from 'axios'

const KEY = 'AIzaSyBjKufvLsoQoMngJ7PuvfC3HZGP-MP1Xj4';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
      part: 'snippet', 
      type: 'video',
      maxResults: 5,
      key: `${KEY}`
  }
})