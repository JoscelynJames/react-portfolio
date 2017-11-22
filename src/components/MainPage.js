import React from 'react';
import Anime from 'react-anime';
import Miles from '../assets/Miles';
import ColorBlock from './ColorBlock';

class MainPage extends React.Component {
	constructor(props){
		super(props);

		this.state = {
			adjective: "Develop",
		}
	}



	render() {
		return( 
			<div className="main-container">
				<ColorBlock />	
					<Anime 
					target=".main-img"
					translateX={-100}>
						<Miles className="main-img"/>
					</Anime>
				<MainName adjective={this.state.adjective} />
			</div>
		)

	}
}

function MainName(props) {
	return (
		<div className="main-name-container">
			<h1><span className="main-name">Joscelyn James</span> </h1>
		</div>
	)
}

export default MainPage