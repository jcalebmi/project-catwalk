// import 'jsdom-global/register';
import React from 'react';
import { Provider } from 'react-redux';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { shallow, mount } from 'enzyme';
// import App from '../../app.jsx';
import Reviews from '../Reviews.jsx';

const mockStore = configureMockStore([thunk]);

describe('Review', () => {
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
        <Reviews />
      </Provider>,
    );
    // const listItems = wrapper.find('ReviewItem');
    // console.log(wrapper.html());
    expect(wrapper.find('ul').length).toEqual(1);
  });
});
