import React from 'react';
import { shallow, mount } from 'enzyme';
import QAs from '../Qas.jsx';

describe('QAs', () => {
  it('should render without crashing', () => {
    shallow(<QAs />);
  });

  it('should not have more than 4 p Elements', () => {
    const wrapper = shallow(<QAs />);
    const elems = wrapper.find('p');
    expect(elems.length).toBeGreaterThanOrEqual(0);
    expect(elems.length).toBeLessThanOrEqual(4);
  });
});
