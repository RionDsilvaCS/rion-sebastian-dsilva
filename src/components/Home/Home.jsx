import React from 'react'
import './Home.css'
import my_img from '../../assets/my_pic.svg'
export function Home() {
  return (
    <div className='gen-body-home'>
      <div className='sub-text'>
        <p>I'M</p>
        <p className='txt-medium'>ML<br/>Engineer</p>
      </div>
      <div className='main-frame'>
        <div className='back-rec'></div>
        <img src={my_img} />
        <p className='my-name'>Rion Sebastian Dsilva</p>
        <div className='white-grad'></div>
      </div>
    </div>
  )
}
