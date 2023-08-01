import { useMatch } from "react-router-dom";
import axiosInstance from "../utils/axios";
import { useMutation, useQueryClient } from "react-query";


//FETCH QUERIES
export const fetchAffairs = async () => {
    const response = await axiosInstance.get("/current-affairs")
    console.log(response.data.response);
    return await response?.data.response;
}

export const fetchNotifications = async () => {
    const response = await axiosInstance.post("/notifications")
    return await response?.data.response;
}

//Forum
export const fetchQuetions = async () => {
    const response = await axiosInstance.post("/questions");
    return await response?.data.response;
}

export const fetchAnswers = async (forumid) => {
    console.log(forumid);
    const response = await axiosInstance.post("/answers", { forumid });
    return await response?.data.response;
}

//MUTATION CUSTOM HOOKS
export const addAnswersData = () => {
    const queryClient = useQueryClient();

    return useMutation(addAnswers, {
        onSuccess: () => {
            queryClient.invalidateQueries("answers");
        }
    })
}

export const addQuestionData = () => {
    const queryClient = useQueryClient();

    return useMutation(addQuestion, {
        onSuccess: () => {
            queryClient.invalidateQueries("posts")
        }
    })
}

export const editQuestionData = () => {
    const queryClient = useQueryClient();

    return useMutation(editQuestion, {
        onSuccess: () => {
            queryClient.invalidateQueries("posts")
        }
    })
}

export const bookmarkQuestionData = () => {
    const queryClient = useQueryClient();

    return useMutation(bookmarkQuestion, {
        onSuccess: () => {
            queryClient.invalidateQueries("posts")
        }
    })
}

export const deleteQuestionData = () => {
    const queryClient = useQueryClient();

    return useMutation(deleteQuestion, {
        onSuccess: () => {
            queryClient.invalidateQueries("posts")
        }
    })
}

//MUTATION FUNCTIONS
const addQuestion = (postData) => {
    return axiosInstance.put("/questions", postData)
}

const addAnswers = (answerData) => {
    console.log(answerData);
    return axiosInstance.put("/answers", answerData)
}

const deleteQuestion = (forumid) => {
    return axiosInstance.delete(`questions?forumid=${forumid}`)
}

const bookmarkQuestion = async (forumid) => {
    return axiosInstance.post(`/bookmark?forumid=${forumid}`)
}

const editQuestion = async (postData) => {
    console.log(postData)
    return axiosInstance.patch(`/questions?questiontext=${postData.questiontext}&forumid=${postData.forumid}`)
}

