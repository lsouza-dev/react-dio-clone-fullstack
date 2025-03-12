import axios from "axios";

export const api = axios.create({
  baseURL: 'http://localhost:5236/api/v1/users/',
  headers: {
    'Content-Type': 'application/json'
  }
});
