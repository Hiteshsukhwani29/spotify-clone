import React from 'react';
import LoginLogo from '../../assets/logo_login.js';
import { loginUrl } from './spotify';

function Login() {
    return (
        <div className='login grid place-items-center m-44'>
            <div className='login-logo h-24 mt-8'>
                <LoginLogo />
            </div>
            <a href={loginUrl} className='bg-spotify-green-100 px-[32px] py-[14px] text-sm font-font-circular tracking-wider rounded-3xl leading-5 m-20 hover:scale-105'>LOGIN WITH SPOTIFY</a>
        </div>
    )
}

export default Login