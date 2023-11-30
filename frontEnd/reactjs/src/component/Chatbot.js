import React, { useEffect, useRef, useState} from 'react'
import UploadImg from './Images/upload.png'
import SendImg from './Images/send.png'
import UserImg from './Images/user.png'
import Agrika_chatImg from './Images/agrika_chat.png'
import AgrikaImg from './Images/agrika.png'

const Chatbot = () => {
  const [popupWindow, setPopupWindow] = useState(false);
  const [popupInput, setPopupInput] = useState(false);
  const [image,setImage] = useState("");
  const [resmessage, setResMessage] = useState();
  const [helloMessage, setHelloMessage] = useState("");

  const [val,setVal] = useState([]);
  const [divElements, setDivElements] = useState([]);
  const newDivElements = [...divElements];
  const newIndex = newDivElements.length+1;
  const messageEndRef = useRef(null);

  //Chatbot window handle
  const handleClick = () =>{
    setPopupWindow(!popupWindow)
  }

  //Input Section
  const cameraClick = () => {
      setPopupInput(!popupInput);
  };

  //Chat Section Scroll Bottom
  const inputRef = useRef(null);

  const handleImageClick = () =>{
    inputRef.current.click();
  };

  //Set Image file for backend
  const handleImageChange = (event) => {
    const file = event.target.files[0];
    //console.log(file)
    setImage(file);
  };

  //Add Chat section divs
  const addDiv = () => {

    if(image.name != null){
      const newDiv = <div key={divElements.length}>
          <div className='w-[100%] mb-[15px] text-[#fff] flex'>
            <div className='w-[90%] h-[100%] mr-[10px] bg-[#4e4e4c] p-[10px] rounded-[10px] flex justify-center items-center'>
              {image && (<img src={URL.createObjectURL(image)} alt=""  className='h-[100px] bg-cover'/>)}
            </div>
            <img src={UserImg} alt='user' className='w-[30px] h-[30px] rounded-[20px] mt-[5px]' />
          </div>
        </div>;
      setDivElements([...divElements, newDiv]);
      setImage("")
      setPopupInput(false)

      const formData = new FormData();
      formData.append('image', image);

      fetch('http://localhost:5000/upload', {
        method: 'POST',
        body: formData,
      })
        .then(response => response.json())
        .then(data => {
          setVal([...val, data.message])
          setResMessage(data.message)
        })
        .catch(error => {
          console.error('Error during upload:', error);
        });
    }else{
      alert("Please upload image");
      setPopupInput(false);
    }

  };

  //display backend response message(flask)
  useEffect(()=>{
    
    if(val.length > 0){
      const newDiv = <div key={newIndex}>
          <div className='w-[100%] pt-[10px] pb-[10px] mb-[15px] text-[#000] flex'>
            <img src={Agrika_chatImg} alt='agrika_chat' className='w-[30px] h-[30px] rounded-[20px] mt-[5px]' />
            <div className='w-[70%] h-[100%] ml-[10px] bg-[#f5eeee] p-[10px] rounded-[10px] flex'>
              <p>{resmessage}</p>
            </div>
          </div>
        </div>;
      setDivElements([...divElements, newDiv]);
    }
  },[val.length])

  useEffect(() => {
    messageEndRef.current?.scrollIntoView()
    
  },[newIndex])

  //Hi button response message handle
  useEffect (() => {
    if(helloMessage === "Hello"){
      const newDiv = <div key={divElements.length}>
          <div className='w-[100%] mb-[15px] text-[#000] flex'>
            <img src={Agrika_chatImg} alt='agrika_chat' className='w-[30px] h-[30px] rounded-[20px] mt-[5px]' />
            <div className='w-[70%] h-[100%] ml-[10px] bg-[#f5eeee] p-[10px] rounded-[10px] flex'>
              <p>Welcome to Agro Agriculture Pvt(Ltd) webpage. I'm <b>Agrika.</b></p>
            </div>
          </div>
        </div>;
      setHelloMessage("");
      setDivElements([...divElements, newDiv]);
    }
  },[helloMessage])

  //Disabled hi button, while input
  useEffect (()=>{
    if(popupInput === true){
      document.getElementById('hiBtn').disabled = true;
      document.getElementById('hiBtn').style.backgroundColor = '#82d682';
      document.getElementById('hiBtn').style.color = '#f0f0f0';

    }else{
      document.getElementById('hiBtn').disabled = false;
      document.getElementById('hiBtn').style.backgroundColor = '#008631';
    }
  },[popupInput])

  //Hi button Click event
  const clickHello = () => {
      const newDiv = <div key={divElements.length}>
          <div className='w-[100%] mb-[15px] text-[#fff] flex justify-end'>
            <div className='w-[20%] h-[100%] mr-[10px] bg-[#4e4e4c] p-[10px] rounded-[10px] flex justify-center items-center'>
              <p>Hello</p>
            </div>
            <img src={UserImg} alt='user' className='w-[30px] h-[30px] rounded-[20px] mt-[5px]' />
          </div>
        </div>;
      setHelloMessage("Hello");
      setDivElements([...divElements, newDiv]);
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
          
          <div className='w-[100%] h-[55px] flex items-center border-b-[2px] border-solid border-[#bfc1c2] pr-[5px] bg-[#008631] mb-[10px] 
          rounded-t-[15px]'>

            <img src={AgrikaImg} alt='agrika' width={'30px'} height={'30px'} className='ml-[10px] rounded-[20px]' />
            <h3 className='w-[calc(100%-40px)] text-[20px] pl-[15px] text-[#fff]'>Agrika</h3>
            <button onClick={handleClick} className="w-[45px] h-[40px] bg-cover bg-[url('/src/component/Images/close-btn.png')]
            hover:bg-[url('/src/component/Images/close-btn-hover.png')] mr-[10px]
            "></button>
          </div>

          <div className='w-[100%] h-[460px] pl-[10px] pr-[10px] mb-[20px] overflow-y-scroll'>
              {divElements.map((div, index) => (
                <React.Fragment key={index}>{div}</React.Fragment>
              ))}

              <div ref={messageEndRef}/>
          </div>

          <div onSubmit={addDiv} method="POST" className={`w-[93.5%] md:w-[350px] bg-[#f0f0f0] rounded-[10px] absolute ml-[5px] mb-[10px] bottom-[100px] md:bottom-[95px] flex justify-center items-center 
            flex-col transition-all duration-500 ease-in ${(popupInput === true) ? "h-[40%]" :"h-0"}`}>

                <div onClick={handleImageClick} className={`w-[90%] h-[60%] flex justify-center items-center border-solid border-[3px] border-[#008000] rounded-[15px] flex-col
                  cursor-pointer ${(popupInput === true) ? "visible" :"hidden"}`}>
                    <input className='hidden' type="file" accept="image/*" ref={inputRef} onChange={handleImageChange}/>
                    {image ? (<img src={URL.createObjectURL(image)} alt=""  className='h-[100px] bg-cover'/>) : (<img src={UploadImg} alt="" width={'100px'}/>)}
                    <label className='w-[100%] flex justify-center items-center' htmlFor='imageUpload'>
                      <p className='text-black mt-[10px]'>Select a file here</p>
                    </label>
                  </div>
                <button onClick={addDiv} className={`w-[150px] h-[45px] border-solid border-[3px] 
                border-[#008000] rounded-[22.5px] bg-[#008000] mt-[25px] text-[#fff]
                hover:bg-[#228b22] hover:border-[#228b22]
                ${(popupInput === true) ? "visible" :"hidden"}
                `}>
                  Upload
                </button>
          </div>
          <div className='w-[100%] h-[45px] flex items-center'>
            <div className='w-[100%] pl-[10px] pr-[10px]'>
              <div className='w-[100%] h-[35px] rounded-l-[15px] rounded-r-[15px]
                flex items-center
                '>
                <button onClick={cameraClick} className="
                  w-[50px] h-[50px] rounded-[50%] fixed
                  bg-cover bg-[url('/src/component/Images/camera.png')] hover:bg-[url('/src/component/Images/camera-hover.png')]
                  "></button>
              </div>
            </div>
            <button id="hiBtn" className='w-[130px] h-[35px] mr-[40px]
            flex rounded-[25px] items-center bg-[#008631] text-[#fff]' onClick={clickHello}>
            <h1 className='w-[50px] font-black'>Hi</h1>
            <img src={SendImg} alt="send" className='w-[30px] h-[30px] rounded-[15px] mr-[10px]'/>
            </button>
          </div>
        </div>
      </div>
    </>
  )
}

export default Chatbot
