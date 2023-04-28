import { FETCH_DATA } from "../action/action";
import { ADD_DATA } from "../action/action";


const initialState = {
	issues: localStorage.getItem('íssues')  ? JSON.parse(localStorage.getItem('issues')) :  [],
};

function issuesReducer(state = initialState, action) {
	switch (action.type) {
		case FETCH_DATA:
			return {
				...state,
				issues: action.payload.data,
			};
			case ADD_DATA:
				return {
					issues: [...state, action.payload.data],
				};


		default:
			return state;
	}
}

export default issuesReducer;
