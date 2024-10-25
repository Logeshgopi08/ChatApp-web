import { IoMdAdd } from "react-icons/io";
import { IoSend } from "react-icons/io5";
const MessageContainer = ()=>{
    return (
        <div>
            <div className="bg-gray-400 h-[29rem] ">
                <h1>Message</h1>
            </div>
            <div className="flex w-full items-center mx-1">
                <div className="w-10 rounded-full flex justify-center pt-3 h-10 bg-green-500 mt-1">
                <IoMdAdd size={20} />
                </div>
                <input type="text" placeholder="Search" className="input input-bordered w-full  mt-1 mx-2" />
                <div className="w-16 h-10 bg-green-500 rounded-full flex justify-center pt-2 mx-1">
                <IoSend  size={20}/>
                </div>
            </div>
        </div>
    )
} 

export default MessageContainer;