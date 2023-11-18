import React, {useEffect, useState} from 'react'
import { Link } from 'react-router-dom';

const Products = () => {
  const [data, setData] = useState([]);

  useEffect(()=> {
    fetch('http://localhost:8081/test')
    .then(res => res.json())
    .then(data => setData(data)
    )
    .catch(err => console.log(err));
  }, [])

  return (
    <div id='products' className='w-full flex justify-center items-center text-black pb-[5vw]'>
      <div className='w-[85vw] md:w-[90vw] bg-[#e8e9eb] shadow pt-[20px] pl-[20px] pr-[20px] pb-[60px]'>
      <h1 className='text-[25px] md:text-[50px] font-black text-[#008631] mb-[15px] pl-[10px]
          border-l-[5px] border-solid border-[#000] pl-[20px] mb-[20px]'>New Release</h1>
      <div className='w-[100%] min-w-[250px] h-[100%] flex flex-wrap pt-[20px] justify-evenly'>
            {data.map((d,i) => (
            <div key={i} className='w-[100%] md:w-[25%] md:min-w-[300px] h-[400px] bg-[#fff] mb-[20px] flex flex-col items-center rounded-[10px] shadow'>
              <img src={d.imagePath} alt='Not Found' className='w-[70%] min-w-[200px] md:w-[100%] pl-[10px] pr-[10px] pt-[10px] mb-[40px]'/>
              <h1 className='text-center text-[25px] mb-[30px]'>{d.productName}</h1>
              <button className='w-[200px] h-[50px] bg-[blue]'><Link to="/shop">Shop Now</Link></button>
            </div>
            ))}
      </div>
      </div>
    </div>
  )
}

export default Products
