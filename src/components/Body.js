import React, { Component } from 'react';
import { Tabs, TabList, Tab, TabPanel } from 'react-tabs';
import './Body.css'
import 'react-tabs/style/react-tabs.css';
import AirConItem from './AirConItem';
import aircondata from '../data.json';
import { bindActionCreators } from 'redux';
import * as ondoActions from '../redux/actions/actions'
import { connect } from 'react-redux'

class Body extends Component {
    constructor(props) {
        super(props);
        this.aircons = aircondata.airCons;
    }

    render() {
        let tabsList = this.aircons.map((e, i) => {
            return <Tab
                style={this.props.acSettings.find(acSetting => acSetting.id === e.id) === undefined || this.props.acSettings.find(acSetting => acSetting.id === e.id).devicePower === undefined ? { backgroundColor: '#E8E8E8' } : this.props.acSettings.find(acSetting => acSetting.id === e.id).devicePower === true ? { backgroundColor: '#E0F4CF' } : { backgroundColor: '#F4CFCF' }}
                key={i}>{e.name}
            </Tab>
        }
        );

        let tabsContent = this.aircons.map((e, i) =>
            <TabPanel key={i}>
                <AirConItem key={i} name={e.name} id={e.id} handleStateUpdate={this.handleStateUpdate} />
            </TabPanel>);

        return (
            <div className="Body">
                <label />
                <Tabs>
                    <TabList>
                        {tabsList}
                    </TabList>

                    {tabsContent}
                </Tabs>

            </div>
        )
    }

    async componentDidMount() {
        this.aircons.map((e, i) =>
            this.props.actions.loadAcSetting(e.id).catch(error => {
                console.log(error);
            }))

    }
}

function mapStateToProps(state) {
    return {
        acSettings: state.acSettings
    }
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(ondoActions, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Body);
