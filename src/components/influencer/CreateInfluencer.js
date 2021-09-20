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
  const [country, setCountry] = useState('')
  const [city, setCity] = useState('')
  const [youtube, setYoutube] = useState('')
  const [instagram, setInstagram] = useState('')
  const [twitter, setTwitter] = useState('')
  const [tiktok, setTiktok] = useState('')
  const [twitch, setTwitch] = useState('')
  const [youtubeaudiencesize, setYoutubeAudienceSize] = useState('')
  const [instagramaudiencesize, setInstagramAudienceSize] = useState('')
  const [twitteraudiencesize, setTwitterAudienceSize] = useState('')
  const [tiktokaudiencesize, setTiktokAudienceSize] = useState('')
  const [twitchaudiencesize, setTwitchAudienceSize] = useState('')
  const [topics, setTopics] = useState('')
  const [tags, setTags] = useState('')
  const [youtubeengagement, setYoutubeEngagement] = useState('')
  const [instagramengagement, setInstagramEngagement] = useState('')
  const [twitterengagement, setTwitterEngagement] = useState('')
  const [tiktokengagement, setTiktokEngagement] = useState('')
  const [twitchengagement, setTwitchEngagement] = useState('')

  const onCreateInfluencer = (e) => {
    e.preventDefault()
    const { msgAlert, history, user } = props
    const data = {
      firstname,
      lastname,
      username,
      profilephoto,
      country,
      city,
      youtube,
      instagram,
      twitter,
      tiktok,
      twitch,
      youtubeaudiencesize,
      instagramaudiencesize,
      twitteraudiencesize,
      tiktokaudiencesize,
      twitchaudiencesize,
      topics,
      tags,
      youtubeengagement,
      instagramengagement,
      twitterengagement,
      tiktokengagement,
      twitchengagement
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
            <Form.Label>(required) first name</Form.Label>
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
            <Form.Label>(required) last name</Form.Label>
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
            <Form.Label>(required) username</Form.Label>
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
              type="string"
              name="profilephoto"
              value={profilephoto}
              placeholder="Choose profilephoto"
              onChange={(e) => {
                setProfilephoto(e.target.value)
              }}
            />
          </Form.Group>

          {/* Country */}
          <Form.Group controlId="country">
            <Form.Label>Country</Form.Label>
            <Form.Control
              type="string"
              name="country"
              value={country}
              placeholder="Choose country"
              onChange={(e) => {
                setCountry(e.target.value)
              }}
            />
          </Form.Group>

          {/* City */}
          <Form.Group controlId="city">
            <Form.Label>City</Form.Label>
            <Form.Control
              type="string"
              name="city"
              value={city}
              placeholder="Choose city"
              onChange={(e) => {
                setCity(e.target.value)
              }}
            />
          </Form.Group>

          {/* Youtube */}
          <Form.Group controlId="Youtube">
            <Form.Label>Youtube</Form.Label>
            <Form.Control
              type="string"
              name="youtube"
              value={youtube}
              placeholder="youtube"
              onChange={(e) => {
                setYoutube(e.target.value)
              }}
            />
          </Form.Group>

          {/* instagram */}
          <Form.Group controlId="instagram">
            <Form.Label>instagram</Form.Label>
            <Form.Control
              type="string"
              name="instagram"
              value={instagram}
              placeholder="instagram"
              onChange={(e) => {
                setInstagram(e.target.value)
              }}
            />
          </Form.Group>

          {/* twitter */}
          <Form.Group controlId="twitter">
            <Form.Label>twitter</Form.Label>
            <Form.Control
              type="string"
              name="twitter"
              value={twitter}
              placeholder="twitter"
              onChange={(e) => {
                setTwitter(e.target.value)
              }}
            />
          </Form.Group>

          {/* tiktok */}
          <Form.Group controlId="tiktok">
            <Form.Label>tiktok</Form.Label>
            <Form.Control
              type="string"
              name="tiktok"
              value={tiktok}
              placeholder="tiktok"
              onChange={(e) => {
                setTiktok(e.target.value)
              }}
            />
          </Form.Group>

          {/* twitch */}
          <Form.Group controlId="twitch">
            <Form.Label>twitch</Form.Label>
            <Form.Control
              type="string"
              name="twitch"
              value={twitch}
              placeholder="twitch"
              onChange={(e) => {
                setTwitch(e.target.value)
              }}
            />
          </Form.Group>

          {/* Youtube Audience Size */}
          <Form.Group controlId="youtubeaudiencesize">
            <Form.Label>youtube audience size</Form.Label>
            <Form.Control
              type="string"
              name="youtubeaudiencesize"
              value={youtubeaudiencesize}
              placeholder="youtubeaudiencesize"
              onChange={(e) => {
                setYoutubeAudienceSize(e.target.value)
              }}
            />
          </Form.Group>

          {/* Instagram Audience Size */}
          <Form.Group controlId="instagramaudiencesize">
            <Form.Label>instagram audience size</Form.Label>
            <Form.Control
              type="string"
              name="instagramaudiencesize"
              value={instagramaudiencesize}
              placeholder="instagramaudiencesize"
              onChange={(e) => {
                setInstagramAudienceSize(e.target.value)
              }}
            />
          </Form.Group>

          {/* twitter Audience Size */}
          <Form.Group controlId="twitteraudiencesize">
            <Form.Label>twitter audience size</Form.Label>
            <Form.Control
              type="string"
              name="twitteraudiencesize"
              value={twitteraudiencesize}
              placeholder="twitteraudiencesize"
              onChange={(e) => {
                setTwitterAudienceSize(e.target.value)
              }}
            />
          </Form.Group>

          {/* TikTok Audience Size */}
          <Form.Group controlId="tiktokaudiencesize">
            <Form.Label>tiktok audience size</Form.Label>
            <Form.Control
              type="string"
              name="tiktokaudiencesize"
              value={tiktokaudiencesize}
              placeholder="tiktokaudiencesize"
              onChange={(e) => {
                setTiktokAudienceSize(e.target.value)
              }}
            />
          </Form.Group>

          {/* Twitch Audience Size */}
          <Form.Group controlId="twitchaudiencesize">
            <Form.Label>twitch audience size</Form.Label>
            <Form.Control
              type="string"
              name="twitchaudiencesize"
              value={twitchaudiencesize}
              placeholder="twitchaudiencesize"
              onChange={(e) => {
                setTwitchAudienceSize(e.target.value)
              }}
            />
          </Form.Group>

          {/* topics */}
          <Form.Group controlId="topics">
            <Form.Label>topics</Form.Label>
            <Form.Control
              type="string"
              name="topics"
              value={topics}
              placeholder="topics"
              onChange={(e) => {
                setTopics(e.target.value)
              }}
            />
          </Form.Group>

          {/* tags */}
          <Form.Group controlId="tags">
            <Form.Label>tags</Form.Label>
            <Form.Control
              type="string"
              name="tags"
              value={tags}
              placeholder="tags"
              onChange={(e) => {
                setTags(e.target.value)
              }}
            />
          </Form.Group>

          {/* youtubeengagement */}
          <Form.Group controlId="youtubeengagement">
            <Form.Label>youtubeengagement</Form.Label>
            <Form.Control
              type="string"
              name="youtubeengagement"
              value={youtubeengagement}
              placeholder="youtubeengagement"
              onChange={(e) => {
                setYoutubeEngagement(e.target.value)
              }}
            />
          </Form.Group>

          {/* instagramengagement */}
          <Form.Group controlId="instagramengagement">
            <Form.Label>instagramengagement</Form.Label>
            <Form.Control
              type="string"
              name="instagramengagement"
              value={instagramengagement}
              placeholder="instagramengagement"
              onChange={(e) => {
                setInstagramEngagement(e.target.value)
              }}
            />
          </Form.Group>

          {/* twitterengagement */}
          <Form.Group controlId="twitterengagement">
            <Form.Label>twitterengagement</Form.Label>
            <Form.Control
              type="string"
              name="twitterengagement"
              value={twitterengagement}
              placeholder="twitterengagement"
              onChange={(e) => {
                setTwitterEngagement(e.target.value)
              }}
            />
          </Form.Group>

          {/* tiktokengagement */}
          <Form.Group controlId="tiktokengagement">
            <Form.Label>tiktokengagement</Form.Label>
            <Form.Control
              type="string"
              name="tiktokengagement"
              value={tiktokengagement}
              placeholder="tiktokengagement"
              onChange={(e) => {
                setTiktokEngagement(e.target.value)
              }}
            />
          </Form.Group>

          {/* twitchengagement */}
          <Form.Group controlId="twitchengagement">
            <Form.Label>twitchengagement</Form.Label>
            <Form.Control
              type="string"
              name="twitchengagement"
              value={twitchengagement}
              placeholder="twitchengagement"
              onChange={(e) => {
                setTwitchEngagement(e.target.value)
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
