import React from 'react';
import Anime from 'react-anime';
import Miles from '../assets/Miles';
import ColorBlock from './ColorBlock';

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

export default MainPage