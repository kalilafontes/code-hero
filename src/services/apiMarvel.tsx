import axios from 'axios';
import md5 from 'md5';

/* A api da Marvel possui uma particularidade quanto seu acesso, para utilizá-la é necessário seguir os critérios de acesso
utilizando chame pública e privada disponibilizadas por eles. */

const baseUrl = 'http://gateway.marvel.com/v1/public';

const publicKey =  '79ef90dee4d92e50763f6be154005c43';
const privateKey =  '8583ffe953d149e5b8ef85857d6fc55150f41184';

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