import { createActions, createReducer } from 'reduxsauce'

const INITIAL_STATE = { user: null}

const { Types, Creators } = createActions({
  loginRequest: ['username', 'password'],
  loginSuccess: ['user'],
  loginFailure: ['error'],
  logout: null
})

export default Creators
export { Types }

const success = (state, { user }) => ({ ...state, user })

const failure = (state) => ({ ...state, user: null })

const logout = (state) => ({ ...state, user: null })

export const reducer = createReducer(INITIAL_STATE, {
  // [Types.LOGIN_REQUEST]: ,
  [Types.LOGIN_SUCCESS]: success,
  [Types.LOGIN_FAILURE]: failure,
  [Types.LOGOUT]: logout,
})
