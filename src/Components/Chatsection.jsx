import { FaRegThumbsDown, FaRegThumbsUp } from "react-icons/fa";
import { TfiReload } from "react-icons/tfi";
import { MdContentPaste } from "react-icons/md";
import { IoVolumeMediumOutline } from "react-icons/io5";
import { MdCloudDone } from "react-icons/md";
import { BsGraphUpArrow } from "react-icons/bs";
const Chatsection = () => {
  return (
    <section className="bg-gradient-to-r from-bg to-toBg  min-h-screen ">
      <div className="w-11/12 mx-auto">
        <h1>Live Ai Coach</h1>
        <p>Take a Suggestion Coaching </p>

        <div className="flex">
          <div className="bg-likebg">
            <div className="chat chat-start">
              <div className="chat-image avatar">
                <div className="w-10 rounded-full">
                  <img
                    alt="Tailwind CSS chat bubble component"
                    src="https://img.daisyui.com/images/profile/demo/kenobee@192.webp"
                  />
                </div>
              </div>
              <div className="chat-header">
                Obi-Wan Kenobi
                <time className="text-xs opacity-50">12:45</time>
              </div>
              <div className="chat-bubble">You were the Chosen One!</div>
              <div className="chat-footer opacity-50">Delivered</div>
            </div>
            <div className="chat chat-end">
              <div className="chat-image avatar">
                <div className="w-10 rounded-full">
                  <img
                    alt="Tailwind CSS chat bubble component"
                    src="https://img.daisyui.com/images/profile/demo/anakeen@192.webp"
                  />
                </div>
              </div>
              <div className="chat-header">
                Anakin
                <time className="text-xs opacity-50">12:46</time>
              </div>
              <div className="chat-bubble">I hate you!</div>
              <div className="chat-footer opacity-50">Seen at 12:46</div>
            </div>
          </div>

          <div className="bg-likebg h-auto w-auto px-3 flex flex-col py-3 gap-y-6 rounded-full">
            {/* littte card section */}
            <TfiReload />
            <FaRegThumbsUp />
            <FaRegThumbsDown />
            <MdContentPaste />
            <IoVolumeMediumOutline />
          </div>

          <div>
            <div className="bg-anotherbg flex flex-col gap-6">
              <h1>Real-time Analysis</h1>
              <div className="bg-likebg">
                <p className="flex items-center gap-1">
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
              <div className="bg-likebg">
              <div className="bg-anotherbg">
                <p className="flex items-center gap-1">
                  <BsGraphUpArrow className="text-green-500" /> Confidence Level
                </p>
                <p>85% improvement in objection handling</p>
              </div>
            </div>
            </div>
            
            <div></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Chatsection;
