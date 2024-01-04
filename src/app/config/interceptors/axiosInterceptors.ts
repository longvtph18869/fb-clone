import axios from "axios";
import Cookies from "universal-cookie";
import { AuthConstant } from "../../constants/authConstant";

axios.interceptors.request.use(req => {
    return req;
});

axios.interceptors.response.use((response) => {
    if (response.status === 401) {

    }
    return response;
}, (error) => {
    if (error.response && error.response.status === 401) {
        const cookies = new Cookies()
        cookies.remove(AuthConstant.ACCESS_TOKEN)
        let doamin = window.location.origin;
        window.location.href = process.env.REACT_APP_AUTH_URL + "/login?redirect_uri=" + doamin || ""
    }
    if (error.response && error.response.data) {
        return Promise.reject(error.response.data);
    }
    return Promise.reject(error.message);
});