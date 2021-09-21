/* eslint-disable no-tabs */
import React, { Component, Fragment } from 'react'
import { Route, Switch } from 'react-router-dom'
import { v4 as uuid } from 'uuid'

import AuthenticatedRoute from './components/AuthenticatedRoute/AuthenticatedRoute'
import AutoDismissAlert from './components/AutoDismissAlert/AutoDismissAlert'
import Header from './components/Header/Header'
import SignUp from './components/auth/SignUp'
import SignIn from './components/auth/SignIn'
import SignOut from './components/auth/SignOut'
import ChangePassword from './components/auth/ChangePassword'

// Influencer specific import
import CreateInfluencer from './components/influencer/CreateInfluencer'
// Index Influencers import
import ShowInfluencers from './components/influencer/ShowInfluencers'
// Show One Influencer
import ShowInfluencer from './components/influencer/ShowInfluencer'
// Update One Influencer
import UpdateInfluencer from './components/influencer/UpdateInfluencer'
import UpdateInfluencerV2 from './components/influencer/UpdateInfluencerV2'
import InfluencersTable from './components/influencer/InfluencerTable'

import HomePageVideos from './components/Homepage/Homepage'
import Inspiration from './components/Inspiration/Inspiration'

class App extends Component {
  constructor (props) {
    super(props)
    this.state = {
      user: null,
      msgAlerts: []
    }
  }

  setUser = (user) => this.setState({ user })

  clearUser = () => this.setState({ user: null })

  deleteAlert = (id) => {
    this.setState((state) => {
      return { msgAlerts: state.msgAlerts.filter((msg) => msg.id !== id) }
    })
  }

  msgAlert = ({ heading, message, variant }) => {
    const id = uuid()
    this.setState((state) => {
      return {
        msgAlerts: [...state.msgAlerts, { heading, message, variant, id }]
      }
    })
  }

  render () {
    const { msgAlerts, user } = this.state

    return (
      <Fragment>
	      <Header user={user} />
	      {msgAlerts.map((msgAlert) => (
          <AutoDismissAlert
            key={msgAlert.id}
            heading={msgAlert.heading}
            variant={msgAlert.variant}
            message={msgAlert.message}
            id={msgAlert.id}
            deleteAlert={this.deleteAlert}
          />
        ))}
	      <main className='container'>

          <Switch>
	          <Route
              path='/sign-up'
              render={() => (
                <SignUp msgAlert={this.msgAlert} setUser={this.setUser} />
              )}
            />
            <Route
              path='/sign-in'
              render={() => (
                <SignIn msgAlert={this.msgAlert} setUser={this.setUser} />
              )}
            />

            <Route
              exact path='/'
              render={() => (
                <HomePageVideos />
              )}
            />

            <AuthenticatedRoute
              user={user}
              exact path='/sign-out'
              render={() => (
                <SignOut
                  msgAlert={this.msgAlert}
                  clearUser={this.clearUser}
                  user={user}
                />
              )}
            />
            <AuthenticatedRoute
              user={user}
              exact path='/change-password'
              render={() => (
                <ChangePassword msgAlert={this.msgAlert} user={user} />
              )}
            />

            {/* Influencer routes */}

            { /* Add influencer */ }
            <AuthenticatedRoute
              user={user}
              exact path='/add-influencer'
              render={() => (
                <CreateInfluencer msgAlert={this.msgAlert} user={user} />
              )}
            />

            {/* Influencers Index */}
            <AuthenticatedRoute
              user={user}
              exact path='/show-influencers/'
              render={() => (
                <ShowInfluencers msgAlert={this.msgAlert} user={user} />
              )}
            />

            {/* Show Influencer */}
            <AuthenticatedRoute
              user={user}
              path='/show-influencer/:id'
              render={() => (
                <ShowInfluencer msgAlert={this.msgAlert} user={user} />
              )}
            />

            {/* Update Influencer */}
            <AuthenticatedRoute
              user={user}
              exact path='/update-influencer/:id/edit'
              render={() => (
                <UpdateInfluencer msgAlert={this.msgAlert} user={user} />
              )}
            />

            {/* Update Influencer V2 */}
            <AuthenticatedRoute
              user={user}
              exact path='/update-influencer/:id/editv2'
              render={() => (
                <UpdateInfluencerV2 msgAlert={this.msgAlert} user={user} />
              )}
            />

            {/* Influencers Table */}
            <AuthenticatedRoute
              user={user}
              exact path='/influencerstable/'
              render={() => (
                <InfluencersTable msgAlert={this.msgAlert} user={user} />
              )}
            />

            {/* Inspiration */}
            <Route
              path='/inspiration'
              render={() => (
                <Inspiration/>
              )}
            />
          </Switch>
        </main>
      </Fragment>
    )
  }
}

export default App
