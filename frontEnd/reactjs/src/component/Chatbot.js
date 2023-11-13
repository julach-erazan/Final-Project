import React, { useState} from 'react'
import uploadImage from './Images/upload.png'
import ChatArea from './ChatArea';

const Chatbot = () => {
  const [popupWindow, setPopupWindow] = useState(false);
  const [imageInput, setImageInput] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const handleClick = () =>{
    setPopupWindow(!popupWindow)
  }

  const cameraClick = () => {
    setImageInput(!imageInput)
  }

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setSelectedImage(URL.createObjectURL(file));
    }else{    
    }
  }

  return (
    <>
      <button onClick={handleClick}
        className={`w-[100px] h-[100px] fixed z-[200] bottom-[30px] right-[30px] bg-cover transition-all duration-600 ease-in hover:scale-[0.90]
          ${(popupWindow === true) ? "bg-none" :"bg-[url('/src/component/Images/ask_agrika.png')]"}
        `}>
      </button>

      <div className={`
        w-full h-[100vh] fixed z-[300] top-0 md:right-[15px] flex justify-center md:justify-end items-center bg-[#ffffff00]
        ${(popupWindow === true) ? "visible" :"hidden"}`}>

        <div className='w-[95%] h-[95%] md:w-[360px] md:h-[600px] bg-[#fff] rounded-[15px] md:shadow'>
          
          <div className='w-[100%] h-[55px] flex items-center border-b-[2px] border-solid border-[#bfc1c2] pr-[5px] bg-[#008631] 
          rounded-t-[15px]'
          >
            <h3 className='w-[100%] text-[20px] pl-[25px] text-[#fff]'>AgroBot</h3>
            <button onClick={handleClick} className="w-[45px] h-[40px] bg-cover bg-[url('/src/component/Images/close-btn.png')]
            hover:bg-[url('/src/component/Images/close-btn-hover.png')] mr-[10px]
            "></button>
          </div>

          <div className='w-[100%] h-[480px] pl-[10px] pr-[10px] overflow-y-scroll'>
              {/* <div className='w-[100%] bg-[#000] mt-[10px]'>
              <p>Selected Image:</p>
                  <img src={selectedImage} alt="Selected" width="200" />
              </div>
              <div className='w-[100%] h-[70px] bg-[yellow] mt-[10px]'></div> */}
              <ChatArea/>
          </div>
          <div className={`w-[93%] md:w-[350px] bg-[#d0d0cf] rounded-[10px] absolute ml-[5px] bottom-[120px] flex justify-center items-center 
            transition-all duration-500 ease-in ${(imageInput === true) ? "h-[200px]" :"h-0"}`}>

                <div className={`w-[90%] h-[80%] flex justify-center items-center border-dashed border-[3px] border-[black]
                  ${(imageInput === true) ? "visible" :"hidden"}`}>
                  <input id='imageUpload' className='hidden' type="file" accept="image/*" onChange={handleImageChange}/>
                  <label className='w-[100%] h-[100%] flex justify-center items-center' for='imageUpload'>
                    <img src={uploadImage} alt="" width="100px" height="100px"/>
                    </label>
                </div>
              </div>
          <div className='w-[100%] h-[45px] flex items-center'>
            <div className='w-[100%] pl-[10px] pr-[10px]'>
              <div className='w-[100%] h-[35px] rounded-l-[15px] rounded-r-[15px]
                flex items-center
                '>
                <button onClick={cameraClick} className="
                  w-[50px] h-[50px] rounded-[50%]
                  bg-cover bg-[url('/src/component/Images/camera.png')] hover:bg-[url('/src/component/Images/camera-hover.png')]
                  "></button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Chatbot
