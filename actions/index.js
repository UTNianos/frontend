/*
 * action types
 */

export const REQUEST_USER_STATUS = 'REQUEST_USER_STATUS';
export const RECEIVE_USER_STATUS = 'RECEIVE_USER_STATUS';
export const SEGUIDOR_ACCION1 = 'SEGUIDOR_ACCION1';
export const SEGUIDOR_ACCION2 = 'SEGUIDOR_ACCION2';

/*
 * action creators
 */

export function requestUserStatus(text) {
  return { type: REQUEST_USER_STATUS, text }
}

export function recieveUserStatus(text) {
  return { type: RECEIVE_USER_STATUS, text }
}