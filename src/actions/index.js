import {
  API_REQUEST_START,
  API_REQUEST_SUCCED,
  FIRST_USER_UPDATE,
} from '../types';

export const apiRequestStart = () => ({
  type: API_REQUEST_START,
});

export const apiRequestSucced = (users) => ({
  type: API_REQUEST_SUCCED,
  users: users,
});

export const updateFirstUser = (user) => ({
  type: FIRST_USER_UPDATE,
  firstUser: user,
});
