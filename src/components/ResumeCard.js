import React from 'react';
import resume from "../assets/resume.pdf";


class ResumeCard extends React.Component {
  render() {
    return (
      <div>
        <div className="card-container">
          <div className="card-img-container">
            <img className="card-img" src={this.props.img} alt="Resume" />
          </div>

          <div className="card-title">
						<a href={resume} download="joscelyn-james-resume.pdf" >{this.props.title}</a>
          </div>

          <div className="grid-p">
            <p>{this.props.p}</p>
          </div>
        </div>
      </div>
    );
  }
}

export default ResumeCard;