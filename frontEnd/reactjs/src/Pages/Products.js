import React, {useEffect, useState} from 'react'
import { Link } from 'react-router-dom';

const Products = () => {
  const [data, setData] = useState([]);

  useEffect(()=> {
    fetch('http://localhost:8081/newproduct')
    .then(res => res.json())
    .then(data => setData(data)
    )
    .catch(err => console.log(err));
  }, [])

  return (
    <div id='products' className='w-full flex justify-center items-center font-black pb-[5vw]'>
      <div className='w-[85vw] md:w-[90vw] min-w-[300px] pt-[20px] pl-[20px] pr-[20px] pb-[60px]'>
      <h1 className='text-[25px] md:text-[50px] font-black text-[#008631] mb-[15px] pl-[10px]
          border-l-[5px] border-solid border-[#86888a] pl-[20px] mb-[20px]'>New Release</h1>
      <div className='w-[100%] min-w-[250px] h-[100%] flex flex-wrap pt-[20px] pb-[20px] justify-evenly
            border-b-[3px] border-solid border-[#86888a]'>
            {data.map((d,i) => (
            <div key={i} className='w-[100%] md:w-[25%] md:min-w-[300px] h-[420px] bg-[#fff] mb-[20px] flex flex-col items-center rounded-[10px] shadow'>
              <div className='w-[200px] h-[250px] mb-[10px] flex justify-center items-center'>
                <img src={d.imagePath} alt='Not Found' className='w-[150px] h-[200px] mb-[10px] hover:w-[200px] hover:h-[250px]'/>
              </div>
              <h1 className='h-[75px] text-center text-[25px] text-[#86888a] mb-[20px]'>{d.productName}</h1>
              <button 
                className='w-[150px] h-[40px] text-[15px] rounded-t-[25px] rounded-b-[25px] text-[#fff]
                  bg-[#008631] hover:bg-[#006c18]'>
                  <Link to="/shop">Shop Now</Link></button>
            </div>
            ))}
      </div>
        <h1 className='text-[25px] md:text-[50px] font-black text-[#008631] mt-[20px] mb-[15px] pl-[10px]
            border-l-[5px] border-solid border-[#86888a] pl-[20px] mb-[20px]'>Our Products</h1>
        
        <div className='w-[100%] flex flex-wrap justify-evenly'>

          <div>
            <button className="w-[200px] h-[200px] mb-[15px] bg-cover bg-[url('/src/Pages/Images/seeds.jpg')] shadow rounded-[100px]"></button>
            <h1 className='w-[200px] h-[50px] font-black text-[#86888a] text-[25px] text-center'>Seeds</h1>
          </div>
          <div>
            <button className="w-[200px] h-[200px] mb-[15px] bg-cover bg-[url('/src/Pages/Images/plants.jpg')] shadow rounded-[100px]"></button>
            <h1 className='w-[200px] h-[50px] font-black text-[#86888a] text-[25px] text-center'>Plants</h1>
          </div>
          <div>
          <Link to="/shop"><button className="w-[200px] h-[200px] mb-[15px] bg-cover bg-[url('/src/Pages/Images/pesticides.jpg')] shadow rounded-[100px]"></button></Link>
            <h1 className='w-[200px] h-[50px] font-black text-[#86888a] text-[25px] text-center'>Pesticides</h1>
          </div>
          <div>
            <button className="w-[200px] h-[200px] mb-[15px] bg-cover bg-[url('/src/Pages/Images/fertilizer.jpg')] shadow rounded-[100px]"></button>
            <h1 className='w-[200px] h-[50px] font-black text-[#86888a] text-[25px] text-center'>Fertilizers</h1>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Products
