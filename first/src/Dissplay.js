
import { useState,useEffect } from 'react';
import axios from 'axios';
import StuDisplay from './StuDisplay';
const Dissplay = () => {
  const [studata,setstuData]=useState([]);


const loadData=()=>
{
  axios.get("http://localhost:5000/studisplay").then((res)=>{

    setstuData(res.data);

  });
}
useEffect(()=>{
  loadData();
},[])

const myData = studata.map((key)=>
  <StuDisplay  
  rno={key.email} 
  nm={key.password}
  ct={key.city}
  />);

  return (
    <div>
      <h1>Display Student Records</h1>
      <table className='make'>
        <tr>
          <td>email</td>
          <td>password</td>
          <td>City</td>

        </tr>
        {myData}
      </table>

      
    </div>
  )
}

export default Dissplay;
