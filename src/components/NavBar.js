import React from 'react';

class NavBar extends React.Component {
	handleClick() {
		// let clickedLink = e.target.text;

		// console.log(document.getElementsByClassName(clickedLink))
	}

	render() {
		return ( 
			<div className="nav-container">
        <div className="nav-name" onClick={() => this.handleClick()}>Joscelyn James</div>
				<div> Full Stack Developer </div>
        {/* <div className="search">
				<form>
					<input />
					<button>button</button>
				</form>
				</div> */}

        {/* <div className="nav-links">
          <a onClick={e => this.handleClick(e)}>Projects</a>
          <a onClick={e => this.handleClick(e)}>Just Me</a>
          <a onClick={e => this.handleClick(e)}>Contact</a>
        </div> */}
      </div>
		)
	}
}

export default NavBar