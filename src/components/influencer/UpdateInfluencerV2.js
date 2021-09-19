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
          <Form.Group controlId="firstname">
            <Form.Label>first name</Form.Label>
            <Form.Control
              required
              type="string"
              name="firstname"
              value={influencer.firstname}
              placeholder="Enter firstname"
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
