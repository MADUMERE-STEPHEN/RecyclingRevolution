import React from "react";
import DrLane from '../dr.jane L.jpeg'
import Jane from '../jane goodall.jpeg'
import Ed from '../components/ed begley.jpeg'
import Mahatama from '../components/mahatma_gandhi_9a7bf75be9.jpg'
import Unkn from '../unknown.jpeg'

function Quotes(){
    return <div className="container">


<div class="row featurette my-5">
    <h1 className="text-center py-4">Quotes</h1>
    <hr class="featurette-divider"/>
  <div class="col-md-7 ">
    <h2 class="featurette-heading fw-normal lh-1">Jane Goodall
    </h2>
    <p class="lead"><i>"Waste is a terrible thing. We need to learn to reduce, reuse, and recycle."
    </i></p>
  </div>
  <div class="col-md-5">
    <img src={Jane} height='100' width='100' alt="" />
  </div>
</div>

<hr class="featurette-divider"/>

<div class="row featurette">
  <div class="col-md-7 order-md-2 ">
    <h2 class="featurette-heading fw-normal lh-1">Dr. Jane Lubchenco
    </h2>
    <p class="lead"><i>Recycling is a key to a more sustainable future. It's a way to turn waste into a resource."
    </i></p>
  </div>
  <div class="col-md-5 order-md-1">
  <img src={DrLane} height='100' width='100' alt="" />
  </div>
</div>

<hr class="featurette-divider" />

<div class="row featurette">
  <div class="col-md-7">
    <h2 class="featurette-heading fw-normal lh-1">Unknown</h2>
    <p class="lead"><i>"Every small action counts, and recycling is an easy way to make a difference."
    </i></p>
  </div>
  <div class="col-md-5">
  <img src={Unkn} height='100' width='100' alt="" />
  </div>
</div>

<hr class="featurette-divider" />
<div class="row featurette">
  <div class="col-md-7 order-md-2 ">
    <h2 class="featurette-heading fw-normal lh-1">Mahatma Gandhi
    </h2>
    <p class="lead"><i>"The earth has enough resources for our need, but not enough for our greed."
    </i></p>
  </div>
  <div class="col-md-5">
  <img src={Mahatama} height='100' width='100' alt="" />
  </div>
</div>
<hr class="featurette-divider" />
<div class="row featurette">
  <div class="col-md-7 ">
    <h2 class="featurette-heading fw-normal lh-1">Ed Begley Jr.
    </h2>
    <p class="lead"><i>"Recycling is not just a good idea, it's a must."
    </i></p>
  </div>
  <div class="col-md-5">
  <img src={Ed} height='100' width='100' alt="" />
  </div>
</div>
<hr class="featurette-divider" />
<div class="row featurette">
  <div class="col-md-7 order-md-2">
    <h2 class="featurette-heading fw-normal lh-1">Unknown
    </h2>
    <p class="lead"><i>"We must reduce, reuse, and recycle. It's a matter of life and death."

    </i></p>
  </div>
  <div class="col-md-5">
  <img src={Unkn} height='100' width='100' alt=""  />
  </div>
</div>

<hr class="featurette-divider" />
<div class="row featurette">
  <div class="col-md-7">
    <h2 class="featurette-heading fw-normal lh-1">Unknown
    </h2>
    <p class="lead"><i>"The best way to reduce waste is to not create it in the first place."

    </i></p>
  </div>
  <div class="col-md-5">
  <img src={Unkn} height='100' width='100' alt=""  />
  </div>
</div>
<hr class="featurette-divider" />
  </div>
}

export default Quotes;