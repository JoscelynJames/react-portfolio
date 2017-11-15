import React from 'react';
// import '../assets/animate.js';
import ButtonSVG from './ButtonSVG';

class SideNav extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			direction: 'normal',
		}

	}

	handleMouseEnter() {
		this.setState({ direction: 'reverse' })
	}

	render() {
		return <div className="nav-container">
        <a className="a-container">
					<ButtonSVG onMouseEnter={(e) => this.handleMouseEnter(e)} className="svg-button" text="About" direction={this.state.direction}/>
        </a>
        <a className="a-container">
          <ButtonSVG className="svg-button" text="Creative" />
        </a>
        <a className="a-container">
          <ButtonSVG className="svg-button" text="Contact" />
        </a>
      </div>;
	}
}

export default SideNav