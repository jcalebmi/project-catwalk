import React from 'react';
import { shallow, mount } from 'enzyme';
import Reviews from '../Reviews.jsx';

describe('Reviews, () => {
  it('should render without crashing', () => {
    shallow(<Reviews />);
  });

  it('should have one ul element initially', () => {
    const wrapper = shallow(<Reviews />);
    const elems = wrapper.find('ul');
    expect(elems.length).toBe(1);
  });
});
