export const dispatch = (onChange, type, action) => {
  onChange({ type });
  action();
};
