import React from 'react';
import {shallow} from 'enzyme';
import Switch from 'react-switch';
import AirConItem from '../AirConItem'
import NumericInput from 'react-numeric-input';
import axios from 'axios';

describe("AirConItem", function(){
    
    let mountedAirConItem;

    beforeEach(()=>{
        mountedAirConItem = shallow(<AirConItem/>);
    })
       
    it('renders labels without crashing', () => {
        const mountedlabel = mountedAirConItem.find('label');
        expect(mountedlabel.length).toBe(2);    
    });

    it('renders switch without crashing', () => {
        const mountedswitch = mountedAirConItem.find(Switch);
        expect(mountedswitch.length).toBe(5);    
    });

    it('renders numeric input without crashing', () => {
        const mountedswitch = mountedAirConItem.find(NumericInput);
        expect(mountedswitch.length).toBe(2);    
    });

    it('renders tr without crashing', () => {
        const mountedswitch = mountedAirConItem.find('tr');
        expect(mountedswitch.length).toBe(7);    
    });

    it('renders td without crashing', () => {
        const mountedswitch = mountedAirConItem.find('td');
        expect(mountedswitch.length).toBe(14);    
    });
});

describe("When a prop is passed to it", ()=>{
    let mountedAirConItem;
    let props;

    beforeEach(() => {
        props={
            name: "Guest Room",
            id: 123456
        };
        mountedAirConItem = shallow(<AirConItem {...props}/>);
    })

    it('displays the name', () => {
        const airConName = mountedAirConItem.find('.name');
        expect(airConName.text()).toEqual('Guest Room');
    })

    it('displays the id', () => {
        const airConName = mountedAirConItem.find('.id');
        expect(airConName.text()).toEqual('123456');
    })
});

jest.mock('axios');
    
describe('Axios', () => {
    let mountedAirConItem;

    beforeEach(()=>{
        mountedAirConItem = shallow(<AirConItem/>);
    })

    it('axios post test', ()=>{
        var axiosMock = jest.genMockFromModule('axios');
        axiosMock.post.mockImplementation(()=> new Promise({ status: 200}));
        mountedAirConItem.find('#devicePower').simulate('change');
        expect(axios.post).toHaveBeenCalled();
    })

    
    it('axios get temperature', ()=>{
        var axiosMock = jest.genMockFromModule('axios');
        axiosMock.get.mockImplementation(()=> new Promise({ value: 27.7 }));
        mountedAirConItem.instance().componentDidMount().then(()=>{
        expect(mountedAirConItem.find('#temperatureLabel').text()).toEqual("27.7°")
        })
    })

    it('axios get humidity', ()=>{
        var axiosMock = jest.genMockFromModule('axios');
        axiosMock.get.mockImplementation(()=> new Promise({ value: 65.3 }));
        mountedAirConItem.instance().componentDidMount().then(()=>{
        expect(mountedAirConItem.find('#humidityLabel').text()).toEqual("65.3°")
        })
    })

    it('axios get devicePower', ()=>{
        var axiosMock = jest.genMockFromModule('axios');
        axiosMock.get.mockImplementation(()=> new Promise({ value: true }));
        mountedAirConItem.instance().componentDidMount().then(()=>{
        expect(mountedAirConItem.find('#devicePower').value()).toEqual(true)
        })
    })
})


