import React from "react"
import { FaAngular, FaUnity, FaReact, FaWordpress } from "react-icons/fa"
import { AiOutlineConsoleSql } from "react-icons/ai"
import { RiJavascriptLine } from "react-icons/ri"
import { SiFastapi } from "react-icons/si"
import { BiLogoSpringBoot } from "react-icons/bi"

import "./MySkillsItem.css"

const skillsData = [
	{ icon: FaAngular, name: "Angular" },
	{ icon: SiFastapi, name: "Python/ FastAPI" },
	{ icon: FaUnity, name: "Unity" },
	{ icon: AiOutlineConsoleSql, name: "PL/SQL  MYSQL PHPMyAdmin" },
	{ icon: FaReact, name: "React" },
	{ icon: BiLogoSpringBoot, name: "Java / SpringBoot" },
	{ icon: RiJavascriptLine, name: "JavaScript" },
	{ icon: FaWordpress, name: "WordPress / PHP" },
]

const MySkillsItem = () => {
	return (
		<div className="skills-container">
			<h3>{/* Poner aqui texto*/}</h3>
			<div className="skills-grid">
				{skillsData.map((skill, index) => (
					<div key={index} className="skill-item">
						<skill.icon className="skill-icon" />
						<p className="skill-name">{skill.name}</p>
					</div>
				))}
			</div>
		</div>
	)
}

export default MySkillsItem
