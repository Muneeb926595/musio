import {combineReducers} from 'redux';

import Foodbook from '../redux/reducer';
import animations from './animations';

const createReducer = (asyncReducers) =>
  combineReducers({
    Foodbook,
    animations,
    ...asyncReducers,
  });

export default createReducer;
