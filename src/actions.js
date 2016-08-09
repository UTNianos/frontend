/**
 * Created by javier on 6/19/16.
 */
export const REQUEST_CARRERAS = 'REQUEST_CARRERAS';
export const RECEIVE_CARRERAS = 'RECEIVE_CARRERAS';

export function fetchCarreras() {
  return (dispatch, getState) => {
    dispatch(requestCarreras());
    httpGetAsync('api/carreras/',(data) => {
      dispatch(receiveCarreras(data));
    });
  };
}

export function receiveCarreras(data) {
  return {
    type: RECEIVE_CARRERAS,
    data
  }
}

export function requestCarreras() {
  return {
    type: REQUEST_CARRERAS
  }
}


function httpGetAsync(theUrl, callback)
{ 
  var xmlHttp = new XMLHttpRequest();
  
  xmlHttp.onreadystatechange = function() {
    if (xmlHttp.readyState == 4 && xmlHttp.status == 200)
      callback(JSON.parse(xmlHttp.responseText));
  }
  
  xmlHttp.open("GET", theUrl, true); // true for asynchronous
  xmlHttp.send(null);  
}