import axios from "axios";
import cookies from "react-cookies";

export const instance = axios.create({
    baseURL: process.env.REACT_APP_API_URL,
    timeout: 1000,
    headers: {
        "Content-Type" : "application/json",
    }
});

instance.interceptors.request.use((config) => {
    const token = cookies.load('token');
    if (token) {
        config.headers["Authorization"] = token;
    }
    return config;
});

// middleware
instance.interceptors.response.use(
    (response) => {
        return response;
    },
    (error) => { // API 응답 에러 캐칭
        const { status } = error.response;
        if(status === 404){
            window.location.href="/notFound";
        }
        if(status >= 500){
            alert("오류가 발생했습니다. 잠시 후 다시 시도해주세요.");
        }
        return Promise.reject(error.response);

    }
);