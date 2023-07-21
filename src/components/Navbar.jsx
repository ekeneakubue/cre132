import React from 'react'
import './style.css'
import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <div>
        <nav class="navbar navbar-expand-lg mynavbar">
            <Link to="/" class="navbar-brand text-light"><img src='images/unn-logo.gif' alt='logo' className='mylogo'/> CRE132</Link>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <h2><i class="bi bi-list text-light"></i></h2>
            </button>

            <div class="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
                <ul class="navbar-nav">
                    <li class="nav-item">
                        <Link to="/" class="nav-link text-light  mynav">Home</Link>
                    </li>
                    <li class="nav-item">
                        <Link to="/hardware" class="nav-link text-light mynav">Hardware</Link>
                    </li>
                    <li class="nav-item">
                        <Link to="/software" class="nav-link text-light mynav">Software</Link>
                    </li> 
                    <li class="nav-item">
                        <Link to="/troubleshoot" class="nav-link text-light mynav">Troubleshoot</Link>
                    </li>   
                    <li class="nav-item">
                        <Link to="/quiz" class="nav-link text-light mynav" mynav>Quiz</Link>
                    </li>                   
                </ul>
                <form class="form-inline my-2 my-lg-0 my-sm-0 mysearch">
                    <div><input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" /></div>
                    <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                </form>
            </div>
        </nav>    
    </div>
  )
}
