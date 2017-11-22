import React from "react";

import DetailCard from './DetailCard';
import resume from "../assets/resume.pdf";
const linkedin = "https://www.linkedin.com/in/joscelynjames/";
const gitHub = "https://www.github.com/JoscelynJames";

class Card extends React.Component {

  decideWhatToRender(title) {
    switch (title) {
      case "Resume?":
        return (
          <a href={resume} download="joscelyn-james-resume.pdf">
            {title}
          </a>
        );
        break;
      case "GitHub":
        return <a href={gitHub}>{title}</a>;
        break;
      case "LinkedIn":
        return <a href={linkedin}>{title}</a>;
        break;
      default:
        return <h4>{title}</h4>;
    }
  }

  render() {
    return (
      <div onClick={this.props.onClick} className="card-container">
        <div className="card-img-container">
          <img className="card-img" src={this.props.img} />
        </div>

        <div className="card-title">
          {this.decideWhatToRender(this.props.title)}
        </div>

        <div className="gird-p">
          <p>{this.props.p}</p>
        </div>
      </div>
    );
  }
}

export default Card;
