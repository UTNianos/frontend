/**
 * Created by javier on 6/19/16.
 */
const initialProgramaState = {
  plan: {},
  materias: {},
  correlativas: {}
};

export function programa(state = initialProgramaState, action) {

  // For now, don’t handle any actions
  // and just return the state given to us.
  return state
}

export default programa;