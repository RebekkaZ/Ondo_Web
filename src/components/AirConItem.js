import React, {Component} from 'react';
import Switch from 'react-switch';
import NumericInput from 'react-numeric-input';
import { connect } from 'react-redux'
import './AirConItem.css'
import { bindActionCreators } from 'redux';
import * as ondoActions from '../redux/actions/actions'


class AirConItem extends Component {
    constructor(props){
        super(props);
        this.state={
            acSetting:{
                id: this.props.id,
                name: this.props.name,
                devicePower: true,
                powerfulOn: true,
                quietOn: true, 
                swingVerticalOn: true,
                swingHorizontalOn: true,
                deviceTemperature: 24,
                fanSpeed: 2,
                
            },
           
        }
    }   

    render() {
        return(
            <div className="AirConItem">
                <h2 className="name">{this.props.name}</h2>
                <h4 className="id">{this.props.id}</h4>
                <div id="temphumdiv">
                    <label id="temperatureLabel">{this.props.temperature}°</label>
                    <label id ="humidityLabel">{this.props.humidity}%</label>
                </div>
                <table id="settingstable">
                    <tbody>
                        <tr>
                            <td>Device Power</td>
                            <td><Switch id="devicePower" checked={this.state.acSetting.devicePower} onChange={(checked) => this.handleInputChange('devicePower', checked)} /></td>
                        </tr>
                        <tr>
                            <td>Temperature</td>
                            <td><NumericInput min={18} max={29} value={this.state.acSetting.deviceTemperature} onChange={value =>this.handleInputChange('deviceTemperature', value)}  /></td>
                        </tr>
                        <tr>
                            <td>Fan Speed</td>
                            <td><NumericInput min={1} max={5} value={this.state.acSetting.fanSpeed}  onChange={value =>this.handleInputChange('fanSpeed', value)} /></td>
                        </tr>
                        <tr>
                            <td>Powerful</td>
                            <td><Switch checked={this.state.acSetting.powerfulOn} onChange={(event) => this.handleInputChange('powerfulOn', event)} /></td>
                        </tr>
                        <tr>
                            <td>Quiet</td>
                            <td><Switch checked={this.state.acSetting.quietOn} onChange={(event) => this.handleInputChange('quietOn', event)} /></td>
                        </tr>
                        <tr>
                            <td>Swing Vertical</td>
                            <td><Switch checked={this.state.acSetting.swingVerticalOn} onChange={(event) => this.handleInputChange('swingVerticalOn', event)} /></td>
                        </tr>
                        <tr>
                            <td>Swing Horizontal</td>
                            <td><Switch checked={this.state.acSetting.swingHorizontalOn} onChange={(event) => this.handleInputChange('swingHorizontalOn', event)} /></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        );      
    }

    handleInputChange = () => {
     }


    async componentDidMount() {
        this.props.actions.loadRoomCondition(this.props.id).catch(error=>{
            console.log(error);
        })
    }
} 
    
    function mapStateToProps(state, ownProps){
        var roomCondition = state.roomConditions.roomConditions.find(roomCondition => roomCondition.id === ownProps.id);
        if(roomCondition===undefined){
            return { 
                 roomConditions: state.roomConditions
            }
        }else{
            return { 
                 temperature: roomCondition.temperature,
                 humidity: roomCondition.humidity
            }
        }
    }

    function mapDispatchToProps(dispatch){
        return{
        actions: bindActionCreators(ondoActions, dispatch)
        }
    }
    

export default connect(mapStateToProps, mapDispatchToProps)(AirConItem);