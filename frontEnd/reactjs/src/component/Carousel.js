import React, { useState } from 'react'
import arrowLeft from '../component/Images/arrowLeft.png'
import arrowRight from '../component/Images/arrowRight.png'

const Carousel = ({slides}) => {
    let [current, setCurrent] = useState(0);

    let previousSlide = () => {
        if(current === 0) setCurrent(slides.length - 1);
        else setCurrent(current - 1);
    }

    let nextSlide = () => {
        if(current === slides.length - 1) setCurrent(0);
        else setCurrent(current + 1);
    }

  return (
    <div className='w-[400px] h-[250px] flex overflow-hidden relative m-[30px]'
    >
        <div className='flex transition ease-out duration-40'
            style={{
                transform:`translateX(-${current * 100}%)`,
            }}>

            {slides.map((s)=>{
                    return <img src={s} alt="img" className='w-[400px]'/>;
            })}
        </div>
        <div className='w-[60px] h-[250px] absolute left-0 z-10 hover:bg-[#ffffff57]'>
            <button onClick={previousSlide} className="w-[60px] h-[250px] flex justify-center items-center">
                <img src={arrowLeft} alt="arrowLeft" className='w-[50px] h-[50px]'/>
            </button>
        </div>
        <div className='w-[60px] h-[250px] absolute right-0 z-10 hover:bg-[#ffffff57]'>
            <button onClick={nextSlide} className="w-[60px] h-[250px] flex justify-center items-center">
                <img src={arrowRight} alt="arrowRight" className='w-[50px] h-[50px]'/>
            </button>
        </div>
    </div>
  )
}

export default Carousel
