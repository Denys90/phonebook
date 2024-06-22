export const handleFulfilled = state => {
  state.isRefreshing = false;
};

export const handlePending = state => {
  state.error = '';
  state.isLoading = true;
  state.isRefreshing = true;
};

export const handleRejected = (state, { payload }) => {
  state.error = payload;
  state.isLoading = false;
  state.isRefreshing = false;
};
