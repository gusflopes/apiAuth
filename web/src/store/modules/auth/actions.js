export function signInRequest(email, password) {
  return {
    type: '@auth/SIGN_IN_REQUEST',
    payload: { email, password },
  };
}

export function signUpRequest(email, password) {
  return {
    type: '@auth/SIGN_UP_REQUEST',
    payload: { email, password },
  };
}


export function signInSuccess(token, user) {
  return {
    type: '@auth/SIGN_IN_SUCCESS',
    payload: { token, user },
  };
}

export function signFailure(errorMessage) {
  return {
    type: '@auth/SIGN_FAILURE',
    payload: { errorMessage },
  };
}

export function signOut() {
  return {
    type: '@auth/SIGN_OUT',
  };
}
