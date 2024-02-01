import React,{useState,useEffect} from 'react'
import { Link } from 'react-router-dom';
import axios from 'axios';
function Home() {
    const [blog,setBlog]=useState([]);
    const getBlog=async()=>{
        console.log('binodlmaiche')
      const response=await axios.get('https://binodlamichhane.in/blog');
      setBlog(response.data.data);
    }
   
    useEffect(()=>{
        getBlog()
      },[])
  return (
    <div>
      HomePage

      {blog.map((item)=>(
        <div>{item.title}</div>
      ))}
      <div>
        <Link to="/contact">Clickme</Link>
      </div>
    </div>
  )
}

export default Home
