import React, { useState } from 'react'
import "./Sidebar.css"
import FavoriteIcon from '@mui/icons-material/Favorite';
import MessageIcon from '@mui/icons-material/Message';
import ShareIcon from '@mui/icons-material/Share';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
function Sidebar({likes , message ,shares}) {
  const [liked,setLiked] = useState(false);
  return (
    <div className='sideBar'>
      <div className='sidebarButton'>
{liked ? (
  
    <FavoriteIcon  fontSize='large'
    onClick = {(e)=> setLiked(false)}
    />

   
 ) :

 (
    <FavoriteBorderIcon  fontSize='large'
    onClick = {(e)=> setLiked(true)}
    />
 )

}
<p>{liked ? likes+1 : likes}</p>
</div>

   <div className='sidebarButton'>
    <MessageIcon  fontSize='large'/>
    <p>{message}</p>
   </div>

   <div className='sidebarButton'>
    <ShareIcon  fontSize='large'/>
    <p>{shares}</p>
   </div>

    </div>
  )
}   

export default Sidebar