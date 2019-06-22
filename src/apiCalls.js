import axios from 'axios';

const losantId = '123456789';

export function setAc(id, devicePower, powerful, temperature, fan, quiet) {
    return axios.post('https://' + losantId + '.onlosant.com/'+id+'/setac', {
        acPower: devicePower,
        powerful: powerful,
        temperature: temperature,
        fan:fan,
        quiet: quiet,
    });
};

export async function getDevicePower(id){
    const response = await axios.get('https://' + losantId + '.onlosant.com/' + id + '/status');
    return response.data.value;
}

export async function getTemperature(id){
    const response = await axios.get('https://' + losantId + '.onlosant.com/' + id + '/temperature');
    return response.data.value;
}

export async function getHumidity(id){
    const response = await axios.get('https://' + losantId + '.onlosant.com/' + id + '/humidity');
    return response.data.value;
}

