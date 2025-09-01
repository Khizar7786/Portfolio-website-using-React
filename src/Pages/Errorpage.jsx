import React from 'react'
import { useRouteError } from 'react-router-dom'
import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import { NavLink } from 'react-router-dom';


function Errorpage() {
  const error = useRouteError();  
  console.log(error);
  return (
    <>
    <div className='error-container'>
            <DotLottieReact
      src="https://lottie.host/a0d82ae4-9230-4c3b-8991-e6c3606de77b/Zjr5h51I5m.lottie"
      loop
      autoplay
      className='error'
    />
    <h1 className='m-'>You have landed at wrong page</h1>
    <NavLink to="/" className="goBackBtn">GO BACK</NavLink>
    </div>
    </>
  )
}

export default Errorpage
