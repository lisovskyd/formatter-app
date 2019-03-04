import * as AT  from '../action-types';

export const initialState = {
  synonyms: []
};

export default function appReducers(state = initialState, action) {
  switch (action.type) {

    case AT.SEND_GET_SYNONYMS_REQUEST_SUCCESS:
      return {
        ...state, 
        synonyms: action.synonymsArr 
      }

    default:
      return state;
  }
}
