import React, { useEffect } from 'react'

import { useContext } from 'react'
import { AuthContext } from '../context/auth/AuthWrapper'
import { Route,Routes } from 'react-router-dom'
import { nav } from './Navigation'
const RenderNavigation = () => {

    const { authed,authentication } = useContext(AuthContext);

    useEffect(() => {
        authentication();

    },[])

    return (
        <Routes>
            {
                nav.map((element,index) => {
                    if(element.isProtect && authed){
                        return <Route key={index} element={element.element} path={element.path}/>
                    }else if(!element.isProtect){
                        return <Route key={index} element={element.element} path={element.path}/>
                    }else return false
                })
            }
        </Routes>
    )
}

export default RenderNavigation
