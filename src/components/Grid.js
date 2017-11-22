import React from 'react';

import Card from './Card';
import DetailCard from './DetailCard'

import me from '../assets/Joscelyn-sm.jpg';
import ghibli from '../assets/ghibli.png';
import gradTracker from '../assets/gradTracker.jpeg';
import kojomon from '../assets/kojomon.png';
import miles from '../assets/miles.svg';
import milkyWay from '../assets/MilkyWay.png';
import unreal from '../assets/unreal.jpg';
import missy from '../assets/missy.svg';
import denver from '../assets/mountains.jpg';
import resume from '../assets/resume.png';
import octocat from '../assets/octocat.png'

class Grid extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      showDetail: false,
    };
	}
	
  handleClick(e) {
		this.setState({ showDetail: !this.state.showDetail });
		console.log(e.target)
		// return (
		// 	<DetailCard />
		// )
  }

  render() {
    return (<div>
			{/* {this.state.showDetail === false 
				? <div></div>
				: <DetailCard />
			} */}
      <div className="grid-container">
        <Card onClick={(e) => this.handleClick(e)} img={miles} title="Miles" p="How to Animate SVG's" />
        <Card onClick={(e) => this.handleClick(e)}
          img={me}
          title="Joscelyn James"
          p=" I am a Full Stack JavaScript Developer in Colorado. I am graduating from Galvanize Web Development Immersive. I come equipped with a passion for learning, creating and doing good. 
					My love for all things tech drew me out of hospitality and into development with ambitions to make an impact in the community through code."
        />
        <Card onClick={(e) => this.handleClick(e)}
          img={ghibli}
          title="Studio Ghibli Movies"
          p="Explore all the movies from Studio Ghibli."
        />
        <Card onClick={(e) => this.handleClick(e)}
          img={gradTracker}
          title="GradTracker"
          p="This app allows teachers to keep track the succsess of students after graduation with a quick text messaging survery."
        />
        <Card onClick={(e) => this.handleClick(e)}
          img={milkyWay}
          title="Milky Way Battles"
          p="An space themed arcade shooter where your objective is to destroy as many enemy ship and aviod astriods. You get points for every enemy destoryed and metoer destroyed. See how if you can get the next hight score!"
        />
        <Card onClick={(e) => this.handleClick(e)}
          img={kojomon}
          title="Kojomon"
          p="Kojomon is a virtual pet game. Keep your pet well fed and it will evolve into a new creature! Don't forget to feed it though, or bad things might happen..."
        />
        <Card onClick={(e) => this.handleClick(e)}
          img={unreal}
          title="Building Escape"
          p="Puzzle game where the mission is to escape the room. Can you succeed?"
        />
        <Card onClick={(e) => this.handleClick(e)} img={missy} title="Missy" p="Can you tell I love animals?" />
        <Card onClick={(e) => this.handleClick(e)}
          img={denver}
          title="Where to find me?"
          p="Denver - Boulder Colorado"
        />
        <Card onClick={(e) => this.handleClick(e)} img={resume} title="Resume?" p="Click Here to Download" />
        <Card onClick={(e) => this.handleClick(e)} img={octocat} title="GitHub" p="Click here for my github" />
      </div>
			</div>
    );
  }
}

export default Grid