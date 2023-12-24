import React from 'react'
import { NavLink } from 'react-router-dom'
import { postRequest } from '../utils/requests'
import { urls } from '../utils/apiUrl'
import { GoogleLogin, GoogleOAuthProvider } from '@react-oauth/google'
const Login = () => {


    const onSuccess= async(response) => {

        const server_response = await postRequest(urls.userLogin,response);
        console.log('response -> ', response);
        console.log('server response -> ', server_response);
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
