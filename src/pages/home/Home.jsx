import React from 'react'
import './home.css'
import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <div className='container'>
      <div className="row">
        <div className="main">
          <div className="title">
            <h4>
              INTERACTIVE ASSESSMENT PLATFORM FOR EVALUATING STUDENTS LEARNING OUTCOMES IN 
              COMPUTER HARDWARE MAINTENANCE
            </h4>
            <div className="front-img">
              <img src='images/hdd.avif' alt='hdd'/>
            </div>
            <p>
              Departmet Of Computer & Robotics Education, Faculty Of Vocational & Technical Education,
              University Of Nigeria, Nsukka
            </p><br/>
            <h5>ONYEDIMARA, JUSTINA P.A</h5>
            <h6>PG/Ph.D/17/02253</h6>
          </div>
          <Link to="/hardware"><button type="button" class="btn btn-outline-light">Explore Hardware Devices</button></Link>
        </div>
      </div>
    </div>
  )
}
