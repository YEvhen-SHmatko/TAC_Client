import axios from 'axios';

let URL = 'http://localhost:3001';
let CONFIG = {
  headers: {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
  },
  proxy: {
    host: 'http://localhost',
    port: 3001,
  },
};
export const register = (url, data) => {
  const body = JSON.stringify(data);
  return axios.post(`${URL}${url}`, body, CONFIG);
};
export const login = (url, data) => {
  const { username, password } = data;
  const credentials = btoa(username + ':' + password);
  const basicAuth = 'Basic ' + credentials;
  CONFIG.headers['Authorization'] = basicAuth;
  return axios.post(`${URL}${url}`, {}, CONFIG);
};
export const current = (url, token) => {
  const username = 'kery';
  const password = 'token';
  const credentials = btoa(username + ':' + password);
  const basicAuth = 'Basic ' + credentials;
  CONFIG.headers['Authorization'] = basicAuth;
  return axios.post(`${URL}/auth/current`, {}, CONFIG);
};
export const confirm = url => {
  return axios.post(`${URL}${url}`, {}, CONFIG);
};
