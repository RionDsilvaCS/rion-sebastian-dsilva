import React from 'react'
import "./About.css"
import github_logo  from '../../assets/github.svg';
import x_logo  from '../../assets/x.svg';
import linkedin_logo  from '../../assets/linkedin.svg';


export function About() {
  return (
    <div className='gen-body about-body'>
      <p className='title'>About me</p>
      <p className='about-text'>
      Hi there! I'm <b>Rion Sebastian Dsilva</b><br/>
      Pursuing as a computer science student at VIT-AP University, currently final year of my B.Tech degree.<br/>
      I'm a <b>Deep Learning Engineer</b> and actively pursuing by immersing myself in various projects.<br/><br/>
      I've gained experience in exciting areas like <b>Computer Vision and Gen AI</b>. This diverse exposure has equipped me with a strong foundation for solving problems from different angles and finding innovative solutions. <br/><br/>
      I'm constantly eager to learn and grow, and I'm excited to see what the future holds in the ever-evolving world of technology. 
      If you're looking for a dedicated and enthusiastic individual with a passion for Deep Learning and Gen AI, feel free to <b>connect!</b>
      </p>
      <div className='connect'>
        <p className='connect-txt'>Connect</p>
        <div className='connect-social'>
          <a href='https://github.com/RionDsilvaCS' target='_blank' className='connect-circle'><img src={github_logo}/></a>
          <a href='https://www.linkedin.com/in/rion-dsilva-043464229/' target='_blank' className='connect-circle'><img src={linkedin_logo}/></a>
          <a href='https://twitter.com/rion_dsilva_cs' target='_blank' className='connect-circle'><img src={x_logo}/></a>
        </div>
      </div>
    </div>
  )
}
