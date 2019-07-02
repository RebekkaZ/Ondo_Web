import React, { Component } from 'react';
import Switch from 'react-switch';
import NumericInput from 'react-numeric-input';
import { connect } from 'react-redux'
import './AirConItem.css'
import { bindActionCreators } from 'redux';
import * as ondoActions from '../redux/actions/actions'


class AirConItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: this.props.id,
            devicePower: this.props.devicePower,
            targetTemp: this.props.targetTemp,
            fanMode: this.props.fanMode,
            quietOn: this.props.quietOn,
            powerfulOn: this.props.powerfulOn,
            swingH: this.props.swingH,
            swingV: this.props.swingV
        }
    }

    render() {
        return (
            <div className="AirConItem">
                <h2 className="name">{this.props.name}</h2>
                <h4 className="id">{this.props.id}</h4>
                <div id="temphumdiv">
                    <label id="temperatureLabel">{this.props.temperature}°</label>
                    <label id="humidityLabel">{this.props.humidity}%</label>
                </div>
                <table id="settingstable">
                    <tbody>
                        <tr>
                            <td>Device Power</td>
                            <td><Switch id="devicePower" checked={this.props.devicePower} onChange={(event) => this.handleInputChange('devicePower', event)} /></td>
                        </tr>
                        <tr>
                            <td>Temperature</td>
                            <td><NumericInput value={this.props.targetTemp} onChange={(value) => this.handleInputChange('targetTemp', value)} /></td>
                        </tr>
                        <tr>
                            <td>Fan Mode</td>
                            <td><NumericInput value={this.props.fanMode} onChange={value => this.handleInputChange('fanMode', value)} /></td>
                        </tr>
                        <tr>
                            <td>Powerful</td>
                            <td><Switch checked={this.props.powerfulOn} onChange={(event) => this.handleInputChange('powerfulOn', event)} /></td>
                        </tr>
                        <tr>
                            <td>Quiet</td>
                            <td><Switch checked={this.props.quietOn} onChange={(event) => this.handleInputChange('quietOn', event)} /></td>
                        </tr>
                        <tr>
                            <td>Swing Vertical</td>
                            <td><Switch checked={this.props.swingV} onChange={(event) => this.handleInputChange('swingV', event)} /></td>
                        </tr>
                        <tr>
                            <td>Swing Horizontal</td>
                            <td><Switch checked={this.props.swingH} onChange={(event) => this.handleInputChange('swingH', event)} /></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        );
    }

    handleInputChange = (type, checked) => {
        this.setState({ [[type][0]]: checked }, () => {
            this.props.actions.changeAcSetting(this.props.id, this.state).catch(error => {
                console.log(error);
            })
        });
    }


    async componentDidMount() {
        this.props.actions.loadAcSetting(this.props.id).catch(error => {
            console.log(error);
        })

        this.interval = setInterval(() => {
            this.props.actions.loadRoomCondition(this.props.id).catch(error => {
                console.log(error);
            })
        }, 2000);
    }

    componentWillUnmount() {
        clearInterval(this.interval);
    }
}

function mapStateToProps(state, ownProps) {
    var roomCondition = state.roomConditions.find(roomCondition => roomCondition.id === ownProps.id);
    var acSetting = state.acSettings.find(acSetting => acSetting.id === ownProps.id);
    return {
        temperature: roomCondition === undefined ? false : roomCondition.temperature,
        humidity: roomCondition === undefined ? 0 : roomCondition.humidity,
        devicePower: acSetting === undefined ? false : acSetting.devicePower,
        targetTemp: acSetting === undefined ? 21 : acSetting.targetTemp,
        powerfulOn: acSetting === undefined ? false : acSetting.powerfulOn,
        quietOn: acSetting === undefined ? false : acSetting.quietOn,
        fanMode: acSetting === undefined ? 1 : acSetting.fanMode,
        swingH: acSetting === undefined ? false : acSetting.swingH,
        swingV: acSetting === undefined ? false : acSetting.swingV
    }
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(ondoActions, dispatch)
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(AirConItem);