import starFilterStore from '../../store/starFilterStore.jsx';

const setStarFilter = (arr) => {
  starFilterStore.dispatch({
    type: 'UPDATE_STAR_FILTER',
    payload: arr,
  });
};

export default setStarFilter;
