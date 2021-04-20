// import 'jsdom-global/register';
import React from 'react';
import { Provider } from 'react-redux';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { shallow, mount } from 'enzyme';
// import App from '../../app.jsx';
import ReviewItem from '../ReviewItem.jsx';

const mockStore = configureMockStore([thunk]);

describe('ReviewItem', () => {
  it('should render without crashing', () => {
    const store = mockStore({
      [
        {
          "review_id": 232469,
          "rating": 5,
          "summary": "Quis iste mollitia.",
          "recommend": true,
          "response": null,
          "body": "Rerum voluptas aut necessitatibus sequi sint blanditiis corporis explicabo consequatur. Et alias omnis. Quia nemo vero nostrum at possimus tempora sit rerum ut. Nihil ut consequatur harum sit veniam repellat quisquam consequatur est.",
          "date": "2020-11-11T00:00:00.000Z",
          "reviewer_name": "Barrett_Streich49",
          "helpfulness": 7,
          "photos": [
              {
                  "id": 409177,
                  "url": "https://images.unsplash.com/photo-1490723286627-4b66e6b2882a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80"
              },
              {
                  "id": 409178,
                  "url": "https://images.unsplash.com/photo-1426647451887-5f2be01918a9?ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80"
              }
          ]
      },
      {
          "review_id": 232468,
          "rating": 2,
          "summary": "Minus omnis dolores vel est sint dolores beatae.",
          "recommend": true,
          "response": null,
          "body": "Ipsam error quia consequatur alias doloribus iusto soluta. Aut temporibus nihil ratione et deserunt quasi minus ratione et. Non molestiae modi exercitationem.",
          "date": "2021-01-11T00:00:00.000Z",
          "reviewer_name": "Tyrique90",
          "helpfulness": 3,
          "photos": [
              {
                  "id": 409179,
                  "url": "https://images.unsplash.com/photo-1558014356-f7c41bc744f7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80"
              },
              {
                  "id": 409180,
                  "url": "https://images.unsplash.com/photo-1553830591-2f39e38a013c?ixlib=rb-1.2.1&auto=format&fit=crop&w=2760&q=80"
              },
              {
                  "id": 409181,
                  "url": "https://images.unsplash.com/photo-1556268652-ad74ebb8f1e7?ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80"
              }
          ]
      },
      {
          "review_id": 348005,
          "rating": 3,
          "summary": "sum summary",
          "recommend": true,
          "response": null,
          "body": "bodacious bod",
          "date": "2021-04-20T00:00:00.000Z",
          "reviewer_name": "username1",
          "helpfulness": 0,
          "photos": [
              {
                  "id": 614191,
                  "url": "https://files.catbox.moe/aeii4s.jpg"
              }
          ]
      },
      {
          "review_id": 347954,
          "rating": 3,
          "summary": "I'm enjoying wearing these shades",
          "recommend": false,
          "response": null,
          "body": "Comfortable and practical.",
          "date": "2021-04-17T00:00:00.000Z",
          "reviewer_name": "debugger",
          "helpfulness": 0,
          "photos": [
              {
                  "id": 614151,
                  "url": "urlplaceholder/review_5_photo_number_1.jpg"
              },
              {
                  "id": 614152,
                  "url": "urlplaceholder/review_5_photo_number_2.jpg"
              }
          ]
      },
      {
          "review_id": 347946,
          "rating": 3,
          "summary": "I'm enjoying wearing these shades",
          "recommend": false,
          "response": null,
          "body": "Comfortable and practical.",
          "date": "2021-04-17T00:00:00.000Z",
          "reviewer_name": "debugger",
          "helpfulness": 0,
          "photos": [
              {
                  "id": 614139,
                  "url": "urlplaceholder/review_5_photo_number_1.jpg"
              },
              {
                  "id": 614140,
                  "url": "urlplaceholder/review_5_photo_number_2.jpg"
              }
          ]
      }
    ]
    });
    const wrapper = mount(
      <Provider store={store}>
        <ReviewItem />
      </Provider>,
    );
    // const listItems = wrapper.find('ReviewItem');
    // console.log(wrapper.html());
    expect(wrapper.find('il').length).toEqual(2);
  });
});