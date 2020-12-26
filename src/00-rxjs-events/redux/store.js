import { createStore } from 'redux';
import thunk from "redux-thunk";

import { generateInitState } from './generateReducers';
import { metaData } from '../metaData';

const middleware = [thunk];
export const dataSource = [
  {
    key: "1",
    name: "胡彦斌",
    age: 32,
    address: "西湖区湖底公园1号",
  },
  {
    key: "2",
    name: "胡彦祖",
    age: 42,
    address: "西湖区湖底公园1号",
  },
];


const initalState = generateInitState(metaData);
const reducer = (state = initalState, action) => {
	switch(action.type) {
	case 'openURL':
		window.open(action.data.url);
		break;
	case 'refresh':
		return ({
			...state,
			[action.data.target]: {...state[action.data.target], dataSource}
		});
	default:
		return state;

	}

}
export default createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
