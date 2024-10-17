import {
  signUpThunk,
  loginThunk,
  currentUserThunk,
  logoutThunk,
} from '../users/thunks';

const extraActions = [signUpThunk, loginThunk, currentUserThunk, logoutThunk];

export const getActions = type => {
  return extraActions?.map(action => action[type]);
};
