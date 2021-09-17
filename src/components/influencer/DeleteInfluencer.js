import { useEffect } from 'react'
import { withRouter } from 'react-router-dom'

// import { signOut } from '../../api/auth'
// import { signOutSuccess } from '../AutoDismissAlert/messages'

function DeleteInfluencer (influencer, props) {
  useEffect(() => {
    const { msgAlert, history, user } = props
    signOut(user)
      .then(() => {
        msgAlert({
          heading: 'Signed Out Successfully',
          message: signOutSuccess,
          variant: 'success'
        })
      })
      .then(() => {
        history.push('/')
      })
      .then(() => {
        clearUser()
      })
  }, [])
  return null
}

export default withRouter(SignOut)
