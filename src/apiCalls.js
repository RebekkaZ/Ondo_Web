import axios from 'axios';


const API_KEY =process.env.REACT_APP_LOSANT_ID
const url = 'https://' + API_KEY + '.onlosant.com/';

export function setAc(id, devicePower, powerful, temperature, fan, quiet) {
    return axios.post(url + id + '/setac', {
        acPower: devicePower,
        powerful: powerful,
        temperature: temperature,
        fan:fan,
        quiet: quiet,
    });
};

export async function getDevicePower(id){
    const response = await axios.get(url + id + '/status');
    return response.data.value;
}

export async function getTemperature(id){
    const response = await axios.get(url + id + '/temperature');
    return response.data.value;
}

export async function getHumidity(id){
    const response = await axios.get(url + id + '/humidity');
    return response.data.value;
}

