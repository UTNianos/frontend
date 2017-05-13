import 'isomorphic-fetch';

function callApiMiddleware({ dispatch }) {

  return next => (action) => {

    const { types, endpoint, headers } = action;

    if (!types) {
      return next(action);
    }

    if (types.length === 7) {
      return next(action);
    }

    if (!Array.isArray(types) || types.length !== 3 || !types.every(type => typeof type === 'string')) {
      throw new Error('Expected an array of three string types.');
    }

    let eventAction = {};
    const [requestType, successType, failureType] = types
    dispatch({ type: requestType });

    return fetch(endpoint, headers).then(
      (response) => {
        response.json().then((json) => {

          if (response.ok) {
            eventAction = { data: json, type: successType };
          } else {
            eventAction = { data: json, type: failureType };
          }

          dispatch(eventAction);
        });
      },
      error => dispatch({ type: failureType, data: error })
    );
  }

}

export default callApiMiddleware;
