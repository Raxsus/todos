import React from 'react';
import {expect} from 'chai';
import {shallow} from 'enzyme';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';

import Todo from '../../components/Todo'

const mockStore = configureMockStore([ thunk ]);
const storeStateMock = {
  onClick: function () {

  },
  completed: false,
  text: 'test'
};

let store;
let component;
describe('tests for MyContainerComponent', () => {
  beforeEach(() => {
    store = mockStore(storeStateMock);
    component = shallow(<Todo {...storeStateMock} />).shallow();
  });

  it('renders component', () => {
    expect(component.find('span')).to.have.length.of(1);
  });

  it('component contains text equal ' + storeStateMock.text, () => {
    expect(component.find('span').text()).to.equal(storeStateMock.text);
  });

  it('component style textDecoration should be "none" ', () => {
    expect(component.prop('style').textDecoration).to.equal('none');
  });

  it('component click" ', () => {
    component.simulate('click');
    expect(component.prop('style').textDecoration).to.equal('none');
  });

});
