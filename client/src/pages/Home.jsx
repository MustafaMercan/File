import React from 'react'
import { NavLink } from 'react-router-dom'
import Login from '../components/Login'


const Home = () => {
    console.log('test -> ', window.location)


    return (
        <div className='w-screen h-screen flex items-center justify-center flex-col gap-12'>
            <h1 className='text-3xl text-gray-400 font-semibold'>Welcome Storage Web App</h1>
            <div className='flex flex-col items-center justify-center'>
                <h3 className='text-2xl text-gray-400 font-semibold my-5'> Please Login </h3>
                <Login />
            </div>


        </div>
    )
}

export default Home
