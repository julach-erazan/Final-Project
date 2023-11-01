import React from 'react'
import { useState } from 'react'

const Nav = () => {
        const [menu, setMenu] = useState(false);
        const handleClick = () =>{
            setMenu(!menu)
        }

  return (
    <div className='w-full min-w-[350px] h-[100px] flex'>
        <div className='w-[100px] h-[100px] bg-[red] md:w-[10%]'></div>
        <div className='w-[100%] h-[100px] bg-[green] md:w-[calc(90%-100px)]'></div>
        <div className={`
        w-0  bg-[black] 
        fixed right-0
        transition-all duration-500 ease-in
        ${(menu === true) ? 'w-[100vw] h-[100vh] md:w-[400px]' :'h-0 w-[100vw] md:h-[100vh] md:w-0'}
        `}>
        </div>
        <div className='w-[100px] h-[100px] relative z-100 flex justify-center items-center'>
            <button onClick = {handleClick}
                className={`w-[60px] h-[60px] bg-cover fixed
                ${(menu === true) ? "bg-[url('/src/component/close2.png')]" :"bg-[url('/src/component/menu2.png')]"}
                `}>
            </button>
        </div>
    </div>
  )
}

export default Nav