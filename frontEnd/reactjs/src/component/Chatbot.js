import React, { useState } from 'react'

const Chatbot = () => {
  const [popupWindow, setPopupWindow] = useState(false);
  const handleClick = () =>{
    setPopupWindow(!popupWindow)
  }

  const [imageInput, setImageInput] = useState(false);

  const cameraClick = () => {
    setImageInput(!imageInput)
  }

  return (
    <>
      <button onClick={handleClick}
        className="w-[200px] h-[200px] fixed bottom-[30px] right-[30px] bg-cover
        bg-[url('/src/component/chat-bot.gif')]
        ">
      </button>

      <div className={`
        w-[100%] h-[100vh] fixed z-100 top-0 flex justify-center items-center bg-[#ffffffad]
        ${(popupWindow === true) ? "visible" :"hidden"}
        `}>
        <div className='
          w-[300px] h-[600px] md:w-[400px] bg-[#e8e9eb] border-[10px] border-solid border-[#56cc36]'>
          
          <div className='w-[100%] h-[45px] bg-[#56cc36] flex items-center'>
            <h3 className='text-[20px] font-black text-[#fff] w-[calc(100%-40px)] text-center'>ChatBot</h3>
            <button onClick={handleClick} className="
              w-[40px] h-[40px] 
              bg-cover bg-[url('/src/component/back.png')]
              ">
            </button>
          </div>
          
          <div className='w-[100%] h-[450px] bg-black mt-[20px] mb-[20px] pl-[10px] overflow-y-scroll'>
              <div className='w-[300px] h-[70px] bg-[#fff] mt-[10px]'></div>
              <div className='w-[300px] h-[70px] bg-[yellow] mt-[10px]'></div>
              <div className='w-[300px] h-[70px] bg-[#fff] mt-[10px]'></div>
              <div className='w-[300px] h-[70px] bg-[yellow] mt-[10px]'></div>
              <div className='w-[300px] h-[70px] bg-[#fff] mt-[10px]'></div>
              <div className='w-[300px] h-[70px] bg-[yellow] mt-[10px]'></div>
              <div className='w-[300px] h-[70px] bg-[#fff] mt-[10px]'></div>
              <div className='w-[300px] h-[70px] bg-[yellow] mt-[10px]'></div>
          </div>
          <div className={`
          w-[380px] bg-[#bfc1c2] absolute z-200 bottom-[90px]
          transition-all duration-500 ease-in
          ${(imageInput === true) ? "h-[150px]" :"h-0"}
          `}></div>
          <div className='w-[100%] pl-[10px] pr-[10px]'>
            <div className='w-[100%] h-[35px] rounded-l-[15px] rounded-r-[15px]
              flex items-center
            '>
              <button onClick={cameraClick} className="
                w-[15%] h-[40px] 
                rounded-l-[15px] 
                border-solid border-[#bfc1c2] border-l-[3px] border-t-[3px] border-b-[3px]
                bg-cover bg-[url('/src/component/camera.png')]
                "></button>
              <input type={'text'} className='
                pl-[15px]
                focus:outline-none border-t-[3px] border-b-[3px] border-solid border-[#bfc1c2]
                w-[70%]
                h-[40px]
              '></input>
              <button className="
                w-[15%] h-[40px] rounded-r-[15px] 
                border-solid border-[#bfc1c2] border-r-[3px] border-t-[3px] border-b-[3px]
                bg-cover bg-[url('/src/component/send.png')]
                "></button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Chatbot
