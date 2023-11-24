import React,{useState,useEffect} from 'react'
import Logo from '../component/Images/logo.png'
import Facebook from './Images/facebook.png'
import Twitter from './Images/twitter.png'
import Youtube from './Images/youtube.png'

import Location_icon from './Images/location.png'
import Mail_icon from './Images/email.png'
import Phone_icon from './Images/mobile.png'

const Contact = () => {

  const [lastScrollTop, setLastScrollTop] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    setLastScrollTop(scrollTop);
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
    }
};

let Links =[
    {name:"Home",id:"home"},
    {name:"About Us",id:"about"},
    {name:"Our Products",id:"products"},
    {name:"Contact",id:"contact"},
  ];


  return (
    <div id='contact' className='w-full md:h-[250px] flex flex-col md:flex-row bg-[#c0c7d0] justify-center items-center'>
      <div className='w-[100%] md:w-[25%] h-[260px] flex flex-col justify-center items-center'>
        <img src={Logo} alt="Logo" className='w-[100px] h-[100px] mt-[20px]'/>
        <h1 className='text-[20px] mt-[10px] w-[100%] text-center text-[#008631] font-black'>Agro Agriculture Pvt(Ltd)</h1>
        <div className='w-[100%] h-[120px] flex justify-center items-center'>
          <button><img src={Facebook} alt="facebook_icon" className='w-[40px] h-[40px] ml-[10px] mr-[10px]'/></button>
          <button><img src={Twitter} alt="Twitter_icon" className='w-[40px] h-[40px] ml-[10px] mr-[10px]'/></button>
          <button><img src={Youtube} alt="Youtube_icon" className='w-[40px] h-[40px] ml-[10px] mr-[10px]'/></button>
        </div>
      </div>
      <div className='w-[100%] md:w-[25%] h-[250px] flex flex-col justify-center items-center text-[#fff]'>
        <button className='w-[250px] h-[50px] flex items-center'>
          <img src={Phone_icon} alt="Phone_icon" className='w-[40px] h-[40px] ml-[10px] mr-[10px]'/>
          <p>(011) 2 225 555/ 57</p>
        </button>
        <button className='w-[250px] h-[50px] flex items-center'>
          <img src={Mail_icon} alt="Email_icon" className='w-[40px] h-[40px] ml-[10px] mr-[10px]'/>
          <p>agroagriculture@mail.com</p>
        </button>
        <button className='w-[250px] h-[100px] flex'>
          <img src={Location_icon} alt="Location_icon" className='w-[40px] h-[40px] ml-[10px] mr-[10px]'/>
          <p>No 256/B, Foster Lane, <br/>Colombo 10, <br/>Sri Lanka.</p>
        </button>
      </div>
      <div className='w-[100%] md:w-[25%] h-[250px] flex justify-center items-center'>
        <ul>
          {
          Links.map((link)=>(
            <li key={link.name} className="w-[100%] h-[50px] flex justify-center">
              <button onClick={() => handleClickScroll(link.id)} className="text-white hover:text-black text-center">{link.name}</button>
            </li>
          ))
          }
        </ul>
      </div>
    </div>
  )
}

export default Contact
