import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Playlist from './Playlist'
import playlists from '../samples/playlists.js'
// import mainLogo from'./logo_main.jpg';
import ScrollUpButton from "react-scroll-up-button";


import mainLogo from'./logo_main_transparent.png';

import '../css/Playlist.css'


class Playlists extends Component {
	constructor(props){
		super(props);
		this.state = {
      showForm: false,
      playlists: playlists
		};
	}


	static contextTypes = {
		router: PropTypes.object
	}

	loadPlaylists = () => {
		this.setState({playlists})
	}

	goToPlaylist = (e, key) => {
		e.preventDefault()
		this.context.router.history.push(`/playlists/${key}`)
	}

	showForm = () => {
		this.setState({showForm: true})
	}

	hideForm = () => {
		this.setState({showForm: false})
	}

	savePlaylist = (data) => {
		const playlists = this.state.playlists;
		playlists[data.slug] = data;
		this.setState({showForm: false, playlists});
	}

	goToLogin = (e) => {
		e.preventDefault();
		this.context.router.history.push('/login');
	}

	render(){
		const items = this.state.playlists && Object.keys(this.state.playlists).map(key => {
			return <Playlist data={this.state.playlists[key]} key={key} />
    })
    
		return (
			<div className="container page top-row">
				<div className="row heading">
					<img  src={mainLogo} className="mainLogo" alt="fireSpot"/>
				</div>
				{/* {console.log(items[0])}
				{console.log(items[0].props.data.songs)} */}

				<div className="row">
					{items}		
				</div>
				<ScrollUpButton style={{width: 75}} ToggledStyle={{right: 100}}/>

			</div>
		)
	}
}

export default Playlists;