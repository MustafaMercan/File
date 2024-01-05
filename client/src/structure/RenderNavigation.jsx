import React, { useEffect, useState } from 'react'

import { useContext } from 'react'
import { AuthContext } from '../context/auth/AuthWrapper'
import { Route, Routes } from 'react-router-dom'
import { nav } from './Navigation'
const RenderNavigation = () => {

    const { authed, authentication } = useContext(AuthContext);

    const [userID, setUserID] = useState("");

    const [resolvedUserID, setResolvedUserID] = useState('');


    useEffect(() => {
        const responseAuth = authentication();
        setUserID(responseAuth)
    }, [])

    useEffect(() => {
        const resolveUserID = async () => {
            try {
              const resolved = await userID;
              setResolvedUserID(resolved);
            } catch (error) {
              console.error('userID alınamadı: ', error);
            }
          };
          resolveUserID();

    }, [userID]);

    return (
        <Routes>
            {
                nav.map((element, index) => {
                    if (element.isProtect && authed) {
                        console.log(userID)
                        return (
                            <Route key={index} element={element.element} path={`${element.path}${resolvedUserID}`} />)
                    } else if (!element.isProtect) {
                        return <Route key={index} element={element.element} path={element.path} />
                    } else return false
                })
            }
        </Routes>
    )
}

export default RenderNavigation
