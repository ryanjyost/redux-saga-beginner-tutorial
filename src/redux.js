/*==============================
  ACTIONS
==============================*/

//action types
export const API_CALL_REQUEST = "API_CALL_REQUEST";
export const API_CALL_SUCCESS = "API_CALL_SUCCESS";
export const API_CALL_FAILURE = "API_CALL_FAILURE";

//action creators
export function apiCallRequest() {
  return { type: API_CALL_REQUEST };
}

export function apiCallSuccess(data) {
  return { type: API_CALL_SUCCESS, data };
}

export function apiCallFailure(error) {
  return { type: API_CALL_FAILURE, error };
}

/*==============================
  REDUCER
==============================*/

//intial state for our reducer
const initialState = {
  fetching: false,
  dog: null,
  error: null
};

export function reducer(state = initialState, action) {
  switch (action.type) {
    case API_CALL_REQUEST:
      return { ...state, fetching: true, error: null };
      break;
    case API_CALL_SUCCESS:
      return { ...state, fetching: false, dog: action.dog };
      break;
    case API_CALL_FAILURE:
      return { ...state, fetching: false, error: action.error };
      break;
    default:
      return state;
  }
}

export default reducer;
