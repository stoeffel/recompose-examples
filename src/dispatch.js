export const dispatch = (onChange, type, action) => () => {
  onChange({ type });
  return action();
};
