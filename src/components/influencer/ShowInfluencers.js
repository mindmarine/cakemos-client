import React, { useState, useEffect } from 'react'
import { withRouter, Link } from 'react-router-dom'
// import { withRouter } from 'react-router-dom'

// import { signUp, signIn } from '../../api/auth'
// import { signUpSuccess, signUpFailure } from '../AutoDismissAlert/messages'

import { influencerIndex } from '../../api/influencer'

// import Form from 'react-bootstrap/Form'
// import Button from 'react-bootstrap/Button'

function ShowInfluencers (props) {
  // in order to be able to use the map method we need to set the state of influenders to an array from the beginning
  const [influencers, setInfluencers] = useState([])

  useEffect(() => {
    const { user } = props
    influencerIndex(user)
      .then((res) => setInfluencers(res.data.influencers))
      .catch(console.error)
  }, [])

  console.log('Influencers are', typeof (influencers), influencers)

  const influencersList = influencers.map((influencer) => (
    <li key={influencer._id}>
      <Link to={`/influencers/${influencer._id}`}>{influencer.firstname}</Link>
    </li>
  ))

  return (
    <React.Fragment>
      <h1>Hello World</h1>
      <li>{influencersList}</li>
    </React.Fragment>
  )
}

export default withRouter(ShowInfluencers)
