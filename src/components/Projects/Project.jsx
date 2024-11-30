import React from 'react'
import './Project.css'
import trustinsure_proj from '../../assets/projects/trustinsure_banner.svg'
import raftaar_proj from '../../assets/projects/raftaar_banner.svg'
import cr_project from '../../assets/projects/cr_banner.svg'
import handkeypoint_proj from '../../assets/projects/handkeypoint_banner.svg'
import nexgentutor_proj from '../../assets/projects/nexgentutor_banner.svg'
import segmentsphere_proj from '../../assets/projects/segmentsphere_banner.svg'
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
      img_url: trustinsure_proj,
      post_link: "https://github.com/RionDsilvaCS/TrustInsure.ai"
    },
    {
      id: 2,
      img_url: handkeypoint_proj,
      post_link: "https://docs.ultralytics.com/datasets/pose/hand-keypoints/"
    },
    {
      id: 3,
      img_url: raftaar_proj,
      post_link: "https://github.com/RionDsilvaCS/Raftaar.ai"
    },
    {
      id: 4,
      img_url: nexgentutor_proj,
      post_link: "https://github.com/RionDsilvaCS/nex-gen-tutor"
    },
    {
      id: 5,
      img_url: segmentsphere_proj,
      post_link: "https://github.com/RionDsilvaCS/rjac-edge-ai-innovation"
    },
    {
      id: 6,
      img_url: cr_project,
      post_link: "https://github.com/RionDsilvaCS/contextual-retrieval-by-anthropic"
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
