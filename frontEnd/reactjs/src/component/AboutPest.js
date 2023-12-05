import axios from 'axios';
import React, { useEffect, useState } from 'react'

const AboutPest = (props) => {
    const pestName = props.pestName;
    const [pestData, setPestData]  = useState([]);
    const [pesticideLinks, setPesticideLinks] = useState([]);
    
    useEffect(()=>{
        axios.get('http://localhost:8081/pest/'+pestName)
    .then(res => {
        console.log(res.data)
        setPestData(res.data)
    })
    .catch(err => console.log(err));
    }, [])

    useEffect(()=>{
        if(pestName === "Brown Plant Hopper"){

            let PesticideLinks = [
                {name:"Admire",url:"http://localhost:3000/readmore/Admire"},
                {name:"Admire",url:"http://localhost:3000/readmore/Admire"},
                {name:"Admire",url:"http://localhost:3000/readmore/Admire"},
              ]
            setPesticideLinks(PesticideLinks);
        }else if(pestName === "Rice Gall Midge"){

            let PesticideLinks = [
                {name:"Provado",url:"http://localhost:3000/readmore/Provado"},
                {name:"Provado",url:"http://localhost:3000/readmore/Provado"},
                {name:"Provado",url:"http://localhost:3000/readmore/Provado"},
              ]
            setPesticideLinks(PesticideLinks);
        }
    },[pestName])

  return (
    <div>
      {pestData.map((d,i) => (
        <div key={i}>
            <div className='mt-[10px]' >
                {d.pestDetails}
            </div>

            <div className='mt-[10px]' >
                <p className='mt-[8px] mb-[8px]'><b>Recommended Pesticides</b></p>
            <div className='mt-[10px] w-[100%] pl-[15px]'>
                {
                pesticideLinks.map((d)=>(
                    <u><li key={d.name}>
                        <a href={d.url}>{d.name}</a>
                    </li></u>
                ))
                }
            </div>
            </div>
            
        </div>
      ))}
    </div>
  )
}

export default AboutPest
