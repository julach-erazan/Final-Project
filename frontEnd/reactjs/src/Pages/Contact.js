import React,{useState,useEffect} from 'react'

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
    {name:"HOME",id:"home"},
    {name:"ABOUT US",id:"about"},
    {name:"OUR PRODUCTS",id:"products"},
    {name:"CONTACT",id:"contact"},
  ];


  return (
    <div id='contact' className='w-full h-[100vh] bg-[black]'>
      {
        Links.map((link)=>(
          <li key={link.name} className="w-[150px] h-[50px] flex justify-center">
            <button onClick={() => handleClickScroll(link.id)} className="text-white text-[20px] hover:text-black">{link.name}</button>
          </li>
        ))
      }
    </div>
  )
}

export default Contact
