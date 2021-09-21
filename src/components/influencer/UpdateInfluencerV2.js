import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
// import Dropdown from 'react-bootstrap/Dropdown'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
// API request
import { influencerUpdateV2, influencerShow } from '../../api/influencer'

class UpdateInfluencerV2 extends Component {
  constructor (props) {
    super(props)
    this.state = {
      influencer: {
        firstname: '',
        done: false
      }
    }
  }

  componentDidMount () {
    // one of the automatic router props we get is the match object - that has data about the params in our front-end route url
    const { match, user } = this.props

    influencerShow(user, match.params.id)
      .then((res) => this.setState({ influencer: res.data.influencer }))
  }

handleChange = (event) => {
  const copiedInfluencer = Object.assign(this.state.influencer)
  copiedInfluencer[event.target.name] = event.target.value
  this.setState({ influencer: copiedInfluencer })
}

handleSubmit = (event) => {
  event.preventDefault()

  const { user, msgAlert, history, match, location } = this.props

  influencerUpdateV2(this.state.influencer, user, match.params.id)
    .then((res) => {
      console.log(location)
      console.log(user)
      history.push('/show-influencer/' + match.params.id)
    //   history.push('/')
    })
    .then(() =>
      msgAlert({
        heading: 'Influencer Updated Successfully',
        message: 'Nice work, go check out your updated influencer.',
        variant: 'success'
      })
    )
    .catch((err) => {
      msgAlert({
        heading: 'Influencer update failed :(',
        message: 'Something went wrong: ' + err.message,
        variant: 'danger'
      })
    })
}

render () {
  const { influencer } = this.state
  return (

    <div className="row">
      <div className="col-sm-10 col-md-8 mx-auto mt-5">
        <h3>Update Influencer</h3>
        <Form onSubmit={this.handleSubmit}>

          {/* first name */}
          <Form.Group controlId="firstname">
            <Form.Label>(required) first name</Form.Label>
            <Form.Control
              required
              type="string"
              name="firstname"
              value={influencer.firstname}
              placeholder="Enter firstname"
              onChange={this.handleChange}
            />
          </Form.Group>

          {/* last name */}
          <Form.Group controlId="lastname">
            <Form.Label>(required) last name</Form.Label>
            <Form.Control
              required
              type="string"
              name="lastname"
              value={influencer.lastname}
              placeholder="Enter last name"
              onChange={this.handleChange}
            />
          </Form.Group>

          {/* username */}
          <Form.Group controlId="username">
            <Form.Label>(required) username</Form.Label>
            <Form.Control
              required
              type="string"
              name="username"
              value={influencer.username}
              placeholder="Enter username"
              onChange={this.handleChange}
            />
          </Form.Group>

          {/* Profile Photo */}
          <Form.Group controlId="profilephoto">
            <Form.Label>Profile Photo</Form.Label>
            <Form.Control
              type="string"
              name="profilephoto"
              value={influencer.profilephoto}
              placeholder="Choose profilephoto"
              onChange={this.handleChange}
            />
          </Form.Group>

          {/* Country */}
          <Form.Group controlId="country">
            <Form.Label>Country</Form.Label>
            <Form.Control
              type="string"
              name="country"
              value={influencer.country}
              placeholder="Choose country"
              onChange={this.handleChange}
            />
          </Form.Group>

          {/* City */}
          <Form.Group controlId="city">
            <Form.Label>City</Form.Label>
            <Form.Control
              type="string"
              name="city"
              value={influencer.city}
              placeholder="Choose city"
              onChange={this.handleChange}
            />
          </Form.Group>

          {/* Youtube */}
          <Form.Group controlId="Youtube">
            <Form.Label>Youtube</Form.Label>
            <Form.Control
              type="string"
              name="youtube"
              value={influencer.youtube}
              placeholder="youtube"
              onChange={this.handleChange}
            />
          </Form.Group>

          {/* instagram */}
          <Form.Group controlId="instagram">
            <Form.Label>instagram</Form.Label>
            <Form.Control
              type="string"
              name="instagram"
              value={influencer.instagram}
              placeholder="instagram"
              onChange={this.handleChange}
            />
          </Form.Group>

          {/* twitter */}
          <Form.Group controlId="twitter">
            <Form.Label>twitter</Form.Label>
            <Form.Control
              type="string"
              name="twitter"
              value={influencer.twitter}
              placeholder="twitter"
              onChange={this.handleChange}
            />
          </Form.Group>

          {/* tiktok */}
          <Form.Group controlId="tiktok">
            <Form.Label>tiktok</Form.Label>
            <Form.Control
              type="string"
              name="tiktok"
              value={influencer.tiktok}
              placeholder="tiktok"
              onChange={this.handleChange}
            />
          </Form.Group>

          {/* twitch */}
          <Form.Group controlId="twitch">
            <Form.Label>twitch</Form.Label>
            <Form.Control
              type="string"
              name="twitch"
              value={influencer.twitch}
              placeholder="twitch"
              onChange={this.handleChange}
            />
          </Form.Group>

          {/* Youtube Audience Size */}
          <Form.Group controlId="youtubeaudiencesize">
            <Form.Label>youtube audience size</Form.Label>
            <Form.Control
              type="string"
              name="youtubeaudiencesize"
              value={influencer.youtubeaudiencesize}
              placeholder="youtubeaudiencesize"
              onChange={this.handleChange}
            />
          </Form.Group>

          {/* Instagram Audience Size */}
          <Form.Group controlId="instagramaudiencesize">
            <Form.Label>instagram audience size</Form.Label>
            <Form.Control
              type="string"
              name="instagramaudiencesize"
              value={influencer.instagramaudiencesize}
              placeholder="instagramaudiencesize"
              onChange={this.handleChange}
            />
          </Form.Group>

          {/* twitter Audience Size */}
          <Form.Group controlId="twitteraudiencesize">
            <Form.Label>twitter audience size</Form.Label>
            <Form.Control
              type="string"
              name="twitteraudiencesize"
              value={influencer.twitteraudiencesize}
              placeholder="twitteraudiencesize"
              onChange={this.handleChange}
            />
          </Form.Group>

          {/* TikTok Audience Size */}
          <Form.Group controlId="tiktokaudiencesize">
            <Form.Label>tiktok audience size</Form.Label>
            <Form.Control
              type="string"
              name="tiktokaudiencesize"
              value={influencer.tiktokaudiencesize}
              placeholder="tiktokaudiencesize"
              onChange={this.handleChange}
            />
          </Form.Group>

          {/* Twitch Audience Size */}
          <Form.Group controlId="twitchaudiencesize">
            <Form.Label>twitch audience size</Form.Label>
            <Form.Control
              type="string"
              name="twitchaudiencesize"
              value={influencer.twitchaudiencesize}
              placeholder="twitchaudiencesize"
              onChange={this.handleChange}
            />
          </Form.Group>

          {/* topics */}
          <Form.Group controlId="topics">
            <Form.Label>topics</Form.Label>
            <Form.Control
              type="string"
              name="topics"
              value={influencer.topics}
              placeholder="topics"
              onChange={this.handleChange}
            />
          </Form.Group>

          {/* tags */}
          <Form.Group controlId="tags">
            <Form.Label>tags</Form.Label>
            <Form.Control
              type="string"
              name="tags"
              value={influencer.tags}
              placeholder="tags"
              onChange={this.handleChange}
            />
          </Form.Group>

          {/* youtubeengagement */}
          <Form.Group controlId="youtubeengagement">
            <Form.Label>youtubeengagement</Form.Label>
            <Form.Control
              type="string"
              name="youtubeengagement"
              value={influencer.youtubeengagement}
              placeholder="youtubeengagement"
              onChange={this.handleChange}
            />
          </Form.Group>

          {/* instagramengagement */}
          <Form.Group controlId="instagramengagement">
            <Form.Label>instagramengagement</Form.Label>
            <Form.Control
              type="string"
              name="instagramengagement"
              value={influencer.instagramengagement}
              placeholder="instagramengagement"
              onChange={this.handleChange}
            />
          </Form.Group>

          {/* twitterengagement */}
          <Form.Group controlId="twitterengagement">
            <Form.Label>twitterengagement</Form.Label>
            <Form.Control
              type="string"
              name="twitterengagement"
              value={influencer.twitterengagement}
              placeholder="twitterengagement"
              onChange={this.handleChange}
            />
          </Form.Group>

          {/* tiktokengagement */}
          <Form.Group controlId="tiktokengagement">
            <Form.Label>tiktokengagement</Form.Label>
            <Form.Control
              type="string"
              name="tiktokengagement"
              value={influencer.tiktokengagement}
              placeholder="tiktokengagement"
              onChange={this.handleChange}
            />
          </Form.Group>

          {/* twitchengagement */}
          <Form.Group controlId="twitchengagement">
            <Form.Label>twitchengagement</Form.Label>
            <Form.Control
              type="string"
              name="twitchengagement"
              value={influencer.twitchengagement}
              placeholder="twitchengagement"
              onChange={this.handleChange}
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
}

export default withRouter(UpdateInfluencerV2)
