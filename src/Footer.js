import React from 'react'
import "./Footer.css"
import MusicNoteIcon from '@mui/icons-material/MusicNote';
import Ticker from "react-ticker"


function Footer({channel,description,song}) {
  return (
    <div className='footer'>
        <div className='footerText'>
<h3>@{channel}</h3>


<p>#{description}</p>


<div className='videoFooter'>
<MusicNoteIcon

className='musicIcon' />

<Ticker 
mode = "smooth"
className="ticker">
{({ index }) => (
            <>
                <p>{song} </p>
                

                
            </>
        )}

</Ticker>

</div>
</div>
<img 
className='cdImg'
src='https://static.thenounproject.com/png/934821-200.png'
alt=''
/>
    </div>
  )
}

export default Footer