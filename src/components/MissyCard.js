import React from 'react';
import Missy from '../assets/Missy';

class MissyCard extends React.Component {
	render() {
		return (
			<div>
        <div className="card-container">
          <div className="card-img-container">
            <Missy />
          </div>
        </div>
			</div>
		)
	}
}

export default MissyCard;