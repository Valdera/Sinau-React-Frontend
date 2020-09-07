import axios from 'axios';
import { Config } from '../setup';

const url = Config.URL;

export const createQuestion = async ({ jwt, formData }) => {
  const data = await axios.post(`${url}/api/questions`, formData, {
    headers: {
      Authorization: `Bearer ${jwt}`
    }
  });
  return data;
};
