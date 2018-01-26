import React from 'react';
import Miles from '../assets/Miles';

class MilesCard extends React.Component{
	render() {
		return(
			<div>
        <div className="card-container">
          <div className="card-img-container">
            <Miles />
          </div>
        </div>
			</div>
		)
	}

}

export default MilesCard;