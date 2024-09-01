import React from "react";
import LearnIMG from './pngegg (1).png'
function Info(){
    return <div className="container py-4 px-4 rounded text-center" id="learn">
        <h1 className="text-center my-5">Things To Know</h1>
        <div className="row row p-4 pb-0 pe-lg-0 pt-lg-5 align-items-cente">
            <div className="col-lg-7 p-3 p-lg-5 pt-lg-3">
        <p className="lead">Recycling is a vital practice that helps conserve natural resources, reduces landfill waste, and mitigates climate change. By recycling, we:
        
            <ul>
            <ol>
            - Conserve water, energy, and land
            </ol>
            <ol>
            - Reduce greenhouse gas emissions
            </ol>
            <ol>
            - Decrease pollution and waste
            </ol>
            <ol>
            - Preserve natural resources for future generations
            </ol>
            </ul>
            Every small action counts! Make a difference by:
            <ul>
            <ol>
            - Reducing your use of single-use plastics
            </ol>
            <ol>
            - Reusing bags, containers, and water bottles
            </ol>
            <ol>
            - Recycling paper, plastic, glass, and metal
            </ol>
            </ul>
            <span className="display-3 text-success">Together, let's create a sustainable future!</span></p>
            </div>
            <div class="col-lg-4 offset-lg-1 p-0 overflow-hidden ">
                    <img class="rounded-lg-3" src={LearnIMG} alt="" width="600" />
                </div>
        </div>
            
    </div>
   
}

export default Info;