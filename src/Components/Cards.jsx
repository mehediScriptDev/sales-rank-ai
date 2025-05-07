import robot1 from "./images/robot.png";
import robot2 from "./images/robot2.png";

const Cards = () => {
  return (
    <section className="w-11/12 mx-auto my-10">
        <div className="flex justify-between mt-10 gap-3 items-center">
            <div className="w-2/3">
                <h1 className="text-4xl  md:text-5xl ">Our Courses</h1>
                <p>Lorem ipsum dolor sit amet consectetur. Tempus tincidunt etiam eget elit id imperdiet et. Cras eu sit dignissim lorem nibh et. </p>
            </div>
            <div>
                <button className="btn btn-md py-2 px-3 md:btn-md bg-btnbg text-white">View All</button>
            </div>
        </div>
      <div className="grid md:grid-cols-2 grid-cols-1 gap-y-5 mt-8">
        <div className="bg-anotherbg rounded-xl shadow-md p-4 max-w-md mx-auto col-span-1">
          <img
            src={robot1}
            alt="Course Preview"
            className="w-full rounded-lg mb-4"
          />

          <div className="flex justify-between items-center mb-2">
            <div className="flex gap-2">
              <p className="bg-white text-sm px-3 py-1 rounded">4 Weeks</p>
              <p className="bg-white text-sm px-3 py-1 rounded">Beginner</p>
            </div>
            <p className="text-sm text-gray-700">By John Smith</p>
          </div>

          <h2 className="text-lg font-semibold mb-2">
            Web Design Fundamentals
          </h2>

          <p className="text-gray-600 text-sm mb-4 leading-relaxed">
            Learn the fundamentals of web design, including HTML, CSS, and
            responsive design principles. Develop the skills to create visually
            appealing and user-friendly websites.
          </p>

          <button className="bg-blue-900 text-white py-2 w-full rounded font-medium hover:bg-blue-800 transition">
            Get it Now
          </button>
        </div>

        <div className="bg-anotherbg rounded-xl shadow-md p-4 max-w-md mx-auto col-span-1">
          <img
            src={robot2}
            alt="Course Preview"
            className="w-full rounded-lg mb-4"
          />

          <div className="flex justify-between items-center mb-2">
            <div className="flex gap-2">
              <p className="bg-white text-sm px-3 py-1 rounded">4 Weeks</p>
              <p className="bg-white text-sm px-3 py-1 rounded">Beginner</p>
            </div>
            <p className="text-sm text-gray-700">By John Smith</p>
          </div>

          <h2 className="text-lg font-semibold mb-2">
            Web Design Fundamentals
          </h2>

          <p className="text-gray-600 text-sm mb-4 leading-relaxed">
            Learn the fundamentals of web design, including HTML, CSS, and
            responsive design principles. Develop the skills to create visually
            appealing and user-friendly websites.
          </p>

          <button className="bg-blue-900 text-white py-2 w-full rounded font-medium hover:bg-blue-800 transition">
            Get it Now
          </button>
        </div>
      </div>
    </section>
  );
};

export default Cards;
