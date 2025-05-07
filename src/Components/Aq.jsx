import React from "react";

const Aq = () => {
  return (
    <section className="w-10/12 mx-auto mt-16 relative">
      <div className="">
        <p className="text-left pb-3">Frequently Asked questions</p>
        <h1 className="font-manrope max-w-2xl mx-auto text-3xl md:text-4xl text-center">
          Constant collaboration is how we roll.Let's see if we are a good fit.
        </h1>
      </div>
      <div className="mt-6 bg-gray-100 *:font-manrope">
        <div className="collapse collapse-plus  border border-base-300">
            
          <input type="radio" name="my-accordion-3" defaultChecked />
          <div className="collapse-title  text-2xl md:text-3xl">
          <span className="text-amber-600">01</span>   Why should i choose humestic?
          </div>
          <div className="collapse-content text-sm">
            Click the "Sign Up" button in the top right corner and follow the
            registration process.
          </div>
        </div>
        <div className="collapse collapse-plus border border-base-300">
          <input type="radio" name="my-accordion-3" />
          <div className="collapse-title text-2xl md:text-3xl ">
          <span className="text-amber-600">02</span>   I like your works. How do we start a project?
          </div>
          <div className="collapse-content text-sm">
            Click on "Forgot Password" on the login page and follow the
            instructions sent to your email.
          </div>
        </div>
        <div className="collapse collapse-plus border border-base-300">
          <input type="radio" name="my-accordion-3" />
          <div className="collapse-title  text-2xl md:text-3xl">
          <span className="text-amber-600">03</span>    What info is required to get a quatation?
          </div>
          <div className="collapse-content text-sm">
            Go to "My Account" settings and select "Edit Profile" to make
            changes.
          </div>
        </div>
      </div>
      <div className="h-80 w-80 rounded-full bg-gradient-to-r from-gradient absolute top-8 left-8 right-8 to-togradient blur-2xl opacity-20">

      </div>
    </section>
  );
};

export default Aq;
