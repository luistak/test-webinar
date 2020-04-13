import { authenticate } from '../services/AuthService';

const initialState = {
  isAuth: false,
  name: undefined,
  isLoading: false,
  error: undefined
};

const FETCH_AUTH = 'FETCH_AUTH';
const FETCH_AUTH_FULFILL = 'FETCH_AUTH_FULFILL';
const FETCH_AUTH_REJECT = 'FETCH_AUTH_REJECT';

const fetchAuth = () => ({ type: FETCH_AUTH });
const fetchAuthFulfill = (name) => ({
  type: FETCH_AUTH_FULFILL,
  payload: { name }
});
const fetchAuthReject = (error) => ({
  type: FETCH_AUTH_REJECT,
  payload: { error }
});

export default function userReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_AUTH: {
      return {
        ...state,
        isLoading: true
      };
    }
    case FETCH_AUTH_FULFILL: {
      return {
        ...state,
        isLoading: false,
        name: action.payload.name,
        isAuth: true
      };
    }
    case FETCH_AUTH_REJECT: {
      return {
        ...state,
        isLoading: false,
        isAuth: false,
        error: action.payload.error
      };
    }
    default: {
      return state;
    }
  }
}

export async function fetchAuthenticate(dispatch, user, password) {
  dispatch(fetchAuth());

  try {
    const resp = await authenticate(user, password);
    dispatch(fetchAuthFulfill(resp.name));
  } catch (e) {
    console.error(e);
    dispatch(fetchAuthReject('Login/Senha inválidos'));
  }
}
