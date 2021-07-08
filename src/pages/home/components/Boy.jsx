import React from 'react'
import { ReactComponent as BoyPic } from '../images/boy.svg'
import SUButton from './small/SUButton'
import "./boy.scss"



const Boy = () => {
  return (
    <div className="home_boy">
      <div className="home_boy-block">
        <BoyPic className="home_boy-block-pic" />
        <div className="home_boy-block-content">
          <h1 className="home_boy-block-content-title">Let's get acquainted</h1>
          <h2 className="home_boy-block-content-subtitle">I'm a good front-end developer</h2>
          <p className="home_boy-block-content-text">What defines a good front-end developer is one that has skilled knowledge of HTML, CSS, JS with a vast understanding of User design thinking as they'll be building web interfaces with accessibility in mind. They should also be excited to learn, as the world of Front-End Development keeps evolving.</p>
          <SUButton onSignUp={true} title={"Sign up"} />
        </div>
      </div>
    </div>
  )
}

export default Boy
