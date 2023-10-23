import React, { Component } from 'react'
import { Link } from "react-router-dom";


          //Arrow function named as Navbar
  const NavBar = ()=>{

  
    return (
      <div>

        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          <div classame="container-fluid">
            <Link className="navbar-brand" href="/">News-World</Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
              aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <Link className="nav-link" aria-current="page" to="/">Home</Link>
                </li>
                {/* <li className="Nav-item"><Link className="nav-link" href="/about">about</Link></li> */}





                <li className="nav-item"><Link className="nav-link" to="/business">business</Link></li>
                <li className="nav-item"><Link className="nav-link" to="/entertainment">Cinema</Link></li>
                {/* <li className="nav-item"><Link className="nav-link" href="/general">general</Link></li> */}
                <li className="nav-item"><Link className="nav-link" to="/health">health</Link></li>
                <li className="nav-item"><Link className="nav-link" to="/science">science</Link></li>
                <li classame="nav-item"><Link className="nav-link" to="/sports">sports</Link></li>
                <li classame="nav-item"><Link className="nav-link" to="/technology">technology</Link></li>
              </ul>
              {/* <form cl<assame="d-flex">
        <input cl<assame="form-control me-2" type="se<arch" pl<aceholder="Se<arch" <ari<a-l<abel="Se<arch"/>
        <button cl<assame="btn btn-outline-success" type="submit">Se<arch</button>
      </form> */}
            </div>
          </div>
        </nav>



      </div>
    )
  

}

export default NavBar



// <api key 6<a0b28ff5eb249579dbbe18fb34<ade94
