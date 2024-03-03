import React from 'react'
import './Project.css'
import vox_pop_proj from '../../assets/projects/voxpop_banner.svg'
import raftaar_proj from '../../assets/projects/raftaar_banner.svg'
import stressaway_proj from '../../assets/projects/stressaway_banner.svg'
import lipsync_proj from '../../assets/projects/lipsync_banner.svg'
import arrow_btn from '../../assets/arrow_btn.svg'

function ProjectCards(props){
  const project_list = props.project_cards.map((card) =>
    <div className='project-card'>
      <img className='card-img' src={card.img_url}/>
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
      img_url: vox_pop_proj,
      post_link: "https://github.com/RionDsilvaCS/VoxPop.ai"
    },
    {
      id: 2,
      img_url: stressaway_proj,
      post_link: "https://github.com/RionDsilvaCS/StressAway-WebApp"
    },
    {
      id: 3,
      img_url: lipsync_proj,
      post_link: "https://github.com/RionDsilvaCS/LipSync"
    },
    {
      id: 4,
      img_url: raftaar_proj,
      post_link: "https://github.com/RionDsilvaCS/Raftaar.ai"
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
