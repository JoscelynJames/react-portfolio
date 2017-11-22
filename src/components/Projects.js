import React from 'react';
import milky from '../assets/MilkyWay.png'
import ghibli from '../assets/ghibli.png'
import buildingEscape from '../assets/unreal.jpg'
import gradTracker from '../assets/gradTracker.jpeg'
import kojomon from '../assets/kojomon.png'

class Projects extends React.Component {

	render() {
		const projects = [
			{
				projectName: 'Milky Way Battles',
				projectImg: milky,
				projectDescription: 'An space themed arcade shooter where your objective is to destroy as many enemy ship and aviod astriods. You get points for every enemy destoryed and metoer destroyed. See how if you can get the next hight score!'
			},
			{
				projectName: 'Studio Ghibli Movies',
				projectImg: ghibli,
				projectDescription: 'Explore all the movies from Studio Ghibli'
			},
			{
				projectName: 'Building Escape',
				projectImg: buildingEscape,
				projectDescription: 'Puzzle game where the mission is to escape the room. Can you succeed?'
			},
			{
				projectName: 'GradTracker',
				projectImg: gradTracker,
				projectDescription: 'This app allows teachers to keep track the succsess of students after graduation with a quick text messaging survery.'
			},
			{
				projectName: 'Kojomon',
				projectImg: kojomon,
				projectDescription: `Kojomon is a virtual pet game. Keep your pet well fed and it will evolve into a new creature! Don't forget to feed it though, or bad things might happen...`
			},
		]

		return (
			<div>
			<div className="project-heading"><h1>Projects</h1></div>
			<div className="projects">
			{projects.map((project, i) => {
				return (
					<div key={i} className="project-container">

						<div className="project-img-container">
							<img className="project-img" src={project.projectImg} alt="no" />
						</div>

						<div className="project-name">
							<h3>{project.projectName}</h3>
						</div>

						<div className="project-description">
							<p>{project.projectDescription}</p>
						</div>

					</div>
				)
			})}
			</div>
			</div>
		)
	}
}

export default Projects;