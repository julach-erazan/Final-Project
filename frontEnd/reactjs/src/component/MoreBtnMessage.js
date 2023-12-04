import React from 'react'
import Agrika_chatImg from './Images/agrika_chat.png'
import Guid_1 from './Images/guid_1.png'
import Guid_2 from './Images/guid_2.png'
import Guid_3 from './Images/guid_3.png'

const MoreBtnMessage = () => {
  return (
    <div>
      <div className='w-[100%] mb-[15px] text-[#000] flex'>
            <img src={Agrika_chatImg} alt='agrika_chat' className='w-[30px] h-[30px] rounded-[20px] mt-[5px]' />
            <div className='w-[70%] h-[100%] ml-[10px] bg-[#f5eeee] p-[10px] rounded-[10px] flex flex-col'>

              <p className='w-[100%]'>
                1. Click camara button.
              </p>
              <img src={Guid_1} alt="guid_img1" className='w-[200px]'/>
              <p className='w-[100%] mb-[10px]'>
                2. Choose image.
              </p>
              <img src={Guid_2} alt="guid_img2" className='w-[200px]'/>
              <p className='w-[100%] mb-[10px]'>
                3. Upload image.
              </p>
              <img src={Guid_3} alt="guid_img3" className='w-[200px]'/>
            </div>
        </div>
    </div>
  )
}

export default MoreBtnMessage
