import React from 'react';
import Anime from 'react-anime';
// import miles from '../assets/miles.svg';
import Miles from '../assets/Miles';

class SplashPage extends React.Component {

	render() {
		return( 
			<div className="splash-container">
				<div className="img-container">
					<Anime 
					target=".splash-img"
					translateX={-100}>
						<Miles className="splash-img"/>
					</Anime>
					{/* <img className="splash-img" src={miles} /> */}
				</div>
				<div className="splash-word">
					<div className="splash-name">
						<p>Joscelyn James</p>
					</div>
					<div>
						<p>Full Stack Developer</p>
					</div>
				</div>
			</div>
		)

	}
}

export default SplashPage