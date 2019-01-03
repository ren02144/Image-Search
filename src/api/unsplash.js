import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID c7e9f94fb6aaef7a1163ed51605048f2186bbe16926e0ada651b18ecdec96933'
      }
});