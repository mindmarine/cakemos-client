import React, { Fragment } from 'react'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import { Link, NavLink } from 'react-router-dom'

// import Image from 'react-bootstrap/Image'
import cakemosLogo from '../../images/cakemos.png'
import './Header.scss'

const authenticatedOptions = (
  <Fragment>
    <NavLink to='/change-password' className='nav-link'>Change Password</NavLink>
    <NavLink to='/sign-out' className='nav-link'>Sign Out</NavLink>
    <NavLink to='/add-influencer' className='nav-link'>Add Influencer</NavLink>
    <NavLink to='/show-influencers' className='nav-link'>Show Influencers</NavLink>
    <NavLink to='/influencerstable' className='nav-link'>Influencers Table</NavLink>
  </Fragment>
)

const unauthenticatedOptions = (
  <Fragment>
    <NavLink to='/sign-up' className='nav-link'>Sign Up</NavLink>
    <NavLink to='/sign-in' className='nav-link'>Sign In</NavLink>
  </Fragment>
)

const alwaysOptions = (
  <Fragment>
    {/* <NavLink exact to='/' className='nav-link'>Home</NavLink> */}
    {/* Add logo another way */}
    {/* <Image src='../../images/cakemos.png' fluid /> */}
    {/* http://localhost:7165/public/cakemos.png/100px250 */}
  </Fragment>
)

const ColoredLine = ({ color }) => (

  <hr
    style={{
      color: color,
      backgroundColor: color,
      height: 3
    }}
  />
)

const Header = ({ user }) => (
  <>
    <Navbar bg='primary' variant='dark' expand='md'>
      <Navbar.Brand>
        {/* <Link to='/' style={{ color: '#FFF', textDecoration: 'none' }}>cakemos</Link> */}
        <Link to='/' style={{ color: '#FFF', textDecoration: 'none', float: 'left !important', marginTop: '-15px !important' }}><img src={cakemosLogo} style={{ width: '150px', marginLeft: '25px', marginTop: '-7' }}/></Link>

      </Navbar.Brand>
      <Navbar.Toggle aria-controls='basic-navbar-nav' />
      <Navbar.Collapse id='basic-navbar-nav'>
        <Nav className='ml-auto'>
          {/* {user && (
            <span className='navbar-text mr-2'>Welcome, {user.email}</span>
          )} */}
          {alwaysOptions}
          {user ? authenticatedOptions : unauthenticatedOptions}
        </Nav>
      </Navbar.Collapse>
    </Navbar>
    <ColoredLine color="teal" />
  </>
)

export default Header
