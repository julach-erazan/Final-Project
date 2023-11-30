import React, {useEffect, useState} from 'react';
import {useParams } from 'react-router-dom';
import axios from 'axios';

const Pest = () => {
    const {pestName} = useParams();
    const [val, setVal] = useState([]);

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
  return (
    <div>
      
    </div>
  )
}

export default Pest
