import React from "react";

class Card extends React.Component {
	
	handleClick(e) {
		// console.log('clicky', e.target)
	}

  render() {
		return <div>
        <div className="card-container">
          <div className="card-img-container">
            {this.props.deployedSite 
            ? <a href={this.props.deployedSite}> <img className="card-img" src={this.props.img} alt="Oops. Something went wrong..." /></a>
            : <img className="card-img" src={this.props.img} alt="Oops. Something went wrong..."/>
            }

          </div>

          <div className="card-title">
            <a href={this.props.url}>
              <h4>{this.props.title}</h4>
            </a>
          </div>

          <div className="grid-p">
            <p>{this.props.p}</p>
          </div>
        </div>
      </div>;	
  }
}

export default Card;
