// import 'jsdom-global/register';
import React from 'react';
import { Provider } from 'react-redux';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { shallow, mount } from 'enzyme';
// import App from '../../app.jsx';
import QAs from '../QAs.jsx';
import QAsItems from '../main/QAsItems.jsx';
import QAsSearch from '../main/QAsSearch.jsx';
import Answers from '../main/Answers.jsx';
import LoadMoreAnswers from '../buttons/LoadMoreAnswers.jsx';
import LoadMoreQuestions from '../buttons/LoadMoreQuestions.jsx';

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
  it('should render QAsItems component', () => {
    const wrapper = shallow(<QAs />);
    expect(wrapper.find(QAsItems)).to.have.lengthOf(1);
  });

  describe('QAsItems', () => {
    it('should render QAsSearch', () => {
      const wrapper = shallow(<QAsItems />);
      expect(wrapper.find(QAsSearch)).to.have.lengthOf(1);
    });
    it('should render Answers', () => {
      const wrapper = mount(<QAsItems />);
      expect(wrapper.find(Answers)).to.have.lengthOf(1);
    });
    it('should render LoadMoreQuestions button', () => {
      const wrapper = mount(<QAsItems />);
      expect(wrapper.find(LoadMoreQuestions)).to.have.lengthOf(1);
    });
    it('should display the correct number of questions', () => {
      const wrapper = shallow(<QAsItems />);
      const length = wrapper.find('questions').length;
      expect(length).to.BeLessOrEqual(4);
    });
  });

  describe('Answers', () => {
    it('should render LoadMoreAnswers button', () => {
      const wrapper = mount(<LoadMoreAnswers />);
      expect(wrapper.find(QAsSearch)).to.have.lengthOf(1);
    });
    it('should be render AddAnswer button', () => {
      const wrapper = mount(<LoadMoreQuestions />);
      expect(wrapper.find(QAsSearch)).to.have.lengthOf(1);
    });
    it('should display the correct number of answers', () => {
      const wrapper = shallow(<Answers />);
      const length = wrapper.find('answers').length;
      expect(length).to.BeLessOrEqual(2);
    });
  });

  describe('QAsSearch', () => {
    it('should render a form el', () => {
      const wrapper = shallow(<QAsSearch />);
      expect(wrapper.find('form').to.have.lengthOf(1));
    });
    it('should invoke an onChange function', () => {
      const handleSearch = jest.fn();
      const wrapper = shallow(<QAsSearch handleSearch={handleSearch} />);

      wrapper.find(QAsSearch).handleSearch().simulate('change', { target: { value: 'A' } });
      expect(handleSearch).toBeCalledWith(wrapper.value);
    });
  });
});
