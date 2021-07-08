import React from 'react'
import { ReactComponent as FootprintTheBiggest } from '../images/FootprintTheBiggest.svg'
import { ReactComponent as Footprint } from '../images/Footprint.svg'

import './footer.scss'


const Footer = () => {

  return (
    <footer>
      <div className="footprint">
        <FootprintTheBiggest className="footprint-big" /> 
        <Footprint className="footprint-medium" />
      </div>
      <div className="footerBlock" >
        <span className="footerBlock-text">© abz.agency specially for the test task</span>
      </div>
    </footer>
  )
}

export default Footer
