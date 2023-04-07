import React, { useRef, useState }  from 'react'
import Footer from './Footer';
import Sidebar from './Sidebar';

import "./Video.css"

function Video({url,likes , message ,shares,channel,description,song}) {
    const [play , setPlay] = useState(false);
    const videoRef = useRef(null);

    const handleClick = ()=>{
        if (play) {
            videoRef.current.pause();
            setPlay(false);
        }
        else{
            videoRef.current.play();
            setPlay(true);
        }
    }
  return (
    
    <div className='video'>
        {/* <h1>This is video compo</h1> */}

        {/* <video width="750" autoPlay height="500" controls >
      <source src="https://youtu.be/ktjafK4SgWM"  type="video/mp4"/>
     </video> */}

<video 
className='videoPlayer'
// autoPlay

src= {require(`./${url}.mp4`)}
loop
ref={videoRef}

onClick={handleClick}


></video>

<Footer channel={channel} description={description} song={song}/>
<Sidebar likes={likes} message={message} shares={shares} />
    </div>
  
  )
}

export default Video