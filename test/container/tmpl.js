/*example how to test container*/
/*
import React from 'react';
import {expect} from 'chai';
import {shallow} from 'enzyme';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import events from 'events';

const mockStore = configureMockStore([ thunk ]);
const storeStateMock = {
  myReducer:{
    someState: 'ABC'
  }
};

let store;
let component;
describe('tests for MyContainerComponent', () => {
  beforeEach(() => {
    store = mockStore(storeStateMock);
    component = shallow(<MyContainerComponent store={store} />).shallow();
  });

  it('renders container', () => {
    expect(component.find('div.somediv')).to.have.length.of(1);
  });

});

  */
