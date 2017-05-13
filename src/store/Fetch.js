import 'isomorphic-fetch';

const DEFAULT_API_ROOT = `${window.location.protocol}//${window.location.host}`;

function buildHeaders(method, content, isAuth, token) {
  let fetchHeaders = {};

  if (isAuth) {
    fetchHeaders = {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/x-www-form-urlencoded'
    }
  }

  return {
    method,
    mode: 'cors',
    cache: 'default',
    body: content,
    headers: fetchHeaders
  };
}

function request(method, types, endpoint, content, token) {

  let isAuth = false;

  if (token !== null && token !== undefined) {
    isAuth = true;
  }

  const headers = buildHeaders(method, content, isAuth, token);
  const endpointURL = DEFAULT_API_ROOT + endpoint;

  return {
    types,
    endpoint: endpointURL,
    headers,
  }

}

class Fetch {
  static GET(endpoint, types, token) {
    return request('GET', types, endpoint, null, token);
  }

  static POST(endpoint, types, content, token) {
    return request('POST', types, endpoint, content, token);
  }

  static PUT(endpoint, types, content, token) {
    return request('PUT', types, endpoint, content, token);
  }

  static DELETE(endpoint, types, content, token) {
    return request('DELETE', types, endpoint, content, token);
  }
}

export default Fetch;
