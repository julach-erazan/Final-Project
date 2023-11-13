import React from 'react'
import Nav from '../component/Nav'

const Home = () => {

  const handleClickScroll = (elementId) => {
    const element = document.getElementById(elementId);
    if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
    }
};

  return (
    <div id='home' className="w-[100vw] bg-cover bg-[url('/src/Pages/Images/background_mobile.png')] pl-[25px] md:pl-[50px]
    md:bg-[url('/src/Pages/Images/background.jpeg')]
    ">
      <Nav/>
      <div className='w-[250px] md:w-[70%] pb-[100px] md:mt-[100px]'>
        <h1 className='text-[25px] md:text-[50px] font-black text-[#008631]'>
          AGRO Agriculture - The Leader <span className='text-[#fff]'>Agricultural Innovation and Sustainability</span>
        </h1>
        <button className='w-[150px] h-[40px] md:w-[200px] md:h-[50px] mt-[20px] md:mt-[50px] font-bold text-[15px] md:text-[23px]
        flex rounded-[25px] items-center bg-[#008631] text-[#fff]
        border-solid border-[3px] border-[#008631] hover:bg-[#006c18] hover:border-[#006c18]
        '
        onClick={() => handleClickScroll('contact')}
        >
          <p className='h-[25px] md:h-[40px] ml-[15px]'>Contact us</p>
          <div className="w-[30px] h-[30px] md:w-[40px] md:h-[40px] ml-[20px] bg-cover bg-[url('/src/Pages/Images/arrow.png')]"></div>
        </button>
      </div>
    </div>
  )
}

export default Home
