import React from "react";

function Donate(){
    return <main className="container my-5" id="donate">
        <h1 className="text-center  display-2 ">Make a Difference, Donate Now</h1>
    <div class="row row-cols-1 row-cols-md-2 mb-3 text-center my-5">

      <div class="col">
        <div class="card mb-4 rounded-3 shadow-sm">
          <div class="card-header py-3">
            <h4 class="my-0 fw-normal">Seedling Supporter</h4>
          </div>
          <div class="card-body">
            <h1 class="card-title pricing-card-title">$10-$24<small class="text-body-secondary fw-light">/mo</small></h1>
            <ul class="list-unstyled mt-3 mb-4">
              <li>Helps plant 10 trees in a reforestation project
              </li>
              <li>Supports local community recycling programs
              </li>
              <li> Contributes to environmental education for underprivileged children
              </li>
            </ul>
            <button type="button" class="w-100 btn btn-lg btn-success">Donate Now</button>
          </div>
        </div>
      </div>
      <div class="col">
        <div class="card mb-4 rounded-3 shadow-sm border-success">
          <div class="card-header py-3 text-bg-success border-success">
            <h4 class="my-0 fw-normal">Eco-Champion</h4>
          </div>
          <div class="card-body">
            <h1 class="card-title pricing-card-title">$25-$50<small class="text-body-secondary fw-light">/mo</small></h1>
            <ul class="list-unstyled mt-3 mb-4">
              <li>Funds the collection and recycling of 100 pounds of plastic waste
              </li>
              <li>Supports renewable energy projects in underserved communities</li>
              <li>Contributes to wildlife conservation efforts and habitat restoration</li>
            </ul>
            <button type="button" class="w-100 btn btn-lg btn-success">Donate Now</button>
          </div>
        </div>
      </div>
    </div>


  </main>
}

export default Donate;