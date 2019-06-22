import React from 'react';
import {shallow} from 'enzyme';
import Header from '../Header';
import AirConItem from '../AirConItem';

describe("Header", function(){
  it('renders div without crashing', () => {
    let mountedApp = shallow(<div/>);
  });

  it('renders Header without crashing', () => {
    let mountedHeader = shallow(<Header/>);
  });

    it('renders AirConItem without crashing', () => {
    let mountedAirConItem = shallow(<AirConItem/>);
  });
})
