import React from 'react';

class NavBar extends React.Component {
	render() {
		return (
		<div className="nav-container">
			<div className="nav-name">
				Joscelyn James
			</div>

			{/* <div className="search">
				<form>
					<input />
					<button>button</button>
				</form>
			</div> */}

			<div className="nav-links">
				<a>Projects </a>
				<a>Just Me </a>
				<a>Contact</a>
			</div>

		</div>
		)
	}
}

export default NavBar