import React, {Component} from 'react';
import {Tabs, TabList, Tab, TabPanel}  from 'react-tabs';
import './Body.css'
import 'react-tabs/style/react-tabs.css';
import AirConItem from './AirConItem';
import aircondata from '../data.json';


class Body extends Component {
    constructor(props){
        super(props);
        this.aircons = aircondata.airCons;
        this.state = {};
    }
  

    render() {
                   
        let tabsList = this.aircons.map((e, i) => 
            <Tab key={i}>{e.name}</Tab>
        );

        let tabsContent = this.aircons.map((e, i) => 
            <TabPanel key={i}>
                <AirConItem key={i} name={e.name} id={e.id} handleStateUpdate={this.handleStateUpdate} />
            </TabPanel>);

        return(
            <div className="Body">
                <label/>
                <Tabs>
                    <TabList>
                        {tabsList}
                    </TabList>

                    {tabsContent}
                </Tabs>
                
            </div>
    )}   
}


export default Body;
