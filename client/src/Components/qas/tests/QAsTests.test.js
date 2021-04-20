import React from 'react';
import { shallow, mount } from 'enzyme';
import QAs from '../QAs.jsx';

describe('QAs', () => {
  it('should render without crashing', () => {
    shallow(<QAs />);
  });

  it('should have atleast 1 p element', () => {
    const wrapper = shallow(<QAs />);
    const elems = wrapper.find('p');
    expect(elems.length).toBeGreaterThanOrEqual(1);
  });

  it('should have atleast 1 li element', () => {
    const wrapper = mount(<QAs />);
    const elems = wrapper.find('li');
    expect(elems.length).toBeGreaterThanOrEqual(1);
  });
});
