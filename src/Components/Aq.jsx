import { GoArrowLeft, GoArrowRight } from "react-icons/go";

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
      {/* reviews section */}
      <div className="w-11/12 mx-auto mt-10">
        <h1 className="font-manrope text-sm text-center md:text-xl font-semibold">“ They thoroughly analyze our industry and target audience, allowing them to develop customized campaigns that effectively reach and engage our customers. Their creative ideas and cutting-edge techniques have helped us stay ahead of the competition.”</h1>

        <div className="grid md:grid-cols-2 grid-cols-1 justify-between items-center gap-2 mt-8">
          <div className="flex items-center gap-2 ">
            <div className="h-10 w-10 bg-slate-500 rounded-full"></div>
            <div className="">
              <h1>Michael Kaizer</h1>
              <p className="text-sm text-slate-500">CEO of Basecamp Corp</p>
            </div>
          </div>
          <div className="flex gap-3 items-center">
            <button className="btn btn-outline rounded-full px-5"><GoArrowLeft /></button>
            <p><span className="font-semibold">01</span>/05</p>
            <button className="btn btn-outline rounded-full px-5 bg-btnbg text-white"><GoArrowRight /></button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Aq;
