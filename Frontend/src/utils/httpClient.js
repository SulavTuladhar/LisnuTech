import axios from "axios";

const http = axios.create({
    baseURL: process.env.REACT_APP_BASE_URL,
    responseType: 'json',
    timeout: 10000,
    timeoutErrorMessage: 'Takes too long for response'
})

const getHeaders= (args) =>{
    // Add TOken to headers
    let options = {
        'content-type': 'application/json'
    }
    return options;
}

const GET = (url,params)=>{
    return http.get(url,{
        Headers: getHeaders(),
        params
    });

}

const POST = (url,data,params)=>{
    return http.post(url, data, {
        Headers: getHeaders(),
        params
    });
}

const PUT = (url,data,params)=>{
    return http.put(url, data, {
        Headers: getHeaders(),
        params
    });
}

const DELETE = (url,data,params)=>{
    return http.delete(url,{
        Headers: getHeaders(),
        params
    });
}
export const httpClient = {
    GET,
    POST,
    PUT,
    DELETE
}