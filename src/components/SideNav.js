import React from 'react';
// import '../assets/animate.js';
import ButtonSVG from '../assets/ButtonSVG';

class SideNav extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			hovering: false,
		}

	}

	// handleMouseEnter() {
	// 	this.setState({ isHovering: true })
	// }

	render() {
		return <div className="nav-container">
        <div className="a-container">
          <ButtonSVG onMouseEnter={this.handleMouseEnter} className="svg-button" text="About" loop={this.state.isHovering}/>
        </div>
        <div className="a-container">
          <ButtonSVG className="svg-button" text="Creative" />
        </div>
        <div className="a-container">
          <ButtonSVG className="svg-button" text="Contact" />
        </div>
      </div>;
	}
}

export default SideNav