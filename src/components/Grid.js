import React from "react";

import Card from "./Card";
import MilesCard from "./MilesCard";
import MissyCard from "./MissyCard";
import ResumeCard from "./ResumeCard";

import me from "../assets/Joscelyn-sm.jpg";
import ghibli from "../assets/ghibli.png";
import gradTracker from "../assets/gradTracker.jpeg";
import kojomon from "../assets/kojomon.png";
import milkyWay from "../assets/MilkyWay.png";
import unreal from "../assets/unreal.jpg";
import denver from "../assets/mountains.jpg";
import resume from "../assets/resume.png";
import octocat from "../assets/octocat.png";
import linkedin from "../assets/watercolor.jpg";
import pos from "../assets/pos.png";
import lemon from "../assets/lemon.png";
import petapp from "../assets/petapp.png";

class Grid extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      showDetail: false,
    };
  }

  handleClick(e) {
    this.setState({ showDetail: !this.state.showDetail });
  }

  render() {
    return (
      <div className="grid-container">
        <MilesCard className="me project"/>
        <Card
          className="me"
          img={me}
          title="Joscelyn James"
          p=" I am a Full Stack Developer in Colorado. I am graduating from Galvanize Web Development Immersive at the end of this year. I come equipped with a passion for learning, creating and doing good. 
					My love for all things tech drew me out of hospitality and into development with ambitions to make an impact in the community through code."
        />
        <Card
          className="project"
          deployedSite="https://ghibli-movies-42c8d.firebaseapp.com/"
          url="https://github.com/JoscelynJames/StudioGhibli"
          img={ghibli}
          title="Studio Ghibli Movies"
          p="Explore all the movies from Studio Ghibli."
        />
        <Card 
          className="contact"
          url="https://www.linkedin.com/in/joscelynjames/"
          img={linkedin}
          title="LinkedIn"
        />
        <Card
          className="project"
          deployedSite="https://gradtracker-9818d.firebaseapp.com/"
          url="https://github.com/lnchapin/GradTracker-frontend"
          img={gradTracker}
          title="GradTracker"
          p="This app allows teachers to keep track the succsess of students after graduation with a quick text messaging survery."
        />
        <Card
          className="project"
          deployedSite="http://milkywaybattles.online/"
          url="https://github.com/JoscelynJames/MilkyWayBattles"
          img={milkyWay}
          title="Milky Way Battles"
          p="An space themed arcade shooter where your objective is to destroy as many enemy ship and aviod astriods. You get points for every enemy destoryed and metoer destroyed. See how if you can get the next hight score!"
        />
        <Card
          className="project"
          deployedSite="https://kojomon-ae289.firebaseapp.com"
          url="https://github.com/JoscelynJames/Kojomon"
          img={kojomon}
          title="Kojomon"
          p="Kojomon is a virtual pet game. Keep your pet well fed and it will evolve into a new creature! Don't forget to feed it though, or bad things might happen..."
        />
        <MissyCard className="me project"/>
        <Card
          className="me"
          img={denver}
          title="Where to find me?"
          p="Denver - Boulder Colorado"
        />
        <ResumeCard           className="me contact"
          img={resume}
          title="Resume"
          p="Click Here to Download" />
        <Card
          className="me contact"
          url="https://github.com/JoscelynJames"
          img={octocat}
          title="GitHub"
        />
        <Card
          className="project"
          deployedSite="https://restaurant-pos-6406f.firebaseapp.com/"
          url="https://github.com/JoscelynJames/restaurant-pos-ui"
          img={pos}
          title="Restaurant Point of Sales "
          p="Frontend for a restaurant point of sales system. Built with React and Redux"
        />
        <Card
          className="project"
          deployedSite="https://sams-lemonade-stand.firebaseapp.com/"
          url="https://github.com/JoscelynJames/restaurant-pos-ui"
          img={lemon}
          title="Bitcoin address tracker"
          p="Search a public address and see what incomming transactions you have. Front end is built with React, Redux and jest for testing. Backend is Node, Express, PostgreSQL, and GraphQL"
        />
        <Card
          className="project"
          deployedSite="https://wheres-my-pet-app.firebaseapp.com/"
          url="https://github.com/JoscelynJames/rest-api-go"
          img={petapp}
          title="Wheres my bird app?"
          p="I never miss out on anything my pet bird is doing. A video streaming app that allows me to view and track my bird. Built with Raspberry Pi, motion, ffmpeg, Nginx, Golang, React and Rechart.js."
        />
      </div>
    );
  }
}

export default Grid;
