/**
 * Created by javier on 6/19/16.
 */
import fetch from 'isomorphic-fetch';

export const REQUEST_CARRERAS = 'REQUEST_CARRERAS';
export const RECEIVE_CARRERAS = 'RECEIVE_CARRERAS';

const API_ROOT = "http://www.api.com/api/"

export function fetchCarreras()
{
  return fetchData("carreras", requestCarreras, receiveCarreras);
}

export function fetchData(endpoint, request, receive) {
  
  return function (dispatch) {
    
    dispatch(request());
    
    const fullURL = API_ROOT + endpoint;
    
    return fetch(fullURL)
    .then(response => response.json().then(json => ({ json, response })))
    .then(({ json, response }) => 
    {
      if (!response.ok) 
      {
        return Promise.reject(json);
      }
      
      return dispatch(receive(json));   
    })
    
  }
  
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