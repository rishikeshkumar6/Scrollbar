import logo from './logo.svg';
import './App.css';
import {useState,useEffect} from 'react'
import { Slider } from './components/Molecules/wrapper';
import axios from 'axios';

function App() {
  const [data,setdata]=useState([])
  

  useEffect(()=>{
    async function userData(){
      const response=await axios.get("https://reqres.in/api/users/")
     setdata(response.data.data)
    }
    userData()
  },[])
  return (
    <div>
     <Slider user={data}/>
    
    </div>

  );
}

export default App;
