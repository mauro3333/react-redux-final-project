import {
	legacy_createStore as createStore,
	combineReducers,
	applyMiddleware,
} from "redux";

import issuesReducer from "../reducer/issuesReducer";
import  { composeWithDevTools } from 'redux-devtools-extension';


const rootReducer = combineReducers({
    ram: issuesReducer,
	});

const store = createStore(rootReducer, composeWithDevTools());

store.subscribe(() => {
	localStorage.setItem('issues', JSON.stringify(store.getState().ram.issues))
});

export default store;
