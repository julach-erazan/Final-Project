import React, { useEffect, useState } from 'react'
import logo from './Images/logo.png'

const Nav = () => {

    const [lastScrollTop, setLastScrollTop] = useState(0);
    const [menu, setMenu] = useState(false);
    const [topBtn, setTopBtn] = useState(true);

    const handleClick = () =>{
        setMenu(!menu)
    }

    useEffect(() => {
        const handleScroll = () => {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        setLastScrollTop(scrollTop);
        
        if(scrollTop>=200){
            setTopBtn(false);
        }else{
            setTopBtn(true);
        }

        };

        window.addEventListener('scroll', handleScroll);

        return () => {
        window.removeEventListener('scroll', handleScroll);
        };
    }, [lastScrollTop]);

    const handleClickScroll = (elementId) => {
        const element = document.getElementById(elementId);

        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
            setMenu(false);
        }
    };

    let Links =[
        {name:"HOME",id:"home"},
        {name:"ABOUT US",id:"about"},
        {name:"OUR PRODUCTS",id:"products"},
        {name:"CONTACT",id:"contact"},
      ];

  return (
    <div className="w-full min-w-[350px] h-[70px] flex">
        
        <button className={`w-[40px] h-[40px] md:w-[50px] md:h-[50px] fixed z-[200] bottom-[150px] right-[20px] 
        bg-[url('/src/Pages/Images/top.png')] transition-all duration-500 ease-in ${(topBtn === true) ? "hidden" :"visible"} bg-cover`} 
        onClick={() => handleClickScroll('home')}></button>

        <div className='w-[50px] h-[50px] md:w-[100px] md:h-[80px] flex justify-center align-center mt-[10px]'>
            <button onClick={() => handleClickScroll('home')}><img src={logo} alt='Logo' width={'80px'}></img></button>
        </div>
        <div className='invisible w-0 md:visible md:w-[100%] md:h-[50px] flex justify-center items-center'>
            <ul className="flex">
            {
            Links.map((link)=>(
                <li key={link.name} className="w-[150px] h-[50px] flex justify-center">
                <button onClick={() => handleClickScroll(link.id)} className="text-white text-[20px] hover:text-black">{link.name}</button>
                </li>
            ))
            }
        </ul>
        </div>
        <div id='menu' className={`bg-[#008631] fixed right-0 transition-all duration-500 ease-in ${(menu === true) ? 'w-[100vw] h-[100vh] md:w-[400px]' :'top-[-100vh] w-[100vw] md:h-[100vh] md:w-0'}`}>
        <ul className="flex flex-col ">
                {
                Links.map((link)=>(
                    <li key={link.name} className="w-full h-[100px] md:w-[150px] md:h-[50px] flex col justify-center">
                    <button onClick={() => handleClickScroll(link.id)} className="text-white text-[20px] hover:text-black">{link.name}</button>
                    </li>
                ))
                }
            </ul>
        </div>
        <div className='w-[100px] h-[100px] flex justify-center items-center'>
            <button onClick = {handleClick}
                id="menuBtn" className={`visible md:invisible w-[60px] h-[60px] bg-cover fixed top-[10px] right-[20px]
                ${(menu === true) ? "bg-[url('/src/component/Images/close-menu.png')]" :"bg-[url('/src/component/Images/menu2.png')]"}
                `}>
            </button>
        </div>
    </div>
  )
}

export default Nav