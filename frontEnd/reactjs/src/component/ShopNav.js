import React from 'react'
import logo from './Images/logo.png'
import { Link } from 'react-router-dom';

const ShopNav = () => {
  return (
    <div className="w-full min-w-[350px] h-[70px] flex pl-[25px]">
      <div className='w-[50px] h-[50px] md:w-[100px] md:h-[80px] flex justify-center align-center mt-[10px]'>
            <Link to="/"><img src={logo} alt='Logo' width={'80px'}></img></Link>
        </div>
    </div>
  )
}

export default ShopNav
