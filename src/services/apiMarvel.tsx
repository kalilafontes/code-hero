import axios from 'axios';
import md5 from 'md5';

const baseUrl = 'http://gateway.marvel.com/v1/public';

const publicKey =  '4d285ed2c691a7cace74f5f94c4af48b';
const privateKey =  '85cb0fa9dda2d3845fd8397c3c4bd27fa933bdbe';

const time = Number(new Date());

const hash = md5(time + privateKey + publicKey);

const apiMarvel = axios.create({
    baseURL: baseUrl,
    params: {
        ts: time,
        apikey: publicKey,
        hash: hash
    },
});

export default apiMarvel;