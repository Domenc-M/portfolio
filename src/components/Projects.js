import React from 'react';

const projectList = [
    {
        projectName: "Proton",
        projectPic: require("../assets/img/sportus.png"),
        projectDescription: "Un jeu de plateforme en 2D, réalisé sous Phaser 2. Vous y jouez un robot super-star qui tire sa force du nombre de viewer qu'il a !",
        projectSkillList: ["Javascript", "Phaser 2", "Direction artistique", "Level Design", "Production d'assets en pixel art"],
        projectPlayable: 'true',
        projectGit: 'https://github.com/Domenc-M/proton'
    },
    {
        projectName: "Roll For Many Things",
        projectPic: require("../assets/img/sportus.png"),
        projectDescription: "Un site pour aider les Maîtres du jeu dans le jeu de rôle. \n Il permet de stocker des lieux, personnages, objets, intrigues et de les relier entre eux pour pouvoir circuler organiquement de l'un à l'autre. \n Il possède également des tables aléatoires partageables.",
        projectSkillList: ["Symfony", "HTML", "CSS/Sass", "Javascript", "Adobe XD", "Direction artistique"],
        projectGit: 'https://github.com/Domenc-M/RFMT'
    },
    {
        projectName: "Sport'us",
        projectPic: require("../assets/img/sportus.png"),
        projectDescription: "Une application qui met en contact les sportifs et les organisation caritatives, pour permettre aux sportifs de créer des challenge et de faire des dons en fonction de leurs résultats",
        projectSkillList: ["Vue.js", "Quasar", "Strapi", "Javascript", "Typescript", "TDD", "Jest", "Cypress", "Méthode Agile", "Trello"],
        projectGit: false
    },
    {
        projectName: "Hackaton Campus du Lac",
        projectPic: require("../assets/img/sportus.png"),
        projectDescription: "Un projet en équipe pour réaliser le site vitrine d'un Escape Game fictif. J'ai été chef de projet et Gitmaster. Notre équipe a été sélectionnée parmi les trois gagnantes.",
        projectSkillList: ["HTML", "CSS", "Gitmaster", "Travail en équipe", "Echange avec designer", "Méthode Agile"],
        projectGit: 'https://github.com/Domenc-M/hackaton_team_1'
    }
]

class Projects extends React.Component {

    render = () => {
        return (
            <section id="projects">
                <h1>Projets</h1>
                <ul className="projectsContainer">
                {projectList.map(project => (
                    <li className="project" key={project.projectName}>
                        <h2>{project.projectName}</h2>
                        <div className="projectContainer">
                            <div className="topSlide">
                                <span>{project.projectDescription}</span>
                            </div>

                            <img alt={project.projectName} src={project.projectPic}></img>

                            <div className="bottomSlide">
                                <div className="skillFlex">
                                    {project.projectSkillList.map((skill) => {
                                    return (<span className="skill" key={skill}>{skill}</span>)
                                    })}
                                </div>
                                {project.projectPlayable ? <div className="projectButton">Y jouer !</div> : null}
                                {project.projectGit ? <div className="projectButton">Code source</div> : <div className="projectGreyButton">Code source confidentiel</div>}
                            </div>
                        </div>
                    </li>
                ))}
                </ul>
            </section>
        )
    }

}

export default Projects