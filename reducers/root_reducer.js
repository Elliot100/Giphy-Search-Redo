import { combineReducers } from 'redux';
import giphysReduder from './giphys_reducer';

export default combineReducers({
  giphys: giphysReduder
});

