import React from 'react'
import './Project.css'
import img from '../../assets/projects/proj_2.png'
import arrow_btn from '../../assets/arrow_btn.svg'
function ProjectCards(props){
  const project_list = props.project_cards.map((card) =>
    <div className='project-card'>
      <img src={img}/>
      <a href={card.post_link} target="_blank" className='view-button'>
        <p>View</p>
        <img src={arrow_btn} />
      </a>
    </div>
  );

  return (
    <div className='project-cards'>
      {project_list}
    </div>
  )
}
export function Project() {
  const project_cards = [
    {
      id: 1,
      img_url: "../../assets/projects/proj_2.png",
      post_link: "https://github.com/RionDsilvaCS/VoxPop.ai"
    },
    {
      id: 2,
      img_url: "../../assets/projects/proj_2.png",
      post_link: "https://github.com/RionDsilvaCS/VoxPop.ai"
    },
    {
      id: 3,
      img_url: "../../assets/projects/proj_2.png",
      post_link: "https://github.com/RionDsilvaCS/VoxPop.ai"
    },
    {
      id: 4,
      img_url: "../../assets/projects/proj_2.png",
      post_link: "https://github.com/RionDsilvaCS/VoxPop.ai"
    }
  ];

  
  return (
    <div className='gen-body' id='projects'>
      <div className='white-fade'>
      <p className='title'>Projects</p>
      </div>
      <ProjectCards project_cards={project_cards}/>
    </div>
  )
}
