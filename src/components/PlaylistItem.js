import React, { Component } from 'react';

class PlaylistItem extends Component {
	constructor(props){
		super(props);

		this.state = {
			playing: false,
			progressValue: 0,
			paused: true,
			informations: {}
		}

		this.progressInterval = null
		this.progressValue = 0
		this.progressClicked = false

		this.fetchSongInfos(props.song, props.title, props.language, props.composer,props.movie).then(richSong => {
		  this.setState({informations: richSong})
		});
	}



	fetchSongInfos = async (id, title, language, composer, movie) => {
		// key = AIzaSyC_YtQto4iG4l5QkoBfLrKTFBWCIiDl9F8
		// console.log('id is : ' + id);
		// let song = await fetch(`https://www.googleapis.com/youtube/v3/videos?id=${id}&key=AIzaSyBPBShIzTzRec5iwBl7FWqGWh83qYbr6hQ&part=snippet,contentDetails`)

		// console.log('=${process.env.REACT_APP_API_KEY} is === ' + ${process.env.REACT_APP_API_KEY} )
		// let song = await fetch(`https://www.googleapis.com/youtube/v3/videos?id=${id}&key=AIzaSyC_YtQto4iG4l5QkoBfLrKTFBWCIiDl9F8&part=snippet,contentDetails`)
	    //   .then(data => data.json())
	    //   .then(data => {
			//   console.log(data);
	        const richSong = {
				id,
				title : title,
				  language: language,
				  composer: composer,
				  movie: movie
			  
	        //   title: data.items[0].snippet.title,
	        //   thumbnail: data.items[0].snippet.thumbnails.default.url,
	        }

	        return richSong;
	    //   });
	    // return song;
	  }

	playSong = () => {
	    if(this.state.playing === false || this.props.playing !== this.props.song){
	    	document.title = `Now playing : ${this.state.informations.title}`
	    	this.props.registerPlaying({informations: this.state.informations, index: this.props.index})
		 
			this.setState({playing: this.props.song})
			  var songIdMain = this.props.song.split(" ");
			//   console.log(songIdMain);
			  var songId = songIdMain[0];
			  this.props.player.seekTo(0);
			  this.props.player.loadVideoById({videoId: songId, startSeconds: this.props.start, endSeconds: this.props.end})
			  // this.props.player.loadVideoById({videoId: songId})
			  this.props.player.playVideo();
		
			  //   var songId = this.props.song;
			//   this.props.player.loadVideoById({videoId: songId, startSeconds: 10, endSeconds: 20})

	    }
	    this.props.player.playVideo();
	    this.setState({paused: false});
	    
	}

	pause = () => {
		this.setState({paused: true})
		this.props.player.pauseVideo()
		this.clearProgressInterval();
	}

	clearProgressInterval = () => {
		window.clearInterval(this.progressInterval)
		this.progressInterval = null
	}

	componentDidMount(){
		this.props.registerAsChild(this.props.index, this.props.song, this)
	}

	componentWillUnmount(){
		this.clearProgressInterval();
	}

	renderPlayPauseButton(){
		if(!this.state.paused && this.props.playing === this.props.song) {
			return <button className="btn btn-neutral"  onClick={(e) => this.pause()}>
       <i className="fa fa-pause play-pause"></i>
     </button>;

		} else {
			return <button className="btn btn-neutral" onClick={(e) => this.playSong()}>
      <i className="fa fa-play play-pause"></i>
    </button>;
		}
	}

	handleProgressBarClick = (e, seekAhead) => {
		if(this.progressClicked){
			const rate = (e.nativeEvent.offsetX / e.currentTarget.offsetWidth)
			this.props.player.getDuration().then(duration => {
				this.progress.style.width = rate * 100 + '%'
				this.props.player.seekTo(Math.floor(duration * rate))
			})
		}
	}

	renderProgressBarHTML(){
		return this.props.playing !== this.props.song ? '' : (
			<div className="progress-container progress-info">
			    <span className="progress-badge">Now playing</span>
			    <div className="progress" onMouseOut={(e) => this.progressClicked = false} onMouseDown={(e) => this.progressClicked = true} onMouseUp={(e) => this.progressClicked = false} onMouseMove={(e) => this.handleProgressBarClick(e, true)} >
			        <div className="progress-bar" id={'progress-' + this.props.song} ref={(progress) => this.progress = progress} role="progressbar" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100">
			            <span className="progress-value" ref={(span) => this.progressTime = span}></span>
			        </div>
			    </div>
			</div>
		)
	}

	renderDeleteButton(){
		return !this.props.isOwner ? '' : (
			<button className="btn btn-neutral" onClick={(e) => this.props.removeSong(this.props.song)}>
				<i className="fa fa-times"></i>
			</button>
		)
	}

	render(){
		const key = this.props.id;

		return (
			<div key={key} className="row">
				<div className="d-none d-sm-block col-2  song-language">
					{/* <img className="img-responsive img-raised" src={this.state.informations.thumbnail} alt={this.state.informations.title}/> */}
					{this.state.informations.language && this.state.informations.language} 
				</div>
				<div className="col-9 col-md-3  song-title">
					{this.state.informations.title && this.state.informations.title} 
				</div>

				<div className="d-none d-sm-block col-xs-1 col-md-3   song-movie">
					{this.state.informations.movie && this.state.informations.movie} 
				</div>

				<div className=" d-none d-sm-block col-2 song-composer" >
					{this.state.informations.composer && this.state.informations.composer} 
				</div>

				<div className="col-2 col-md-2 ">
					{this.renderPlayPauseButton()}
					<br />
				</div>
			</div>
		)
	}
}

export default PlaylistItem;