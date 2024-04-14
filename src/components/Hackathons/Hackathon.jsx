import React from 'react'
import './Hackathon.css'
import hackquest_img from '../../assets/hackathons/hackquest.svg'
import framex_img from '../../assets/hackathons/framex.svg'
import proglint_img from '../../assets/hackathons/proglint.svg'
import hackday_img from '../../assets/hackathons/hackday.svg'
import bnmit_img from '../../assets/hackathons/bnmit.svg'
import arrow_btn from '../../assets/arrow_btn.svg'

function HackathonCards(prop){
  const hackathon_list = prop.hackathon_cards.map((card) =>
    <div className='project-card'>
      <img className='card-img' src={card.img_url}/>
      <div className='bottom-title'>
        <p>{card.txt}</p>
      </div>
      <a href={card.post_link} target="_blank" className='view-button'>
        <p>View</p>
        <img src={arrow_btn} />
      </a>
    </div>
  );

  return (
    <div className='hackathon-cards'>
      {hackathon_list}
    </div>
  )
}


export function Hackathon() {
  const hackathon_cards = [
    {
      id: 10,
      img_url: proglint_img,
      txt: "Winners",
      post_link: "https://www.linkedin.com/posts/proglint-software-solutions_proglintcomputervision2k23-proglintcomputervision2k23-ugcPost-7115660127155752960-g1l3?utm_source=share&utm_medium=member_desktop"
    },
    {
      id: 12,
      img_url: bnmit_img,
      txt: "1st Runner up",
      post_link: "https://www.linkedin.com/posts/rion-dsilva-043464229_hackathon-evolve36hourshackathon-ibm-activity-7109118177619410944-7TnX?utm_source=share&utm_medium=member_desktop"
    },
    {
      id: 13,
      img_url: hackday_img,
      txt: "2nd Runner up",
      post_link: "https://www.linkedin.com/posts/rion-dsilva-043464229_hackathon-iplhackday-vitap-activity-7109861184098500608-5xdK?utm_source=share&utm_medium=member_desktop"
    },
    {
      id: 14,
      img_url: hackquest_img,
      txt: "1st Runner up",
      post_link: "https://www.linkedin.com/posts/rion-dsilva-043464229_hackquest-vitap-trafficsafety-activity-7175110300680028160-mU3M?utm_source=share&utm_medium=member_desktop"
    },
    {
      id: 15,
      img_url: framex_img,
      txt: "1st Runner up",
      post_link: "https://www.linkedin.com/posts/rion-dsilva-043464229_framexwebhack-vitap-jobvista-activity-7175491191126306817-tLOe?utm_source=share&utm_medium=member_desktop"
    }
  ];

  return (
    <div className='gen-body' id='hackathons'>
      <p className='title'>Hackathons</p>
      <HackathonCards hackathon_cards={hackathon_cards}/>
    </div>
  )
}
