import {createStore, applyMiddleware} from 'redux'; 

import articlesAPI from '../Middlewares/articles';

import reducer from '../Reducers/articleReducer'

const store = createStore(reducer, applyMiddleware(articlesAPI));

export default store;

