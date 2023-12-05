import React from 'react'
import Agrika_chatImg from './Images/agrika_chat.png'

const HelloMessage = (props) => {
    
  return (
    <div>
      <div className='w-[100%] mb-[15px] text-[#000] flex'>
            <img src={Agrika_chatImg} alt='agrika_chat' className='w-[30px] h-[30px] rounded-[20px] mt-[5px]' />
            <div className='w-[70%] h-[100%] ml-[10px] bg-[#f5eeee] p-[10px] rounded-[10px] flex flex-col'>
              <p className='w-[100%] mb-[15px]'>Hi, Welcome to Agro Agriculture Pvt(Ltd) webpage. I'm <b>Agrika.</b>
              Your digital farming companion! I'm <b>AI</b> powered chatbot. I have advanced <b>Image Recognition
              System. </b>I can identifying pest and recommend suitable pesticide for your crops. Try it now !!!
              </p>
              <div className='w-[100%] h-[30px] flex justify-start items-center'>
                    <button onClick={props.moreBtnProp} className='w-[100px] h-[30px] rounded-[15px] bg-[#008631] hover:bg-[#006c18] text-[#fff] font-black'>Help</button>
                    
              </div>
            </div>
        </div>
    </div>
  )
}

export default HelloMessage
