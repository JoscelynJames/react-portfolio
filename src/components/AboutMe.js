import React from 'react';
import me from '../assets/Joscelyn-sm.jpg';

class AboutMe extends React.Component {
	render() {
		return (
			<div className="aboutme-container">

				<div className="main-name">
					<h1>Joscelyn James</h1>
				</div>
				<div className="main-job">
					<p>Full Stack Developer</p>
				</div>
				<div className="bio-pic">
					<div className="about-me">
						<ParagraphAboutMe />
					</div>
					<Portrait />
				</div>


			</div>
		)
	}
}

function Portrait() {
	return (
		<div className="portrait-container">
			<img className="portrait" src={me} alt="poop" />
		</div>
	)
}

function ParagraphAboutMe() {
	return (<div className="aboutme-bio">
		<h5>Collaborate. Develop. Repeat.</h5>
		<p>
			I am a full stack developer graduating from Galvanize web development immersive. During my time at Galvanize, I learned core values to prep me for developing in the wild. Im a NERP (Node, Express, React, PostgreSQl), but my curiosity leads me to new languages and technologies. 
	</p>
	</div>
	)
}

export default AboutMe;