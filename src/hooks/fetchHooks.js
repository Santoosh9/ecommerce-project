import { async } from 'q';
import axiosInstance from '../utils/axios';

export const fetchAffairs = async () => {
  const response = await axiosInstance.get('/current-affairs');
  console.log(response.data.response);
  return await response?.data.response;
};

export const fetchNotifications = async () => {
  const response = await axiosInstance.post('/notifications');
  return await response?.data.response;
};

//Forum
export const fetchQuetions = async () => {
  const response = await axiosInstance.post('/questions');
  return await response?.data.response;
};

export const addQuestion = async (payload) => {
  const params = new URLSearchParams(payload);
  const response = await axiosInstance.put('/questions', { params });
  return response;
};

export const fetchAnswers = async () => {
  const response = await axiosInstance.post('/answers');
  return await response?.data.response;
};
