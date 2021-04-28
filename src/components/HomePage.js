import React, { Component } from 'react';
import NavBar from './NavBar';
import './HomePage.css'

class HomePage extends Component {
   

render() {
  return ( 
  				<div className="mainHome">
	  				<NavBar />
					<div className="bodyContent">
						<h1 className="words1">Letting</h1>
						<h1 className="words2">Your</h1>
						<h1 className="words3">Ideas</h1>
						<h1 className="words4">Live</h1>
						<h1 className="words5">On...</h1>
					</div>
					<div className="welcome">
						<h1 className="notes">Welcome to...</h1>
						<h1 className="notes1">Your</h1>
						<h1 className="notes2">Notes</h1>
					</div>
				</div>
  );
}};

export default HomePage;