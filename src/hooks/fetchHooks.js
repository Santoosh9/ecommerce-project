import axiosInstance from "../utils/axios";

export const fetchAffairs = async () => {
    const response = await axiosInstance.get("/current-affairs")
    console.log(response.data.response);
    return await response?.data.response;
}

export const fetchNotifications = async () => {
    const response = await axiosInstance.post("/notifications")
    return await response?.data.response;
}