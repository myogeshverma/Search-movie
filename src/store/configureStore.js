import {createStore, applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk';
import axiosMiddleware from 'redux-axios-middleware';
import axios from 'axios';
import rootReducer from '../reducers';

const client = axios.create({
  //all axios can be used, shown in axios documentation
  baseURL: 'http://www.omdbapi.com/?',
  responseType: 'json',
});

export default function configureStore(initialState) {
  const enhancer = compose(applyMiddleware(thunk, axiosMiddleware(client)));
  return createStore(rootReducer, initialState, enhancer);
}
