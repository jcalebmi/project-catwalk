import React from 'react';
import { shallow, mount } from 'enzyme';
import ReviewItem from '../ReviewItem.jsx';

describe('ReviewItem', () => {
  it('should render without crashing', () => {
    shallow(<ReviewItem />);
  });

  it('should have one li element initially', () => {
    const wrapper = shallow(<ReviewItem />);
    const elems = wrapper.find('li');
    expect(elems.length).toBe(1);
  });
});
