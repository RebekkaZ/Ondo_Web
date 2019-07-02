import React, { Component } from 'react';
import Switch from 'react-switch';
import NumericInput from 'react-numeric-input';
import { connect } from 'react-redux'
import './AirConItem.css'
import { bindActionCreators } from 'redux';
import * as ondoActions from '../redux/actions/actions'


class AirConOverview extends Component {

    render() {
        return (
            <div className="AirConItem">
                <table id="settingstable">
                    <tbody>
                        
                        {this.props.aircons.map((e, i) => {
                            return <tr>
                                <td>
                                    <label>{e.name}</label>
                                </td>
                                <td>
                                    <label id="temperatureLabel">{this.props.roomConditions.find(x => x.id === e.id) === undefined ? 0 : this.props.roomConditions.find(x => x.id === e.id).temperature}°</label>
                                </td>
                                <td>
                                    <Switch id="devicePower" checked={this.props.acSettings.find(x => x.id === e.id) === undefined ? false : this.props.acSettings.find(x => x.id === e.id).devicePower} onChange={(event) => this.handleInputChange(e.id, event)} />
                                </td>
                            </tr>
                        })}
                    </tbody>
                </table>
            </div>
        );
    }

    handleInputChange = (type, checked) => {
        this.setState({ devicePower: checked }, () => {
            this.props.actions.changeAcSetting(type, this.state).catch(error => {
                console.log(error);
            })
        });
    }
}

function mapStateToProps(state) {
    return {
        roomConditions: state.roomConditions,
        acSettings: state.acSettings
    }
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(ondoActions, dispatch)
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(AirConOverview);