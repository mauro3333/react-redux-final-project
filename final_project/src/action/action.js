// Actions
export const FETCH_DATA = 'FETCH_DATA'
export const ADD_DATA = 'ADD_DATA'
// export const REFRESH_ISSUES = "REFRESH_ISSUES";
// export const DELETE_ISSUES = "DELETE_ISSUES";
// export const EDIT_ISSUES = "EDIT_ISSUES";

// WHAT TO DO!
// Action Creator
// export function refreshIssues(data) {
// 	return {
// 		type: REFRESH_ISSUES,
// 		payload: data,
// 	};
// }

// export function deleteIssues(id) {
// 	return {
// 		type: DELETE_ISSUES,
// 		payload: {
// 			id,
// 		},
// 	};
// }

// export function editIssues(data) {
// 	return {
// 		type: EDIT_ISSUES,
// 		payload: data,
// 	};
// }


export function addActionIssues(data) {
	return {
		type: ADD_ISSUES,
		payload: data,
	};
}

export function fetchActionData(issues) {
    return {
        type: FETCH_DATA,
        payload: {
            data: issues
        }
    }
}

