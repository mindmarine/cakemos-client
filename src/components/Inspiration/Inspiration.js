import React from 'react'

// import Image from 'react-bootstrap/Image'
import emmaraducanu1 from '../../images/emmaraducanu1.jpeg'
import emmaraducanu2 from '../../images/emmaraducanu2.jpeg'
import emmaraducanu3 from '../../images/emmaraducanu3.jpeg'
import emmaraducanu4 from '../../images/emmaraducanu4.jpeg'
//
import chess1 from '../../images/chess1.jpeg'
import chess2 from '../../images/chess2.png'
import chess3 from '../../images/chess3.jpeg'
//
import hikaru1 from '../../images/hikaru1.jpeg'
import hikaru2 from '../../images/hikaru2.jpeg'
//
import carlsen1 from '../../images/carlsen1.jpeg'

function Inspiration () {
  return (
    <>
      <div className="video-wrapper">

        <h1>cakemos Inspiration</h1>
        <h1>Emma Răducanu</h1>
        <p></p>
        <img src={emmaraducanu3} style={{ width: '600px', marginLeft: '10px', marginTop: '0' }}/>
        <img src={emmaraducanu1} style={{ width: '600px', marginLeft: '10px', marginTop: '0' }}/>
        <img src={emmaraducanu2} style={{ width: '600px', marginLeft: '10px', marginTop: '0' }}/>
        <img src={emmaraducanu4} style={{ width: '600px', marginLeft: '10px', marginTop: '0' }}/>
        {/*  */}
        <h1>guess who?</h1>
        <img src={chess1} style={{ width: '600px', marginLeft: '10px', marginTop: '0' }}/>
        <img src={chess2} style={{ width: '600px', marginLeft: '10px', marginTop: '0' }}/>
        <img src={chess3} style={{ width: '600px', marginLeft: '10px', marginTop: '0' }}/>
        {/*  */}
        <h1>Hikaru</h1>
        <img src={hikaru1} style={{ width: '600px', marginLeft: '10px', marginTop: '0' }}/>
        <img src={hikaru2} style={{ width: '600px', marginLeft: '10px', marginTop: '0' }}/>
        {/* */}
        <h1>Carlsen</h1>
        <img src={carlsen1} style={{ width: '600px', marginLeft: '10px', marginTop: '0' }}/>
        {/*  */}
        <p></p>

      </div>

    </>

  )
}

export default Inspiration
