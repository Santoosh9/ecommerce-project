import axiosInstance from "../utils/axios";
import { useQuery, useMutation } from "react-query";

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

export const fetchAnswers = async (forumid) => {
    const response = await axiosInstance.post("/answers", forumid );
    return await response?.data.response;
}
