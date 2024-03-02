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
      Hi there! I'm Rion Sebastian Dsilva.<br/>
      I'm a passionate computer science student at VIT-AP University, currently working towards my B.Tech degree. 
      My ultimate goal is to become a skilled Machine Learning Engineer, and I'm already actively pursuing this 
      dream by immersing myself in various projects.<br/><br/>
      I've gained experience in exciting areas like Deep Learning, Computer Vision, NLP, web development, and even 
      Android development. This diverse exposure has equipped me with a strong foundation in various programming languages 
      and frameworks, allowing me to approach problems from different angles and find innovative solutions. <br/><br/>
      I'm constantly eager to learn and grow, and I'm excited to see what the future holds in the ever-evolving world of technology. 
      If you're looking for a dedicated and enthusiastic individual with a passion for Machine Learning, feel free to explore my portfolio and get in touch!
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
