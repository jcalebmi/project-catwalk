// import 'jsdom-global/register';
import React from 'react';
import { shallow, mount } from 'enzyme';
import Hello from './hello.jsx';

describe('Hello', () => {
  it('should render without crashing', () => {
    shallow(<Hello />);
  });

  it('should have correct initial text', () => {
    const wrapper = shallow(<Hello />);
    expect(wrapper.text()).toEqual('Hello World # 0');
  });

  it('should have one h1 element initially', () => {
    const wrapper = shallow(<Hello />);
    const elems = wrapper.find('h1');
    expect(elems.length).toBe(1);
  });

  it('should make more worlds on click', () => {
    const wrapper = mount(<Hello />);
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
  });
});
