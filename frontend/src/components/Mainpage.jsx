import React, { useState, useEffect } from 'react';
import axios from "axios";
import {useNavigate} from 'react-router-dom'
import Post from './Post';
export default function Main() {
  const [listOfPosts, setList] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3001/posts').then((response) => {
      setList(response.data);
    });
  }, []);
  let navigate= useNavigate();
  return (
    <div className="parent-container">
      <div className="container">
        {listOfPosts.map((value, key) => (
          <div className="parentBook" onClick={()=>{
            navigate(`/Post/${value.id}`)
          }}>
          <div key={key} className="book">
            <p>{value.Description}</p>
            <div className="cover">
              <p>{value.title} by {value.username}</p>
            </div>
          </div>
          </div>
        ))}
      </div>
    </div>
  );
}
