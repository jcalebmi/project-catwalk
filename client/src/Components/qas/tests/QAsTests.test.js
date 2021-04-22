// import 'jsdom-global/register';
import React from 'react';
import { Provider } from 'react-redux';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { shallow, mount } from 'enzyme';
// import App from '../../app.jsx';
import QAs from '../QAs.jsx';

const mockStore = configureMockStore([thunk]);

describe('App', () => {
  it('should render without crashing', () => {
    const store = mockStore({
      product: {
        id: 19089,
        campus: 'hr-rfe',
        name: 'Camo Onesie',
        slogan: 'Blend in to your crowd',
        description: 'The So Fatigues will wake you up and fit you in. T…you blending in to even the wildest surroundings.',
        category: 'Jackets',
        created_at: '2021-02-23T19:24:34.450Z',
        default_price: '140.00',
        updated_at: '2021-02-23T19:24:34.450Z',
      },
    });
    const wrapper = mount(
      <Provider store={store}>
        <QAs />
      </Provider>,
    );
    expect(wrapper.find('ul').length).toEqual(1);
  });
});

describe('QAs', () => {
  it('should have at least one p element', () => {
    const wrapper = shallow(<QAs />);
    expect(wrapper.find('p').length).toBeGreaterOrEqual(1);
  });
  it('should have at least one li element', () => {
    const wrapper = mount(<QAs />);
    expect(wrapper.find('li').length).toBeGreaterOrEqual(1);
  });

  // TODO: thursday morning fun - build out test suite

  /* async() data
  toContain arr
  assertions(1)
    return functions.fetchUser().then(data => {
      expect(Array.isArray(data)).toBetruthy()));
  ) */
  /**
   * test if fn exists expect to be defined
   * see if it does what you want it to do
   * /toequal, tocontain, etc
   */
});
