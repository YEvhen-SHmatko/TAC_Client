export const get = key => {
  return localStorage.getItem(key);
};
export const set = async (key, value) => {
  return localStorage.setItem(key, value);
};
