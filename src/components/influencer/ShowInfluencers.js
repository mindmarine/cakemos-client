import React, { useState, useEffect } from 'react'
import { withRouter, Link } from 'react-router-dom'
// import { withRouter } from 'react-router-dom'
import { Card, Col, Row } from 'react-bootstrap'

// import { signUp, signIn } from '../../api/auth'
// import { signUpSuccess, signUpFailure } from '../AutoDismissAlert/messages'

import Button from 'react-bootstrap/Button'

import { influencerIndex, deleteInfluencer } from '../../api/influencer'
import cakemosprofile2 from '../../images/cakemosprofile2.png'

const cardImg = {
  margin: 'auto',
  padding: '5px',
  width: 'auto',
  height: '100px'
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
  // const [refreshinfluencers, setRefreshInfluencers] = useState(false)
  const [deletedinfluencer, setDeletedInfluencer] = useState(false)

  const onDeleteInfluencer = (influencerID) => {
    deleteInfluencer(user, influencerID)
      .then(() => setDeletedInfluencer(!deletedinfluencer))
      // Redirect to the influencers index
      // .then(() => history.push('/show-influencers'))
      .then(() =>
        msgAlert({
          heading: 'Influencer Deleted Successfully',
          message: 'This influencer was removed',
          variant: 'success'
        })
      )
      .catch((err) =>
        msgAlert({
          heading: 'Influencer was not deleted',
          message: 'Something went wrong: ' + err.message,
          variant: 'danger'
        })
      )
  }

  useEffect(() => {
    const { user } = props
    influencerIndex(user)
      .then((res) => setInfluencers(res.data.influencers))
      .then()
      .catch(console.error)
  }, [deletedinfluencer])

  // // function to delete influencer
  const { user, msgAlert } = props

  // const { user } = props

  const influencersList = influencers.map((influencer) => (
    <Col xs={12} md={6} lg={4} xl={4} key={influencer._id} style={cardCol}>
      <Card style={card} className='m-auto'>

        <Card.Body style={cardBody}>
          {/* <Card.Img variant='top' src={ require(`../../images/${influencer.profilephoto}.jpeg`).ReactComponent } style={cardImg} /> */}
          {/* <Card.Img variant='top' src={'../../src/images/influencerA.png'} style={cardImg} /> */}
          {/* <Card.Img variant='top' src= { `${influencer.profilephoto}` } style={cardImg} /> */}
          <Link to={`/show-influencer/${influencer._id}`}>
            <Card.Img className="photo" variant='top' src={cakemosprofile2} style={cardImg}/>
          </Link>
          {/* Card Title */}
          <Card.Title style={cardTitle}>{influencer.username}</Card.Title>
          <Card.Text>
            <p></p>
            <p>{`Name: ${influencer.firstname} ${influencer.lastname}`}</p>
            {/* <p>Photo: {influencer.profilephoto}</p> */}
            <p>Instagram: {influencer.instagram}</p>
            <p>Instagram Audience: {influencer.instagramaudiencesize}</p>
            <p>Instagram Engagement: {influencer.instagramaengagement}</p>
          </Card.Text>
          {/* Update Button */}
          <Button>
            <Link to={{ pathname: `/update-influencer/${influencer._id}/editv2` }} style={{ color: '#FFF', textDecoration: 'none' }}>Update
            </Link>
          </Button>

          {/* Delete Button */}
          <Button
            variant='danger' style={{ color: '#FFF', textDecoration: 'none' }} onClick={() => onDeleteInfluencer(influencer._id)}>Delete
          </Button>
        </Card.Body>

      </Card>

    </Col>
  ))

  return (
    <React.Fragment>
      <h1>Influencers</h1>
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
