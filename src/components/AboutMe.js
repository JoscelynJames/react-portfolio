import React from 'react';
import anime from 'animejs';

import ButtonSVG from './ButtonSVG';
// import ColorBlock from './ColorBlock';

import me from '../assets/Joscelyn-sm.jpg';
import resume from '../assets/resume.pdf';

class AboutMe extends React.Component {
	handleMouseEnter(e) {
		// console.log(e.target)
		// anime({
		// 	targets: `line`,
		// 	strokeDashoffset: [anime.setDashoffset, 0],
		// 	easing: 'easeInOutSine',
		// 	duration: 1500,
		// 	delay: function (el, i) { return i * 250 },
		// 	direction: 'alternate',
		// 	loop: true
		// })
	}

	render() {
		const linkedin = 'https://www.linkedin.com/in/joscelynjames/';
		const gitHub = 'https://www.github.com/JoscelynJames';

		return (
			<div>
			{/* <ColorBlock /> */}
			<div className="aboutme-container">
				<div className="about-name">
					<h1>Joscelyn James</h1>
				</div>
				<div className="about-job">
					<h3>Full Stack Developer</h3>
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
		<h3>Communicating through code </h3>
		<p>
      I am a Full Stack JavaScript Developer in Colorado. I am graduating from Galvanize Web Development Immersive. I come equipped with a passion for learning, creating and doing good. 
			My love for all things tech drew me out of hospitality and into development with ambitions to make an impact in the community through code.<br></br>
      I am always looking for opportunities to collaborate.
	</p>
	</div>
	)
}

export default AboutMe;