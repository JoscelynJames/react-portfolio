import React from 'react';
import Anime from 'react-anime';
import Miles from '../assets/Miles';

class MainPage extends React.Component {

	render() {
		return( 
			<div className="main-container">
				<ColorBlock />	
					<Anime 
					target=".main-img"
					translateX={-100}>
						<Miles className="main-img"/>
					</Anime>

			</div>
		)

	}
}

function ColorBlock() {
	return(
		<div>
			<div className="color-block"></div>
		</div>
	)
}

export default MainPage