import React from 'react';
import {shallow} from 'enzyme';
import App from '../App';
import { exportAllDeclaration } from '@babel/types';


describe("App", function(){
  let mountedApp;
  beforeEach(()=>{
    mountedApp = shallow(<App/>);
  })
  
  it('renders Header without crashing', () => {
    let mountedHeader = mountedApp.find('Header');
  });

  it('renders Body without crashing', () => {
    const mountedBody = mountedApp.find('Body');
  
    expect(mountedBody.length).toBe(1);
  });
})
