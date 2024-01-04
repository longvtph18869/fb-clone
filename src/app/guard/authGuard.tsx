import axios from "axios";
import { ReactNode, useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import Cookies from "universal-cookie";
import { AuthConstant } from "../constants/authConstant";
import { HeadersUtil } from "../utils/headersUtil";


export default function AuthGuard(props: any) {

    const cookie = new Cookies();
    const navigate = useNavigate()

    const [auth, setAuth] = useState(false)

    // const [accessToken, setAccessToken] = useSearchParams()
    // const _token = accessToken.get(AuthConstant.ACCESS_TOKEN)

    const search = window.location.search;
    const params = new URLSearchParams(search);
    const _token = params.get('access_token');

    if (_token) { 
        const expires = new Date();
        expires.setDate(expires.getDate() + AuthConstant.EXPIRES_TOKEN)
        cookie.remove(AuthConstant.ACCESS_TOKEN)
        cookie.remove(AuthConstant.PUBLIC_KEY)
        cookie.set(AuthConstant.ACCESS_TOKEN, _token, { path: '/', expires: expires })
        window.location.href = "/"
    }

    useEffect(() => {
        if (cookie.get('access_token') !== undefined && cookie.get('access_token') !== '') {
            setAuth(true)
            // axios.get(process.env.REACT_APP_API_URL + "/public/verify-token", {
            //     headers: HeadersUtil.getHeadersAuth()
            // }).then((resp) => {
            //     if (resp.data) {
            //         setAuth(true)
            //     } else {
            //         cookie.remove(AuthConstant.ACCESS_TOKEN)
            //         // window.location.href = '/#/login'
            //         window.location.href = process.env.REACT_APP_AUTH_URL || ""
            //     }
            // }).catch((error) => {
            //     // window.location.href = '/#/login'
            //     window.location.href = process.env.REACT_APP_AUTH_URL || ""
            // })
        } else {
            // navigate('/login', { replace: true })
            let domain = window.location.origin;
            window.location.href = process.env.REACT_APP_AUTH_URL + "/login?redirect_uri=" + domain || ""
            
        }
    }, [navigate])

    // if (cookie.get('access_token') == undefined || cookie.get('access_token') === '') {
    //     return <Navigate to="/login" replace></Navigate>
    // }

    return (
        auth && props.children
    )
}