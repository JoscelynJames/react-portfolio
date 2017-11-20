import React from 'react';
import anime from 'animejs';

import ButtonSVG from './ButtonSVG';
import ColorBlock from './ColorBlock';

import me from '../assets/Joscelyn-sm.jpg';
import resume from '../assets/resume.pdf';

class AboutMe extends React.Component {
	handleMouseEnter(e) {
		console.log(e.target)
		anime({
			targets: `line`,
			strokeDashoffset: [anime.setDashoffset, 0],
			easing: 'easeInOutSine',
			duration: 1500,
			delay: function (el, i) { return i * 250 },
			direction: 'alternate',
			loop: true
		})
	}

	render() {
		const linkedin = 'https://www.linkedin.com/in/joscelynjames/';
		const gitHub = 'https://www.github.com/JoscelynJames';

		return (
			<div>
			{/* <ColorBlock /> */}
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

						<div className="links">
							<div className="download-bttn">
								<a href={resume} download="joscelyn-james-resume.pdf">
									<ButtonSVG onMouseEnter={(e) => this.handleMouseEnter(e)} text="Resume" />
								</a>
							</div>
							<div>
								<a href={linkedin}>
									<ButtonSVG  text="Linkedin"/>
								</a>
							</div>
							<div>
								<a href={gitHub}>
									<ButtonSVG text="GitHub"/>
								</a>
							</div>
						</div>

					</div>
					<Portrait />
				</div>

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
			I am a full stack developer graduating from Galvanize web development immersive. During my time at Galvanize, I learned core values to prep me for developing in the wild. Im a NERP (Node, Express, React, PostgreSQl), but my curiosity leads me to new languages and technologies. I am always looking for opportunities to collaborate
	</p>
	</div>
	)
}

export default AboutMe;