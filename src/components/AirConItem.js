import React, {Component} from 'react';
import Switch from 'react-switch';
import NumericInput from 'react-numeric-input';
import './AirConItem.css'
import {setAc, getDevicePower, getTemperature, getHumidity} from '../apiCalls';


class AirConItem extends Component {
    constructor(props){
        super(props);
        this.state= {
            devicePower: true,
            powerfulOn: true,
            quietOn: true, 
            swingVerticalOn: true,
            swingHorizontalOn: true,
            deviceTemperature: 24,
            fanSpeed: 2,
            temperature: 0,
            humidity: 0
         }       
    }

    render() {
        return(
            <div className="AirConItem">
                <h2 className="name">{this.props.name}</h2>
                <h4 className="id">{this.props.id}</h4>
                <div id="temphumdiv">
                    <label id="temperatureLabel">{this.state.temperature}°</label>
                    <label id ="humidityLabel">{this.state.humidity}%</label>
                </div>
                <table id="settingstable">
                    <tbody>
                        <tr>
                            <td>Device Power</td>
                            <td><Switch checked={this.state.devicePower} onChange={(checked) => this.handleInputChange('devicePower', checked)} /></td>
                        </tr>
                        <tr>
                            <td>Temperature</td>
                            <td><NumericInput min={18} max={29} value={this.state.deviceTemperature} onChange={value =>this.handleInputChange('deviceTemperature', value)}  /></td>
                        </tr>
                        <tr>
                            <td>Fan Speed</td>
                            <td><NumericInput min={1} max={5} value={this.state.fanSpeed}  onChange={value =>this.handleInputChange('fanSpeed', value)} /></td>
                        </tr>
                        <tr>
                            <td>Powerful</td>
                            <td><Switch checked={this.state.powerfulOn} onChange={(event) => this.handleInputChange('powerfulOn', event)} /></td>
                        </tr>
                        <tr>
                            <td>Quiet</td>
                            <td><Switch checked={this.state.quietOn} onChange={(event) => this.handleInputChange('quietOn', event)} /></td>
                        </tr>
                        <tr>
                            <td>Swing Vertical</td>
                            <td><Switch checked={this.state.swingVerticalOn} onChange={(event) => this.handleInputChange('swingVerticalOn', event)} /></td>
                        </tr>
                        <tr>
                            <td>Swing Horizontal</td>
                            <td><Switch checked={this.state.swingHorizontalOn} onChange={(event) => this.handleInputChange('swingHorizontalOn', event)} /></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        );      
    }

    handleInputChange = (type, checked) => {
        this.setState({[[type][0]]: checked}, () => {
            setAc(this.props.id, this.state.devicePower, this.state.powerful, this.state.temperature, this.state.fan, this.state.quietOn);
          }); 
        
        this.props.handleStateUpdate(this.props.id, this.state.devicePower);
        
     }


    async componentDidMount() {
        const devicePower = await getDevicePower(this.props.id);
        const deviceTemperature = await getTemperature(this.props.id);
        const deviceHumidity = await getHumidity(this.props.id);
        
        this.setState(
            {
                humidity: deviceHumidity,
                devicePower: devicePower,
                temperature: deviceTemperature
            }    
        );
    }   
}
export default AirConItem;