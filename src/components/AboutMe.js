import React from 'react';
import me from '../assets/Joscelyn-sm.jpg';

class AboutMe extends React.Component {
	render() {
		return (
			<div>
				<div className="main-name">
					<h1>Joscelyn James</h1>
				</div>

				<Portrait />

				<div className="main-word">
					<div className="main-job">
						<p>Full Stack Developer</p>
					</div>

					<div className="about-me">
						<ParagraphAboutMe />
					</div>
				</div>
			</div>
		)
	}
}

function Portrait() {
	return (
		<div>
			<img className="portrait" src={me} alt="poop" />
		</div>
	)
}

function ParagraphAboutMe() {
	return (<div>
		<h5>Collaborate. Develop. Repeat.</h5>
		<p>
			I am a full stack developer graduating from Galvanize web development immersive. During my time at Galvanize, I learned core values to prep me for developing in the wild. Im a NERP (Node, Express, React, PostgreSQl), but my curiosity leads me to new languages and technologies.
	</p>
	</div>
	)
}

export default AboutMe;