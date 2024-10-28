import { IoMdAdd } from "react-icons/io";
import { IoSend } from "react-icons/io5";
const MessageContainer = () => {
  return (
    <div>
      <div className="bg-gray-400 h-[29rem] flex flex-col-reverse  ">
        <div className="flex flex-col-reverse ">
          <div className="chat chat-end">
            <div className="chat-image avatar">
              <div className="w-10 rounded-full">
                <img
                  alt="Tailwind CSS chat bubble component"
                  src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
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
          <div className="chat chat-start">
            <div className="chat-image avatar">
              <div className="w-10 rounded-full">
                <img
                  alt="Tailwind CSS chat bubble component"
                  src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
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
        </div>
      </div>
      <div className="flex w-full items-center mx-1">
        <div className="w-10 rounded-full flex justify-center pt-3 h-10 bg-green-500 mt-1">
          <IoMdAdd size={20} />
        </div>
        <input
          type="text"
          placeholder="Search"
          className="input input-bordered w-full  mt-1 mx-2"
        />
        <div className="w-16 h-10 bg-green-500 rounded-full flex justify-center pt-2 mx-1">
          <IoSend size={20} />
        </div>
      </div>
    </div>
  );
};

export default MessageContainer;

