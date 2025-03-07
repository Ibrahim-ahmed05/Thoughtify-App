import React from 'react'
import {useParams} from 'react-router-dom';
import { useEffect,useState } from 'react';
import axios from 'axios';
export default function Post() {
    const [value,setvalue]=useState();
    let {id}= useParams();
    useEffect(()=>{
        axios.get(`http://localhost:3001/posts/byId/${id}`).then((response) => {
        setvalue(response.data);
    })})
  return (
    <div>
        {/* <div key={key} className="book">
            <p>{value.Description}</p>
            <div className="cover">
              <p>{value.title} by {value.username}</p>
            </div>
            </div> */}
            <h1>{value.title}</h1>
    </div>
  )
}
