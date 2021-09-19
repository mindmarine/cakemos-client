import React, { useState, useEffect } from 'react'
import { withRouter, Link } from 'react-router-dom'
// import { withRouter } from 'react-router-dom'
import { Card, Col, Row } from 'react-bootstrap'

// import { signUp, signIn } from '../../api/auth'
// import { signUpSuccess, signUpFailure } from '../AutoDismissAlert/messages'

import Button from 'react-bootstrap/Button'

import { influencerIndex } from '../../api/influencer'

const cardImg = {
  margin: 'auto',
  padding: '25px',
  width: 'auto',
  height: '200px'
}

const cardCol = {
  margin: 'auto',
  marginTop: '10px'
}

const cardTitle = {
  height: '10px'
}

const cardBody = {
  backgroundColor: 'teal',
  // borderRadius: '0px 0px 8px 8px',
  color: '#FFF'
}

const card = {
  border: 'none'
  // borderRadius: '10px'
}

// import Form from 'react-bootstrap/Form'
// import Button from 'react-bootstrap/Button'

function ShowInfluencers (props) {
  // in order to be able to use the map method we need to set the state of influencers to an array from the beginning
  const [influencers, setInfluencers] = useState([])

  useEffect(() => {
    const { user } = props
    influencerIndex(user)
      .then((res) => setInfluencers(res.data.influencers))
      .catch(console.error)
  }, [])

  // useEffect(() => {
  //   const { user } = props
  //   deleteInfluencer(user)
  //     .then((res) => influencerIndex(res.data.influencers))
  //     .catch(console.error)
  // }, [])

  // const { user, msgAlert, history } = props
  // deleteInfluencer(user, influencerID)
  //   // Redirect to the influencers index
  //   .then(() => history.push('/show-influencers'))
  //   .then(() =>
  //     msgAlert({
  //       heading: 'Influencer Deleted Successfully',
  //       message: 'This influencer was removed',
  //       variant: 'success'
  //     })
  //   )
  //   .catch((err) =>
  //     msgAlert({
  //       heading: 'Influencer was not deleted',
  //       message: 'Something went wrong: ' + err.message,
  //       variant: 'danger'
  //     })
  //   )

  // const { user } = props

  const influencersList = influencers.map((influencer) => (
    <Col xs={12} md={6} lg={4} xl={4} key={influencer._id} style={cardCol}>
      <Card style={card} className='m-auto'>
        <Link to={`/show-influencer/${influencer._id}`}>
          <Card.Body style={cardBody}>
            <Card.Img variant='top' src={`${influencer.profilephoto}`} style={cardImg} />
            <Card.Title style={cardTitle}>{influencer.username}</Card.Title>
            {/* <Card.Text>username: {influencer.firstname}</Card.Text>
            <Card.Text>username: {influencer.username}</Card.Text> */}
            <Card.Text>
              {`Name: ${influencer.firstname} ${influencer.username}`}
            </Card.Text>
            <Card.Text>username: {influencer.username}</Card.Text>
          </Card.Body>
        </Link>
        {/* Update Button */}
        <Button>
          <Link to={{ pathname: `/update-influencer/${influencer._id}/editv2` }} style={{ color: '#FFF', textDecoration: 'none' }}>Update v2
          </Link>
        </Button>
        {/* Delete Button */}
        {/* <Button variant='danger' onClick={deleteInfluencer()}>Delete Influencer</Button> */}

      </Card>
    </Col>
  ))

  return (
    <React.Fragment>
      <h1>Hello World</h1>
      {/* <li>{influencersList}</li> */}
      <Row>
        <h3 className='text-light'>Influencers</h3>
        <Col xs={12} style={{ marginTop: '10px' }}>
          <Row>{influencersList}</Row>
        </Col>

        <div className='col-12 mt-5'></div>
      </Row>
    </React.Fragment>
  )
}

export default withRouter(ShowInfluencers)
