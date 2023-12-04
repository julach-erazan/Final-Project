import React, {useEffect, useState} from 'react'
import { Link } from 'react-router-dom';
import Footer from '../component/Footer';
import Nav from '../component/Nav'
import Contact from '../Pages/Contact'

const Shop = () => {

  const [data, setData] = useState([]);

  useEffect(()=> {
    fetch('http://localhost:8081/pesticides')
    .then(res => res.json())
    .then(data => setData(data)
    )
    .catch(err => console.log(err));
  }, [])

  //After Reload page, page scrool top
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  let Links =[
    {name:"PESTS",id:"pests"},
    {name:"PRODUCTS",id:"products"},
    {name:"CONTACT",id:"contact"},
  ];

  return (
    <>
    <div id="home" className='w-[100vw] pl-[25px] md:pl-[50px]'>
      <Nav Links={Links}/>
      <div id="pests" className="w-[85vw] md:w-[90vw] min-w-[300px] pt-[20px] pl-[20px] pr-[20px] pb-[20px]">
        <h1 className='text-[25px] md:text-[40px] font-black text-[#008631] mt-[20px] mb-[15px] pl-[10px]
              border-l-[5px] border-solid border-[#86888a] pl-[20px] mb-[20px]'>Pests in Rice</h1>
          
          <div className='w-[100%] flex flex-wrap justify-evenly'>

            <div>
              <Link to={'/pest/rice gall midge'}><button className="w-[150px] h-[150px] mb-[15px] bg-cover bg-[url('/src/Pages/Images/rice_gall_midge.jpg')] shadow rounded-[100px]"></button></Link>
              <h1 className='w-[150px] md:h-[50px] font-black text-[#86888a] text-[20px] text-center mb-[20px] ml-[5px] mr-[5px]'>Rice Gall Midge</h1>
            </div>
            <div>
            <Link to={'/pest/brown plant hopper'}><button className="w-[150px] h-[150px] mb-[15px] bg-cover bg-[url('/src/Pages/Images/brown_plant_hopper.jpg')] shadow rounded-[100px]"></button></Link>
              <h1 className='w-[150px] md:h-[50px] font-black text-[#86888a] text-[20px] text-center mb-[20px] ml-[5px] mr-[5px]'>Brown Plant Hopper</h1>
            </div>
            <div>
            <Link to="/shop"><button className="w-[150px] h-[150px] mb-[15px] bg-cover bg-[url('/src/Pages/Images/rice_thrips.jpg')] shadow rounded-[100px]"></button></Link>
              <h1 className='w-[150px] md:h-[50px] font-black text-[#86888a] text-[20px] text-center mb-[20px] ml-[5px] mr-[5px]'>Rice Thrips</h1>
            </div>
            <div>
              <button className="w-[150px] h-[150px] mb-[15px] bg-cover bg-[url('/src/Pages/Images/white_baked_plant_hopper.jpg')] shadow rounded-[100px]"></button>
              <h1 className='w-[150px] md:h-[50px] font-black text-[#86888a] text-[20px] text-center mb-[20px] ml-[5px] mr-[5px]'>White Backed Plant Hopper</h1>
            </div>

          </div>
      </div>
      <div id="products" className="w-[85vw] md:w-[90vw] min-w-[300px] pt-[20px] pl-[20px] pr-[20px] pb-[20px]">
        <h1 className='text-[25px] md:text-[40px] font-black text-[#008631] mb-[15px] pl-[10px]
            border-l-[5px] border-solid border-[#86888a] pl-[20px] mb-[20px]'>Products</h1>
        <div className='w-[100%] min-w-[250px] h-[100%] flex flex-wrap pt-[20px] pb-[20px] justify-evenly'>
              {data.map((d,i) => (
              <div key={i} className='w-[100%] md:w-[25%] md:min-w-[300px] h-[420px] bg-[#fff] mb-[20px] flex flex-col items-center rounded-[10px] shadow'>
                <div className='w-[200px] h-[250px] mb-[10px] flex justify-center items-center'>
                  <img src={d.imagePath} alt='Not Found' className='w-[150px] h-[200px] mb-[10px] hover:w-[200px] hover:h-[250px]'/>
                </div>
                <h1 className='h-[75px] text-center text-[25px] text-[#86888a] mb-[20px] font-black'>{d.productName}</h1>
                <Link to={`/readmore/${d.productName}`}><button 
                  className='w-[150px] h-[40px] text-[15px] font-black rounded-t-[25px] rounded-b-[25px] text-[#fff]
                    bg-[#008631] hover:bg-[#006c18]'>
                    Read more</button></Link>
              </div>
              ))}
        </div>
      </div>
    </div>
    <Contact Links={Links}/>
    <Footer/>
    </>
  )
}

export default Shop
