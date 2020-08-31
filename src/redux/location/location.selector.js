import { createSelector } from 'reselect';

const selectLocation = (state) => state.location;

export const selectCurrentPaket = createSelector(
  [selectLocation],
  (state) => state.currentPaket
);

export const selectCurrentSession = createSelector(
  [selectLocation],
  (state) => state.currentSession
);
