import axios from 'axios';
import { Config } from '../setup';

const url = Config.URL;

export const getAllExams = async () => {
  const exams = await axios.get(`${url}/api/exams`);
  return exams.data.data.data;
};

export const createExam = async ({ jwt, examData }) => {
  const data = await axios.post(`${url}/api/exams`, examData, {
    headers: {
      Authorization: `Bearer ${jwt}`
    }
  });
  return data;
};
