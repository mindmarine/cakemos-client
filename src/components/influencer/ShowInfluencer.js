import React, { useState, useEffect } from 'react'
import { withRouter, Link } from 'react-router-dom'
// import { withRouter } from 'react-router-dom'

// import { signUp, signIn } from '../../api/auth'
// import { signUpSuccess, signUpFailure } from '../AutoDismissAlert/messages'

import { influencerShow } from '../../api/influencer'

// import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

function ShowInfluencers (props) {
  const [firstname, setFirstname] = useState(' ')
  //   const [lastname, setLastname] = useState(' ')
  //   const [username, setUsername] = useState(' ')
  //   const [profilephoto, setProfilephoto] = useState(' ')
  //   const [country, setCountry] = useState(' ')
  //   const [city, setCity] = useState(' ')
  //   const [youtube, setYoutube] = useState(' ')
  //   const [instagram, setInstagram] = useState(' ')
  //   const [twitter, setTwitter] = useState(' ')
  //   const [tiktok, setTiktok] = useState(' ')
  //   const [twitch, setTwitch] = useState(' ')
  //   const [youtubeaudiencesize, setYoutubeaudiencesize] = useState(' ')
  //   const [instagramaudiencesize, setInstagramaudiencesize] = useState(' ')
  //   const [twitteraudiencesize, setTwitteraudiencesize] = useState(' ')
  //   const [tiktokaudiencesize, setTiktokaudiencesize] = useState(' ')
  //   const [twitchaudiencesize, setTwitchaudiencesize] = useState(' ')
  //   const [topics, setTopics] = useState(' ')
  //   const [tags, setTags] = useState(' ')
  //   const [youtubeengagement, setYoutubeengagement] = useState(' ')
  //   const [instagramengagement, setInstagramengagement] = useState(' ')
  //   const [twitterengagement, setTwitterengagement] = useState(' ')
  //   const [tiktokengagement, setTiktokengagement] = useState(' ')
  //   const [twitchengagement, setTwitchengagement] = useState(' ')

  useEffect(() => {
    const { match, user } = props
    influencerShow(user, match.params.id)
      .then((res) => setFirstname(res.data.influencer.firstname))
      .catch(console.error)
  }, [])

  // console.log('Influencer is', typeof (influencer), influencer)

  const { match } = props

  return (
    <React.Fragment>
      <h1>Hello Influencers</h1>
      {/* <p> {influencer}</p> */}
      <p>{firstname}</p>

      {/* delete influencer */}

      {/* <Button onClick={deleteInfluencer()} variant="primary" type="submit">
            Delete Influencer
      </Button> */}

      {/* <Button>
        <Link to={{ pathname: `/update-influencer/${match.params.id}/edit` }} style={{ color: '#FFF', textDecoration: 'none' }}>Update Now
        </Link>
      </Button> */}

      <Button>
        <Link to={{ pathname: `/update-influencer/${match.params.id}/editv2` }} style={{ color: '#FFF', textDecoration: 'none' }}>Update v2
        </Link>
      </Button>

    </React.Fragment>
  )
}

export default withRouter(ShowInfluencers)
