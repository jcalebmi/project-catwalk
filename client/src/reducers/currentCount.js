import Redux from 'redux';

const currentCountRedcuer = (state = null, action) => {
  switch (action.type) {
    case 'INCREMENT_COUNT':
      return action.count;
    case 'DECREMENT_COUNT':
      return action.count;
    default:
      return state;
  }
};

export default currentCountRedcuer;
