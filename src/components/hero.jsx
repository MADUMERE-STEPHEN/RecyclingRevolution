import React from "react";
import heroImg from '../—Pngtree—man throw waste in recycle_14597158.png'
function Hero(){
    return <div class="container my-3">
    <div class="row p-4 pb-0 pe-lg-0 pt-lg-5 align-items-center rounded-3 border shadow-lg">
      <div class="col-lg-7 p-3 p-lg-5 pt-lg-3">
        <h1 class="display-4 fw-bold lh-1 text-body-emphasis">The Power of Recycling</h1>
        <p class="lead">By recycling, we can conserve natural resources, reduce landfill waste, and decrease greenhouse gas emissions. Join the movement towards a more sustainable future</p>
        <div class="d-grid gap-2 d-md-flex justify-content-md-center mb-4 mb-lg-3">
          <button type="button" class="btn btn-success btn-lg px-4  my-but fw-bold">GET STARTED</button>
        </div>
      </div>
      <div class="col-lg-4 offset-lg-1 p-0 overflow-hidden ">
          <img class="rounded-lg-3" src={heroImg} alt="" width="600" />
      </div>
    </div>
  </div>
}

export default Hero;