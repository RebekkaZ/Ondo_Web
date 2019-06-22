import React, {Component} from 'react';
import {Tabs, TabList, Tab, TabPanel}  from 'react-tabs';
import './Body.css'
import 'react-tabs/style/react-tabs.css';
import AirConItem from './AirConItem';
import aircondata from '../data.json';
import {getDevicePower} from '../apiCalls';
import { unstable_createResource } from "react-cache";

const fetcher = unstable_createResource(async id => {
    const devicePower = await Promise.all([
        getDevicePower(id).then(resp => resp)
    ]);
    return devicePower;
  });

  const divStyleOn = {
    background: '#CFFAC6' 
  };

  const divStyleOff = {
    background: '#FAC6D1'
  };
  let tabsList;     

class Body extends Component {
    constructor(props){
        super(props);
        this.aircons = aircondata.airCons;
        this.state = {};

        
        this.handleStateUpdate = this.handleStateUpdate.bind(this);  
    }

    
    handleStateUpdate(id, acPower){
       tabsList.forEach(tab => {
           console.log(tab);
           
           if(!this.state.id!== undefined){
                this.setState({[id]: acPower});
           }
           if(tab.key===id){
            if(acPower){
                return <Tab style={ divStyleOn } key={id}></Tab>;
            }else{
                
                return <Tab style={ divStyleOff } key={id}></Tab>;
            }
           }
       });
    }
   

    render() {
      
                    
        tabsList = this.aircons.map((e, i) => {
            
            var devicePower = fetcher.read(e.id);
            console.log(e.id);
            console.log(devicePower[0]);
            if(devicePower[0]){
                return <Tab style={ divStyleOn } key={e.id}>{e.name}</Tab>;
            }else{
                
                return <Tab style={ divStyleOff } key={e.id}>{e.name}</Tab>;
            }
                
        });
        

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
