import React from "react";
import paper from '../paper-craft-design-recycle-icon.jpg'
function Navbar(){
    return      <nav class="navbar navbar-expand-lg my-nbg shadow ">
    <div class="container-fluid">
      <a class="navbar-brand mx-2" href="#">
        <img src={paper} alt="logo" height="70" width="70"/>
      </a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse justify-content-md-center " id="navbarNav">
        <ul class="navbar-nav ">
          <li class="nav-item">
            <a class="nav-link active text-$white" aria-current="page" href="#">Home</a>
          </li>
          <li class="nav-item">
            <a class="nav-link my-nlink" href="#learn">Learn</a>
          </li>
          <li class="nav-item ">
            <a class="nav-link my-nlink" href="#donate">Donate</a>
          </li>

          <div class="dropdown">
  <button type="button" class="btn btn-success dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false" data-bs-auto-close="outside">
    Sign up
  </button>
  <form class="dropdown-menu p-4">
    <div class="mb-3">
      <label for="exampleDropdownFormEmail2" class="form-label">Email address</label>
      <input type="email" class="form-control" id="exampleDropdownFormEmail2" placeholder="email@example.com" />
    </div>
    <div class="mb-3">
      <label for="exampleDropdownFormPassword2" class="form-label">Password</label>
      <input type="password" class="form-control" id="exampleDropdownFormPassword2" placeholder="Password" />
    </div>
    <div class="mb-3">
      <div class="form-check">
        <input type="checkbox" class="form-check-input" id="dropdownCheck2" />
        <label class="form-check-label" for="dropdownCheck2">
          Remember me
        </label>
      </div>
    </div>
    <button type="submit" class="btn btn-success">Sign in</button>
  </form>
</div>
        </ul>
      </div>
    </div>
  </nav>
}

export default Navbar;

