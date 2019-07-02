import axios from 'axios';


const API_KEY = process.env.REACT_APP_LOSANT_ID
const url = 'https://' + API_KEY + '.onlosant.com/';

export function setAc(id, devicePower, powerful, temperature, fan, quiet) {
    return axios.post(url + id + '/setac', {
        acPower: devicePower,
        powerful: powerful,
        temperature: temperature,
        fan: fan,
        quiet: quiet,
    });
};

export async function getDevicePower(id) {
    const response = await axios.get(url + id + '/status');
    return response.data.value;
}

export async function getRoomCondition(id) {
    const response = await axios.get(url + id + '/roomCondition');
    var jsonResponse = JSON.parse(JSON.stringify(response.data));
    return { id: id, temperature: jsonResponse.temperature.value, humidity: jsonResponse.humidity.value };
}

export async function getAcSetting(id) {
    const response = await axios.get(url + id + '/acSetting');
    var jsonResponse = JSON.parse(JSON.stringify(response.data));
    return {
        id: id,
        devicePower: jsonResponse.devicePower.value,
        targetTemp: jsonResponse.targetTemp.value,
        quietOn: jsonResponse.quietOn.value,
        powerfulOn: jsonResponse.powerfulOn.value,
        fanMode: jsonResponse.fanMode.value,
        swingV: jsonResponse.swingV.value,
        swingH: jsonResponse.swingH.value,
    };
}

export function setAcSetting(id, acSetting) {
    return axios.post(url + id + '/setac', {
        devicePower: acSetting.devicePower,
        targetTemp: acSetting.targetTemp,
        quietOn: acSetting.quietOn,
        powerfulOn: acSetting.powerfulOn,
        fanMode: acSetting.fanMode,
        swingV: acSetting.swingV,
        swingH: acSetting.swingH
    });
}

