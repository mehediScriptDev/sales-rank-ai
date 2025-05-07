import { FaRegThumbsDown, FaRegThumbsUp } from "react-icons/fa";
import { TfiReload } from "react-icons/tfi";
import { MdContentPaste } from "react-icons/md";
import { IoVolumeMediumOutline } from "react-icons/io5";
import { MdCloudDone } from "react-icons/md";
import { BsGraphUpArrow } from "react-icons/bs";
import { GrDocumentStore } from "react-icons/gr";
import { IoChatbubbleEllipses } from "react-icons/io5";

const Chatsection = () => {
  return (
    <section className="bg-gradient-to-r from-bg py-10 to-toBg  min-h-screen flex justify-center">
      <div className="w-11/12 mx-auto">
        <div className="max-h-2 pb-6">
          <h1 className="text-2xl text-gray-300">Live Ai Coach</h1>
          <p className="text-white text-3xl md:text-4xl hidden md:flex">
            Take a Suggestion Coaching{" "}
          </p>
        </div>
        <div className="flex gap-3 justify-center w-10/12 mx-auto flex-col md:flex-row  h-full items-center">
          <div className="bg-likebg  rounded-lg">
            <div className="">
              <h1 className="text-black bg-white px-3 font-bold py-4">
                AI Sales Coach
              </h1>
              <div className="flex justify-between items-center px-4  pt-3 gap-2 py-10 md:pb-36 ">
                <div className="avatar">
                  <div className="w-10 rounded-full">
                    <img src="https://img.daisyui.com/images/profile/demo/yellingcat@192.webp" />
                  </div>
                </div>
                <p className="bg-white max-w-2xl rounded-md px-5">
                  Hello! I'm your AI sales coach. How can I help you improve
                  your sales performance today?
                </p>
              </div>
            </div>

            <div className="flex gap-3 px-3 pb-3 flex-col bg-white py-2">
              <div className="flex gap-3 px-2">
                <p className="bg-anotherbg hidden md:flex px-2 rounded-lg text-btnbg">
                  How do I handle objections?
                </p>
                <p className="bg-anotherbg  px-2 rounded-lg text-btnbg">
                  Closing techniques
                </p>
                <p className="bg-anotherbg px-2 rounded-lg text-btnbg">
                  Negotiation tips
                </p>
              </div>
              <div className="flex gap-3 ">
                <input
                  className="w-full border-2 border-gray-300 h-10 px-2"
                  placeholder="Ask anything you need"
                  type="text"
                  name=""
                  id=""
                />
                <button className="btn bg-btnbg text-white">Send</button>
              </div>
            </div>
          </div>

          <div className="bg-likebg  px-3 flex flex-col py-3 gap-y-6 rounded-full">
            {/* littte card section */}
            <TfiReload />
            <FaRegThumbsUp />
            <FaRegThumbsDown />
            <MdContentPaste />
            <IoVolumeMediumOutline />
          </div>

          <div className="flex flex-col gap-y-3 ">
            <div className="bg-anotherbg flex flex-col gap-6 w-full px-3 py-2 rounded-md">
              <h1 className="text-3xl">Real-time Analysis</h1>
              <div className="bg-white">
                <p className="flex items-center gap-1 px-2 py-1 rounded-md">
                  <MdCloudDone className="text-green-500" /> Confidence Level
                </p>
                <div className="flex gap-1 justify-center items-center">
                  <progress
                    className="progress progress-success w-56"
                    value="40"
                    max="100"
                  ></progress>
                  <p>40%</p>
                </div>
              </div>
              <div className="">
                <div className="bg-white px-2 py-1 rounded-md">
                  <p className="flex items-center gap-1 ">
                    <BsGraphUpArrow className="text-green-500" /> Confidence
                    Level
                  </p>
                  <p>85% improvement in objection handling</p>
                </div>
              </div>
            </div>

            <div className="bg-anotherbg px-3 py-2 rounded-md">
              <h1 className="text-3xl pb-2">Quick Actions</h1>
              <div className="flex justify-between">
                <div className="bg-white px-2 py-1 rounded-md">
                  <GrDocumentStore />
                  <p>Generate Script</p>
                </div>

                <div className="bg-white px-2 py-1 rounded-md">
                  <IoChatbubbleEllipses />
                  <p>Practice Pitch</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Chatsection;
