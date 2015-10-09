export const dispatch = (onChange, type, action) => (change) => {
  const state = action(change);
  onChange({ type, state });
  return state;
};
