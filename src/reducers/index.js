import {
  API_REQUEST_START,
  API_REQUEST_SUCCED,
  FIRST_USER_UPDATE,
} from '../types';

const initialState = {
  loading: false,
  users: [],
  firstUser: null,
};

export const userReducers = (state = initialState, action) => {
  switch (action.type) {
    case API_REQUEST_START:
      return {
        ...state,
        loading: true,
      };

    case API_REQUEST_SUCCED:
      return {
        ...state,
        loading: false,
        users: action.users,
        firstUser: action.users[0],
      };

    case FIRST_USER_UPDATE:
      return {
        ...state,
        firstUser: action.firstUser,
      };

    default:
      return state;
  }
};
