import React from 'react'
import SUButton from './small/SUButton'
import './girl.scss'

const Girl = () => {

  return (
    <div className="girl">
      <div className="home_girl">
        <div className="home_girl-block">
          <h1 className="home_girl-block-title">Test assignment for front-end developers</h1>
          <p className="home_girl-block-text">Front-end developers make sure the user sees and interacts with all the necessary elements to ensure conversion. Therefore, responsive design, programming languages and specific frameworks are the must-have skillsets to look for when assessing your front-end developers.</p>
          <p className="home_girl-block-textMob">Front-end developers make sure the user sees and interacts with all the necessary elements to ensure conversion.</p>
          <SUButton onSignUp={true} title={"Sign up"} />
        </div>
      </div>
    </div>
  )
}

export default Girl
