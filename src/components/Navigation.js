import React, { Component } from 'react'
import PropTypes from 'prop-types'

/**
 * ReactComponent Navigation
 * Displaying the navbar on top of the website
 */
class Navigation extends Component {

  /**
   * We need a state here
   * @param  {Object} props
   */
  constructor(props){
    super(props)

    this.state = {
      user: props.user || {uid: ''}
    }
  }

  /**
   * Surfacing the Router
   * @type {Object}
   */
  static contextTypes = {
    router: PropTypes.object
  }


  /**
   * Handling routing to any asked page
   * @param  {SyntheticEvent} event Any link click event
   * @param  {String} path The path we want to route on
   */
  /**
   * Handling click on the logout button
   * @param  {SyntheticEvent} e The click event
   */

  /**
   * Rendering the loggin button with a different behavior if the user is logged in
   * @return {JSX/HTML} The login/logout button
   */

  /**
   * Rendering the top navbar
   * @return {JSX/HTML} The navbar template
   */
  render () {
    return (
      <nav id="navigation" className='navbar navbar-toggleable-md  fixed-top'>
        <div className="container">
          <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navigation" aria-controls="navigation-index" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-bar bar1"></span>
            <span className="navbar-toggler-bar bar2"></span>
            <span className="navbar-toggler-bar bar3"></span>
          </button>
        
          <a className='navbar-brand' href="#!" onClick={(e) => this.goToPage(e, '/')}>
			    
			    </a>
        

          <div className='collapse navbar-collapse justify-content-end'>
            <ul className="navbar-nav">
              <li className="nav-item">
                  Home
              </li>
              <li className="nav-item">
                  Browse playlists
              </li>
            </ul>
          </div>
        </div>
      </nav>
    )
  }
}

export default Navigation