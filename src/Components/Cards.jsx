import React from "react";
import robot1 from "./images/robot.png";
import robot2 from "./images/robot2.png";

const Cards = () => {
  return (
    <section className=" min-h-screen mx-auto w-11/12">
      <div className="grid md:grid-cols-2  grid-cols-1 gap-3 justify-between items-center">
        <div className="card bg-anotherbg h-full shadow-sm col-span-1">
          <figure>
            <img src={robot1} alt="Shoes" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Card Title</h2>
            <p>
              A card component has a figure, a body part, and inside body there
              are title and actions parts
            </p>
              <button className="btn btn-primary">Buy Now</button>
            
          </div>
        </div>

        <div className="card bg-anotherbg shadow-sm h-full col-span-1">
          <figure>
            <img className="py-2" src={robot2} alt="Shoes" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Card Title</h2>
            <p>
              A card component has a figure, a body part, and inside body there
              are title and actions parts
            </p>
              <button className="btn btn-primary">Buy Now</button>
            
          </div>
        </div>
      </div>
    </section>
  );
};

export default Cards;
