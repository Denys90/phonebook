import { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  selectToken,
  selectProfile,
  selectHasError,
  selectIsRefreshing,
} from 'store/users/selectors';
import {
  loginThunk,
  logoutThunk,
  signUpThunk,
  currentUserThunk,
} from '../users/thunks';

export const useUsers = () => {
  const dispatch = useDispatch();

  const user = useSelector(selectProfile);
  const isAuth = useSelector(selectToken);
  const isAuthError = useSelector(selectHasError);
  const isRefreshingUser = useSelector(selectIsRefreshing);

  const fetchCurrentUser = useCallback(
    () => dispatch(currentUserThunk()),
    [dispatch]
  );

  const signUp = useCallback(
    credentials => dispatch(signUpThunk(credentials)),
    [dispatch]
  );

  const signIn = useCallback(
    credentials => dispatch(loginThunk(credentials)),
    [dispatch]
  );

  const signOut = useCallback(() => dispatch(logoutThunk()), [dispatch]);

  return {
    user,
    isAuth,
    isAuthError,
    isRefreshingUser,
    signUp,
    signIn,
    signOut,
    fetchCurrentUser,
  };
};
