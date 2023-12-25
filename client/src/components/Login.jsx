import React from 'react'
import { NavLink } from 'react-router-dom'
import { postRequest } from '../utils/requests'
import { urls } from '../utils/apiUrl'
import { GoogleLogin, GoogleOAuthProvider } from '@react-oauth/google'

import { AuthContext } from '../context/auth/AuthWrapper'
import { useContext } from 'react'
import { useNavigate } from 'react-router-dom'

const Login = () => {

    const {login} = useContext(AuthContext);
    const Navigate = useNavigate();

    const onSuccess= async(response) => {
        const {message,id} = await login(response);
        if(message == "ok"){
            Navigate(`profile/${id}`)
        }
    }
    const onFail = (response) => {
        window.alert("You cannot login with google. Please try again!");
    }
    return (
            <div className="flex items-center justify-center dark:bg-gray-800">
                <GoogleLogin 
                    onSuccess={onSuccess}
                    onError={onFail} // Başarısız olursa yapılabilecek işlemler
                />
                {
                    console.log(window.location.origin)
                }
            </div>

        

    )
}

export default Login
