import React, {useEffect, useState} from 'react';
import {useParams } from 'react-router-dom';
import axios from 'axios';
import ReadmoreNav from '../component/ReadmoreNav';
import Footer from '../component/Footer';
import ShopContact from '../Pages/ShopContact';

const Readmore = () => {
    const {productName} = useParams();
    const [val, setVal] = useState([]);

    useEffect(()=>{
        axios.get('http://localhost:8081/readmore/'+productName)
    .then(res => {
        console.log(res.data)
        setVal(res.data)
    })
    .catch(err => console.log(err));
    }, [])

    //After Reload page, page scrool top
    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);
  return (
    <>
    {val.map((d,i) => (
        <div key={i} className='w-[100vw] pl-[25px] md:pl-[50px]'>
          <ReadmoreNav/>
            <div className="w-[85vw] md:w-[90vw] min-w-[300px] pt-[20px] pl-[20px] pr-[20px] pb-[20px]">
                <h1 className='text-[25px] md:text-[40px] font-black text-[#008631] mt-[20px] mb-[15px] pl-[10px]
                border-l-[5px] border-solid border-[#86888a] pl-[20px] mb-[20px]'>{d.productName}</h1>

                <div className='w-[100%] flex flex-col md:flex-row text-[#86888a]'>
                    <div className='w-[100%] md:w-[50%]  flex justify-center'>
                        <img src={d.imagePath} alt="Pesticide" className='w-[300px]'/>
                    </div>
                    <p className='w-[100%] md:w-[50%] h-[420px] flex items-center'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt maiores reiciendis
                        voluptatem repellendus, impedit consequuntur alias, animi, nemo provident exercitationem
                        eaque sunt hic nulla. Pariatur necessitatibus vero similique nesciunt natus.
                    </p>
                </div>
            </div>

            <div className="w-[85vw] md:w-[90vw] min-w-[300px] pt-[20px] pl-[20px] pr-[20px] pb-[20px]">
                <h1 className='text-[25px] md:text-[40px] font-black text-[#008631] mt-[20px] mb-[15px] pl-[10px]
                border-l-[5px] border-solid border-[#86888a] pl-[20px] mb-[20px]'>Discription</h1>

                <table>
                   <tr>
                    <th><h1>Chemical Name</h1></th>
                    <td>{d.chemicalName}</td>
                   </tr>

                   <tr>
                    <th><h1>Manufacturer</h1></th>
                    <td>{d.manufacturer}</td>
                   </tr>

                   <tr>
                    <th><h1>Pesticide Classification</h1></th>
                    <td>{d.pesticideClassification}</td>
                   </tr>

                   <tr>
                    <th><h1>Existing Packs Available</h1></th>
                    <td>{d.existingPacksAvailable}</td>
                   </tr>

                   <tr>
                    <th><h1>Dosage</h1></th>
                    <td>{d.dosage}</td>
                   </tr>

                   <tr>
                    <th rowSpan={2}><h1>Dilution Rate</h1></th>
                    <td><h1>10 Day</h1></td>
                    <td><h1>16 Days</h1></td>
                   </tr>

                   <tr>
                    <td>{d.dilutionRate_10}</td>
                    <td>{d.dilutionRate_16}</td>
                   </tr>

                   <tr>
                    <th><h1>Harvest Interval</h1></th>
                    <td>{d.harvestInterval}</td>
                   </tr>

                </table>           
            </div>
        </div>
    ))}
    <ShopContact/>
    <Footer/> 
    </>
  )
}

export default Readmore
