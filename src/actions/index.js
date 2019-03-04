import * as AT  from '../action-types';

export const getSynonymsTrigger = payload => {
  return ({
    type: AT.SEND_GET_SYNONYMS_REQUEST,
    payload
  })
}