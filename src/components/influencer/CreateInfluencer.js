import React, { useState } from 'react'
import { withRouter } from 'react-router-dom'

// import { signIn } from '../../api/auth'
// import { signInSuccess, signInFailure } from '../AutoDismissAlert/messages'

// Influencer specific imports
import { createInfluencer } from '../../api/influencer'
import { createInfluenceSuccess, createInfluencerFailure } from '../AutoDismissAlert/messages'

import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

function CreateInfluencer (props) {
//   const [email, setEmail] = useState('')
//   const [password, setPassword] = useState('')
// influencer variables
  const [firstname, setFirstname] = useState('')
  const [lastname, setLastname] = useState('')
  const [username, setUsername] = useState('')
  const [profilephoto, setProfilephoto] = useState('')
  // const [country, setCountry] = useState('')
  // const [city, setCity] = useState('')
  // const [youtube, setYoutube] = useState('')
  // const [instagram, setInstagram] = useState('')
  // const [twitter, setTwitter] = useState('')
  // const [tiktok, setTiktok] = useState('')
  // const [twitch, setTwitch] = useState('')
  // const [youtubeaudiencesize, setYoutubeaudiencesize] = useState('')
  // const [instagramaudiencesize, setInstagramaudiencesize] = useState('')
  // const [twitteraudiencesize, setTwitteraudiencesize] = useState('')
  // const [tiktokaudiencesize, setTiktokaudiencesize] = useState('')
  // const [twitchaudiencesize, setTwitchaudiencesize] = useState('')
  // const [topics, setTopics] = useState('')
  // const [tags, setTags] = useState('')
  // const [youtubeengagement, setYoutubeengagement] = useState('')
  // const [instagramengagement, setInstagramengagement] = useState('')
  // const [twitterengagement, setTwitterengagement] = useState('')
  // const [tiktokengagement, setTiktokengagement] = useState('')
  // const [twitchengagement, setTwitchengagement] = useState('')

  const onCreateInfluencer = (e) => {
    e.preventDefault()
    const { msgAlert, history, user } = props
    const data = {
      firstname,
      lastname,
      username,
      profilephoto
      // country,
      // city,
      // youtube,
      // instagram,
      // twitter,
      // tiktok,
      // twitch,
      // youtubeaudiencesize,
      // instagramaudiencesize,
      // twitteraudiencesize,
      // tiktokaudiencesize,
      // twitchaudiencesize,
      // topics,
      // tags,
      // youtubeengagement,
      // instagramengagement,
      // twitterengagement,
      // tiktokengagement,
      // twitchengagement
    }
    createInfluencer(data, user)
    //   .then((res) => {
    //     setUser(res.data.user)
    //   })
      .then(() => {
        msgAlert({
          heading: 'The influencer was added successfully',
          message: createInfluenceSuccess,
          variant: 'success'
        })
      })
      .then(() => {
        history.push('/')
      })
      .catch((error) => {
        setFirstname('')
        msgAlert({
          heading: 'Adding the influencer Failed with error: ' + error.message,
          message: createInfluencerFailure,
          variant: 'danger'
        })
      })
  }

  return (
    <div className="row">
      <div className="col-sm-10 col-md-8 mx-auto mt-5">
        <h3>Create Influencer</h3>
        <Form onSubmit={onCreateInfluencer}>

          {/* first name */}
          <Form.Group controlId="firstname">
            <Form.Label>first name</Form.Label>
            <Form.Control
              required
              type="string"
              name="firstname"
              value={firstname}
              placeholder="Enter firstname"
              onChange={(e) => {
                setFirstname(e.target.value)
              }}
            />
          </Form.Group>

          {/* last name */}
          <Form.Group controlId="lastname">
            <Form.Label>last name</Form.Label>
            <Form.Control
              required
              type="string"
              name="lastname"
              value={lastname}
              placeholder="Enter last name"
              onChange={(e) => {
                setLastname(e.target.value)
              }}
            />
          </Form.Group>

          {/* username */}
          <Form.Group controlId="username">
            <Form.Label>last name</Form.Label>
            <Form.Control
              required
              type="string"
              name="username"
              value={username}
              placeholder="Enter username"
              onChange={(e) => {
                setUsername(e.target.value)
              }}
            />
          </Form.Group>

          {/* Profile Photo */}
          <Form.Group controlId="profilephoto">
            <Form.Label>Profile Photo</Form.Label>
            <Form.Control
              required
              type="string"
              name="profilephoto"
              value={username}
              placeholder="Choose profilephoto"
              onChange={(e) => {
                setProfilephoto(e.target.value)
              }}
            />
          </Form.Group>

          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </div>
    </div>
  )
}

export default withRouter(CreateInfluencer)
