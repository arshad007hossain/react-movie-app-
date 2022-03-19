import React from 'react'

export default function Form() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <h2><a href="NewApp">Movie ShowCase</a></h2>
         <button className="navbar-toggler" type="button">
         <span className="navbar-toggler-icon"></span>
         </button>
         <div className="collapse navbar-collapse" id="navbarSupportedContent">
         <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="N">Movie Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="N">Movie Link</a>
        </li>
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="N" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Dropdown
          </a>
          <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><a className="dropdown-item" href="N">Action</a></li>
            <li><a className="dropdown-item" href="N">Another action</a></li>
            <li><a className="dropdown-item" href='N'>Hello</a></li>
            <li><a className="dropdown-item" href="N">Something else here</a></li>
          </ul>
        </li>
      </ul>
      <form className="d-flex">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
        </div>
      </nav>

      <div>
        
      </div>
    </div>
  )
}
