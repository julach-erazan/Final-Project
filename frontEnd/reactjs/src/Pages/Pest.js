import React, {useEffect, useState} from 'react';
import {useParams } from 'react-router-dom';
import axios from 'axios';
import Contact from './Contact';
import Footer from '../component/Footer';
import Nav from '../component/Nav';
import Carousel from '../component/Carousel';

const Pest = () => {
    const {pestName} = useParams();
    const [val, setVal] = useState([]);
    const [slides, setSlides] = useState([])
    const [pesticideLinks, setPesticideLinks] = useState([]);

    useEffect(()=>{
        axios.get('http://localhost:8081/pest/'+pestName)
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

      useEffect(()=>{
        if(pestName === "brown plant hopper"){
            let slides = [
                '/Images/brown_plant_hopper_damage_1.jpg',
                '/Images/brown_plant_hopper_damage_2.jpg',
                '/Images/brown_plant_hopper_damage_3.jpg',
            ]
            setSlides(slides);

            let PesticideLinks = [
                {name:"Admire",url:"http://localhost:3000/readmore/Admire"},
                {name:"Admire",url:"http://localhost:3000/readmore/Admire"},
                {name:"Admire",url:"http://localhost:3000/readmore/Admire"},
              ]
            setPesticideLinks(PesticideLinks);
        }else if(pestName === "rice gall midge"){
            let slides = [
                '/Images/rice_gall_midge_damage_1.jpg',
                '/Images/rice_gall_midge_damage_2.jpg',
                '/Images/rice_gall_midge_damage_3.jpg',
            ]
            setSlides(slides);

            let PesticideLinks = [
                {name:"Provado",url:"http://localhost:3000/readmore/Provado"},
                {name:"Provado",url:"http://localhost:3000/readmore/Provado"},
                {name:"Provado",url:"http://localhost:3000/readmore/Provado"},
              ]
            setPesticideLinks(PesticideLinks);
        }

      },[])

      let Links =[
        {name:"PEST",id:"home"},
        {name:"DAMAGE",id:"damage"},
        {name:"CONTROL",id:"control"},
        {name:"CONTACT",id:"contact"},
      ];

  return (
    <div id="home">
      {val.map((d,i) => (
        <div key={i} className='w-[100vw] pl-[25px] md:pl-[50px]'>
          <Nav Links={Links}/>
            <div className="w-[85vw] md:w-[90vw] min-w-[300px] pt-[20px] pl-[20px] pr-[20px]">
                <h1 className='text-[25px] md:text-[40px] font-black text-[#008631] mt-[20px] mb-[15px] pl-[10px]
                border-l-[5px] border-solid border-[#86888a] pl-[20px] mb-[20px]'>{d.pestName}</h1>

                <div className='w-[100%] flex flex-col md:flex-row text-[#86888a]'>
                    <div className='w-[100%] md:w-[50%]  flex justify-center items-center ml-[20px] shadow p-[30px]'>
                        <img src={d.pestImagePath} alt="Pest" className='w-[200px] h-[200px] md:w-[250px] md:h-[250px] rounded-[100px] md:rounded-[125px]'/>
                    </div>
                    <div className='w-[100%] md:w-[50%] md:h-[420px] flex items-center mt-[20px] md:mt-0 mb-[20px] md:mb-0 ml-[20px]'>
                        <p className='border-l-[5px] border-r-[0px] md:border-r-[5px] md:border-l-[0px] border-solid border-[#008631] pl-[20px] pr-0 md:pl-0 md:pr-[20px]'>
                            {d.pestDetails}
                        </p>
                    </div>
                </div>
            </div>

            <div id="damage" className="w-[85vw] md:w-[90vw] min-w-[300px] pt-[20px] pl-[20px] pr-[20px] pb-[20px] text-[#86888a]">
                <h1 className='text-[25px] md:text-[40px] font-black text-[#008631] mt-[20px] mb-[15px] pl-[10px]
                border-l-[5px] border-solid border-[#86888a] pl-[20px] mb-[20px]'>Nature Of Damage</h1>
                <div className='w-[100%] flex flex-col md:flex-row text-[#86888a]'>
                    <div className='w-[100%] md:w-[50%]  flex justify-center items-center ml-[20px]'>
                        <Carousel slides={slides}/>
                    </div>
                    <div className='w-[100%] md:w-[50%] md:h-[420px] flex items-center mt-[20px] md:mt-0 mb-[20px] md:mb-0 ml-[20px]'>
                        <p className='border-l-[5px] border-r-[0px] md:border-r-[5px] md:border-l-[0px] border-solid border-[#008631] pl-[20px] pr-0 md:pl-0 md:pr-[20px]'>
                            {d.damageDetails}
                        </p>
                    </div>
                </div>
            </div>

            <div id="control" className="w-[85vw] md:w-[90vw] min-w-[300px] pt-[20px] pl-[20px] pr-[20px] pb-[20px] text-[#86888a] mb-[60px]">
                <h1 className='text-[25px] md:text-[40px] font-black text-[#008631] mt-[20px] mb-[15px] pl-[10px]
                border-l-[5px] border-solid border-[#86888a] pl-[20px] mb-[20px]'>Control</h1>
                <p className='border-l-[5px] border-solid border-[#008631] pl-[20px] mb-[20px]'>
                    {d.control}
                </p>

                <p className='border-l-[5px] border-solid border-[#008631] pl-[20px] flex justify-start flex-col'>
                    <b>Racomended Pesticides</b>
                    <ul>
                        {
                        pesticideLinks.map((d)=>(
                            <u><li key={d.name} className="">
                            <a href={d.url}>{d.name}</a>
                            </li></u>
                        ))
                        }
                    </ul>
                </p>
            </div>
        </div>
        ))}
        <Contact Links={Links}/>
        <Footer/> 
    </div>
  )
}

export default Pest
