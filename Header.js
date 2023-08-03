import React from "react";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './Header.css';


function Header01(){
    return(
       
        <nav class="navbar navbar-expand-lg navbar-light bg-white manohar">
  <div class="container">
    <a class="navbar-brand" href="#">
        
            <h1 className="heading01">edyoda</h1>
            <p className="para01">Stories</p>
    </a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarText">
      <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
      <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle manu01" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Explore Categories
          </a>
          <ul class="dropdown-menu manu02" aria-labelledby="navbarDropdownMenuLink">
            <li><a class="dropdown-item" href="#">Artificial Intelligence</a></li>
            <li><a class="dropdown-item" href="#">Cloud Computing</a></li>
            <li><a class="dropdown-item" href="#">DevOps</a></li>
            <li><a class="dropdown-item" href="#">Programming Languages</a></li>
            <li><a class="dropdown-item" href="#">Mobile Application Development </a></li>
            <li><a class="dropdown-item" href="#">Technology and Tools</a></li>
            <li><a class="dropdown-item" href="#">Get a Job in a Tech Company</a></li>
            <li><a class="dropdown-item" href="#">Others</a></li>
          </ul>
        </li>
      </ul>
      <span class="navbar-text">
        <button className="btn btn-primary button01">Go To Main Website</button>
      </span>
    </div>
  </div>
</nav>
        
    )
}

export default Header01;