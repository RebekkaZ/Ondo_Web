import React from 'react';
import {shallow} from 'enzyme';
import Body from '../Body';
import AirConItem from '../AirConItem';
import {Tabs, TabList, Tab, TabPanel} from 'react-tabs';

describe("Body", function(){

    let mountedBody;

    beforeEach(()=>{
        mountedBody = shallow(<Body/>);
    })

    it('renders Tabs without crashing', ()=>{
        const mountedLabel = mountedBody.find('label');
        expect(mountedLabel.length).toBe(1);    
    })

    it('renders Tabs without crashing', ()=>{
        const mountedTabs = mountedBody.find(Tabs);
        expect(mountedTabs.length).toBe(1);    
    })

    it('renders TabList without crashing', ()=>{
        const mountedTabList = mountedBody.find(TabList);
        expect(mountedTabList.length).toBe(1);    
    })

    
    it('renders Tab without crashing', ()=>{
        const mountedTab = mountedBody.find(Tab);
        expect(mountedTab.length).toBe(4);    
    })

    
    it('renders TabPanel without crashing', ()=>{
        const mountedTabPanel = mountedBody.find(TabPanel);
        expect(mountedTabPanel.length).toBe(4);    
    })

    it('renders AirConItem without crashing', ()=>{
        const mountedAirConItem = mountedBody.find(AirConItem);
        expect(mountedAirConItem.length).toBe(4);    
    })
})
