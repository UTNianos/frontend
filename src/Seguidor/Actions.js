import fetch from 'isomorphic-fetch';

export const REQUEST_CARRERAS = 'REQUEST_CARRERAS';
export const RECEIVE_CARRERAS = 'RECEIVE_CARRERAS';
export const RECEIVE_CARRERAS_FAILURE = 'RECEIVE_CARRERAS_FAILURE';

export default function fetchCarreras()
{

  const _endpoint = "carreras";

  return {

	// Types of actions to emit before and after
  types: [REQUEST_CARRERAS, RECEIVE_CARRERAS, RECEIVE_CARRERAS_FAILURE],

	// Check the cache (optional):
  shouldCallAPI: (state) => true,

	endpoint: _endpoint,

	callHeaders:  { mode: 'cors', cache: 'default' },

	// Arguments to inject in begin/end actions
    payload: null
  }
}
