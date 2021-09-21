import React from 'react'
import ReactPlayer from 'react-player'
import './Homepage.scss'

function HomePageVideo () {
  return (
    <>
      <div className="video-wrapper">

        <h1>Influencer marketing a $10bn industry?</h1>
        <h5>How Influencers have transformed modern marketing</h5>
        <ReactPlayer
          url="https://youtu.be/gbbEXnRG9d8?t=104"
          className="react-player"
          playing
          width="100%"
          height="80%"
        // controls={false}
        />
      </div>

      {/* <div className="video-wrapper">
        <h5>How Influencers have transformed modern marketing</h5>
        <ReactPlayer
          url="https://www.youtube.com/watch?v=jZx15RvhFkE"
          className="react-player"
          playing
          width="100%"
          height="80%"
        // controls={false}
        />
      </div> */}
    </>

  //   <h5>Art of Influence Marketing - Influencer Can Also Be Your Follower</h5>
  //   <ReactPlayer
  //     url="https://www.youtube.com/watch?v=yj77Gu0jPeg"
  //   />

  )
}

export default HomePageVideo
