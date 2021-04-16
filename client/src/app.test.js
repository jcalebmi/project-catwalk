// import 'jsdom-global/register';
import React from 'react';
import { shallow, mount } from 'enzyme';

import App from './app.jsx';

describe('App', () => {
  it('should render without crashing', () => {
    shallow(<App />);
  })

  it('should have correct initial text', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.text()).toEqual('Hello World # 0');
  })

  it('should have one h1 element initially', () => {
    const wrapper = shallow(<App />);
    const elems = wrapper.find('h1');
    expect(elems.length).toBe(1);
  })

  it('should make more worlds on click', () => {
    const wrapper = mount(<App />);
    wrapper
    .find('h1')
    .first()
    .simulate('click');
    wrapper
    .find('h1')
    .first()
    .simulate('click');
    const elems = wrapper.find('h1');
    expect(elems.length).toBe(3);
  })


})