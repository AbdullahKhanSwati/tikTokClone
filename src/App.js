import React ,{useState} from 'react';
import './App.css';
import Video from "./Video"
import { useEffect } from 'react';
import axios from './Axios';

  function App() {
const [data,setData] = useState([]);




useEffect(()=>{


  async function getData(){
    // const url = `http://localhost:4500/std`;
    // const response = await fetch(url,{method: "GET"});
    // const obj = await response.json();
  
    const res = await axios.get("/std");
     setData(res.data);
    //  console.log(obj)
     return res;
    // return obj;
    }
    
    getData();
    
    
  },[])
  console.log(data);

 

    


 

  return (
    <div className="App">
      {/* <h1>Hello this is tik tok clone</h1.> */}
      <div className='appVideos'>
      {
        data.map(({url,likes , message ,shares,channel,description,song})=>(
         
          <Video
          url={url}
          likes={likes}
          message={message}
          description={description}
          channel={channel}
          shares={shares}
          song={song}
          />
        ))
      }
      
       {/* <Video url={'v1'} like={250} message={110} share={89} desc={"shoot in comsats university"} title={"Abdullah_Khan206"} song={"Attitude drama dialogue"} />


       <Video url={'mv2'} like={480} message={210} share={110} desc={"Enjoying weather in university"} song={"Batton py teri hasda revan"}  title={"Abdullah110"} /> */}
       </div>
    </div>
  );
}

export default App;
