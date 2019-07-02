import React from 'react';
import { shallow } from 'enzyme';
import Header from '../Header';
import AirConItem from '../AirConItem';

describe("Header", function () {
  it('renders div without crashing', () => {
    let mountedApp = shallow(<Header />);
    const mountedlabel = mountedApp.find('div');
    expect(mountedlabel.length).toBe(1);
  });

  it('renders label without crashing', () => {
    let mountedApp = shallow(<Header />);
    const mountedlabel = mountedApp.find('label');
    expect(mountedlabel.length).toBe(1);
  });
})
