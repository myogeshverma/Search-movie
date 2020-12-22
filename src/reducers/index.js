// @flow
import {combineReducers} from 'redux';
import nav, * as fromNav from './navReducer';
import home, * as fromHome from './homeReducer';
import detail, * as fromDetail from './detailReducer';

export default combineReducers({
  nav,
  home,
  detail,
});

export const getNav = ({nav}) => nav;
export const getHome = ({home}) => home;
export const getDetail = ({detail}) => detail;
