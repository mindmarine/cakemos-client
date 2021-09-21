import './influencertable.scss'

import React, { useState, useEffect } from 'react'
import { withRouter, Link } from 'react-router-dom'
// import { withRouter } from 'react-router-dom'
// import { Table } from 'react-bootstrap'

import Button from 'react-bootstrap/Button'

import { influencerIndex, deleteInfluencer } from '../../api/influencer'

function InfluencersTable (props) {
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

  // function to delete influencer
  const { user, msgAlert } = props

  // const { user } = props

  const influencersAsRows = influencers.map((influencer) => (
    // <Table responsive striped bordered hover size="sm">
    <>
      <tbody key={influencer._id}>
        <tr className="tableable">
          <td>{influencer._id}</td>
          <td>{influencer.firstname}</td>
          <td>{influencer.lastname}</td>
          <td>{influencer.username}</td>
          <td>
            {/* Update Button */}
            <Button>
              <Link to={{ pathname: `/update-influencer/${influencer._id}/editv2` }} style={{ color: '#FFF', textDecoration: 'none' }}>Update v2</Link>
            </Button>
          </td>
          <td>
            {/* Delete Button */}
            <Button
              variant='danger' onClick={() => onDeleteInfluencer(influencer._id)}>Delete
            </Button>
          </td>
        </tr>

      </tbody>
    </>
  ))

  //   let influencersAsTable =
  //   <>
  //     <thead>
  //       <tr>
  //         <th>#</th>
  //         <th>First Name</th>
  //         <th>Last Name</th>
  //         <th>Username</th>
  //       </tr>
  //     </thead>
  //   </>

  return (
    <React.Fragment>
      <h1>Influencers Table</h1>
      {/* {influencersAsTable} */}
      {influencersAsRows}
    </React.Fragment>
  )
}

export default withRouter(InfluencersTable)
