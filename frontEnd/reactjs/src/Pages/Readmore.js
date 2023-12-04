import React, {useEffect, useState} from 'react';
import {useParams } from 'react-router-dom';
import axios from 'axios';
import Nav from '../component/Nav';
import Footer from '../component/Footer';
import Contact from '../Pages/Contact';

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

      let Links =[
        {name:"HOME",id:"home"},
        {name:"DISCRIPTION",id:"discription"},
        {name:"CONTACT",id:"contact"},
      ];

  return (
    <>
    {val.map((d,i) => (
        <div id="home" key={i} className='w-[100vw] pl-[25px] md:pl-[50px]'>
          <Nav Links={Links}/>
            <div className="w-[85vw] md:w-[90vw] min-w-[300px] pt-[20px] pl-[20px] pr-[20px] pb-[20px]">
                <h1 className='text-[25px] md:text-[40px] font-black text-[#008631] mt-[20px] mb-[15px] pl-[10px]
                border-l-[5px] border-solid border-[#86888a] pl-[20px] mb-[20px]'>{d.productName}</h1>

                <div className='w-[100%] flex flex-col md:flex-row text-[#86888a]'>
                    <div className='w-[100%] md:w-[50%]  flex justify-center ml-[20px] 
                    shadow'>
                        <img src={d.imagePath} alt="Pesticide" className='w-[300px]'/>
                    </div>
                    <div className='w-[100%] md:w-[50%] md:h-[420px] flex items-center mt-[20px] md:mt-0 mb-[20px] md:mb-0 ml-[20px]'>
                        <p className='border-l-[5px] border-r-[0px] md:border-r-[5px] md:border-l-[0px] border-solid border-[#008631]
                        pl-[20px] pr-0 md:pl-0 md:pr-[20px]'>
                            {d.details}
                        </p>
                    </div>
                </div>
            </div>

            <div id="discription" className="w-[85vw] md:w-[90vw] min-w-[300px] pt-[20px] pl-[20px] pr-[20px] pb-[20px]">
                <h1 className='text-[25px] md:text-[40px] font-black text-[#008631] mt-[20px] mb-[15px] pl-[10px]
                border-l-[5px] border-solid border-[#86888a] pl-[20px] mb-[20px]'>Discription</h1>

                <table className='w-[85vw] border-[2px] border-solid border-[#86888a] mb-[60px]'>
                    <tr>
                        <th className="w-[50%] h-[40px] text-left pl-[20px] border-[2px] border-solid border-[#86888a] text-[#008631]"><h1>Chemical Name</h1></th>
                        <td colSpan={2} className="w-[50%] h-[40px] text-center border-[2px] border-solid border-[#86888a] text-[#86888a]" >{d.chemicalName}</td>
                    </tr>
                    
                    <tr>
                        <th className="w-[50%] h-[40px] text-left pl-[20px] border-[2px] border-solid border-[#86888a] text-[#008631]"><h1>Manufacturer</h1></th>
                        <td colSpan={2} className="w-[50%] h-[40px] text-center border-[2px] border-solid border-[#86888a] text-[#86888a]" >{d.manufacturer}</td>
                    </tr>
                    
                    <tr>
                        <th className="w-[50%] h-[40px] text-left pl-[20px] border-[2px] border-solid border-[#86888a] text-[#008631]"><h1>Pesticide Classification</h1></th>
                        <td colSpan={2} className="w-[50%] h-[40px] text-center border-[2px] border-solid border-[#86888a] text-[#86888a]" >{d.pesticideClassification}</td>
                    </tr>
                    
                    <tr>
                        <th className="w-[50%] h-[40px] text-left pl-[20px] border-[2px] border-solid border-[#86888a] text-[#008631]"><h1>Existing Packs Available</h1></th>
                        <td colSpan={2} className="w-[50%] h-[40px] text-center border-[2px] border-solid border-[#86888a] text-[#86888a]" >{d.existingPacksAvailable}</td>
                    </tr>
                    
                    <tr>
                        <th className="w-[50%] h-[40px] text-left pl-[20px] border-[2px] border-solid border-[#86888a] text-[#008631]"><h1>Dosage/ ha based on Crop/Pest or Weed & Rate of infestation</h1></th>
                        <td colSpan={2} className="w-[50%] h-[40px] text-center border-[2px] border-solid border-[#86888a] text-[#86888a]" >{d.dosage}</td>
                    </tr>
                    
                    <tr>
                        <th rowSpan={2} className="text-left pl-[20px] border-[2px] border-solid border-[#86888a] text-[#008631]">Dilution Rate Per Tank</th>
                        <th className="w-[25%] h-[40px] border-[2px] border-solid border-[#86888a] text-[#008631]">10 Ltr</th>
                        <th className="w-[25%] h-[40px] border-[2px] border-solid border-[#86888a] text-[#008631]" >16 Ltr</th>
                    </tr>
                    
                    <tr>
                        <td className="w-[25%] h-[40px] text-center border-[2px] border-solid border-[#86888a] text-[#86888a]" >{d.dilutionRate_10}</td>
                        <td colSpan={2} className="w-[25%] h-[40px] text-center border-[2px] border-solid border-[#86888a] text-[#86888a]" >{d.dilutionRate_16}</td>
                    </tr>
                    
                    <tr>
                        <th className="w-[50%] h-[40px] text-left pl-[20px] border-[2px] border-solid border-[#86888a] text-[#008631]"><h1>Pre Harvest Interval</h1></th>
                        <td colSpan={2} className="w-[50%] h-[40px] text-center border-[2px] border-solid border-[#86888a] text-[#86888a]" >{d.harvestInterval}</td>
                    </tr>
                </table>           
            </div>
        </div>
    ))}
    <Contact Links={Links}/>
    <Footer/> 
    </>
  )
}

export default Readmore
