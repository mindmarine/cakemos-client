import React, { useState, useEffect } from 'react'
import { withRouter, Link } from 'react-router-dom'
// import { withRouter } from 'react-router-dom'

// import { signUp, signIn } from '../../api/auth'
// import { signUpSuccess, signUpFailure } from '../AutoDismissAlert/messages'

import { influencerShow } from '../../api/influencer'

// import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Table from 'react-bootstrap/Table'

import { Card } from 'react-bootstrap'

import { YoutubeOutlined, InstagramOutlined, TwitterOutlined } from '@ant-design/icons'

import cakemosprofile2 from '../../images/cakemosprofile2.png'

const cardImg = {
  margin: 'auto',
  padding: '5px',
  width: '300px',
  height: '300px'
}

const divMng = {
  width: 'auto',
  height: '400px'
}

function ShowInfluencers (props) {
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

  useEffect(() => {
    const { match, user } = props
    influencerShow(user, match.params.id)
      .then((res) => {
        setFirstname(res.data.influencer.firstname)
        setLastname(res.data.influencer.lastname)
        setUsername(res.data.influencer.username)
        setProfilephoto(res.data.influencer.profilephoto)
        setCountry(res.data.influencer.country)
        setCity(res.data.influencer.city)
        setYoutube(res.data.influencer.youtube)
        setInstagram(res.data.influencer.instagram)
        setTwitter(res.data.influencer.twitter)
        setTiktok(res.data.influencer.tiktok)
        setTwitch(res.data.influencer.twitch)
        setYoutubeAudienceSize(res.data.influencer.youtubeaudiencesize)
        setInstagramAudienceSize(res.data.influencer.instagramaudiencesize)
        setTwitterAudienceSize(res.data.influencer.twitteraudiencesize)
        setTiktokAudienceSize(res.data.influencer.tiktokaudiencesize)
        setTwitchAudienceSize(res.data.influencer.twitchaudiencesize)
        setTopics(res.data.influencer.topics)
        setTags(res.data.influencer.tags)
        setYoutubeEngagement(res.data.influencer.youtubeengagement)
        setInstagramEngagement(res.data.influencer.instagramengagement)
        setTwitterEngagement(res.data.influencer.twitterengagement)
        setTiktokEngagement(res.data.influencer.tiktokengagement)
        setTwitchEngagement(res.data.influencer.twitchengagement)
      })
      .catch(console.error)
  }, [])

  // console.log('Influencer is', typeof (influencer), influencer)

  const { match } = props

  return (
    <React.Fragment>
      <h1>Influencer details</h1>
      {/* <p> {influencer}</p> */}
      <div className="rowC">
        <div style={divMng}>
          <p></p>
          <p>Username: {username}</p>
          <p>{`Name: ${firstname} ${lastname}`}</p>
          {/* <p>Photo: {profilephoto}</p> */}
          <p>Instagram: {instagram}</p>
          <p>{profilephoto}</p>
          <p>Country: {country}</p>
          <p>City: {city}</p>
          <p>Topics: {topics}</p>
          <p>Tags: {tags}</p>
        </div>
        <div>
          <Card.Img className="photo" variant='top' src={cakemosprofile2} style={cardImg}/>
        </div>
      </div>

      {/* <p><YoutubeOutlined /> {youtube}</p>
      <p><InstagramOutlined/> {instagram}</p>
      <p><TwitterOutlined /> {twitter}</p>
      <p>{tiktok}</p>
      <p>{twitch}</p>
      <p>{youtubeaudiencesize}</p>
      <p>{instagramaudiencesize}</p>
      <p>{twitteraudiencesize}</p>
      <p>{tiktokaudiencesize}</p>
      <p>{twitchaudiencesize}</p>
      <p>{youtubeengagement}</p>
      <p>{instagramengagement}</p>
      <p>{twitterengagement}</p>
      <p>{tiktokengagement}</p>
      <p>{twitchengagement}</p> */}

      <Table striped bordered hover variant="primary">
        <thead>
          <tr>
            <th>platform</th>
            <th>@username</th>
            <th>audience size</th>
            <th>audience engagement</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><YoutubeOutlined /> </td>
            <td>{youtube}</td>
            <td>{youtubeaudiencesize}</td>
            <td>{youtubeengagement}</td>
          </tr>
          <tr>
            <td><InstagramOutlined/></td>
            <td>{instagram}</td>
            <td>{instagramaudiencesize}</td>
            <td>{instagramengagement}</td>
          </tr>
          <tr>
            <td><TwitterOutlined /></td>
            <td>{twitter}</td>
            <td>{twitteraudiencesize}</td>
            <td>{twitterengagement}</td>
          </tr>
          <tr>
            <td>TikTok</td>
            <td>{tiktok}</td>
            <td>{tiktokaudiencesize}</td>
            <td>{tiktokengagement}</td>
          </tr>
          <tr>
            <td>Twitch</td>
            <td>{twitch}</td>
            <td>{twitchaudiencesize}</td>
            <td>{twitchengagement}</td>
          </tr>
        </tbody>
      </Table>

      {/* delete influencer */}

      {/* <Button onClick={deleteInfluencer()} variant="primary" type="submit">
            Delete Influencer
      </Button> */}

      {/* <Button>
        <Link to={{ pathname: `/update-influencer/${match.params.id}/edit` }} style={{ color: '#FFF', textDecoration: 'none' }}>Update Now
        </Link>
      </Button> */}

      <Button>
        <Link to={{ pathname: `/update-influencer/${match.params.id}/editv2` }} style={{ color: '#FFF', textDecoration: 'none' }}>Update
        </Link>
      </Button>

    </React.Fragment>
  )
}

export default withRouter(ShowInfluencers)
