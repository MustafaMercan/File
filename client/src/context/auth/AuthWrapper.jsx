import { createContext, useContext, useEffect, useState } from "react";
import { postRequest } from "../../utils/requests";
import { urls } from "../../utils/apiUrl";
export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {

    const [authed, setAuthed] = useState(false);
    const [user, setUser] = useState({});


    useEffect(() => {
        console.log(user);
    }, [user])

    const login = async (response) => {
        const server_response = await postRequest(urls.userLogin, response);
        console.log('response -> ', response);
        console.log('server response -> ', server_response);
        if (server_response.serverMessage == "ok") {
            setAuthed(true);
            setUser(server_response.user);
            console.log('ok output -> ', server_response);
            localStorage.setItem('authToken',server_response.token);
            return {id:server_response.user._id, message: server_response.serverMessage}
        }
    }
    const authentication = async() => {
        const token = localStorage.getItem('authToken');
        if(token){
            const server_response = await postRequest(urls.userAuth,{token})
        }

    }
    return (
        <AuthContext.Provider value={{ login, authed , user, authentication }}>
            {children}
        </AuthContext.Provider>
    )
}