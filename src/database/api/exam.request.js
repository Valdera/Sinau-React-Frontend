import axios from 'axios';
import { Config } from '../setup';

const url = Config.URL;

export const getAllExams = async () => {
  const exams = await axios.get(`${url}/api/exams`);
  return exams.data.data.data;
};
