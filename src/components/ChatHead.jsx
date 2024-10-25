import { FaPhoneAlt } from "react-icons/fa";
import { FaVideo } from "react-icons/fa";
import { IoMdMore } from "react-icons/io";
const ChatHead =()=>{
    return(
        <div>
               <div className="bg-green-400 py-1 px-1 flex justify-between items-center">
                <div className="flex">
                <div className="w-11 rounded-full">
                    <img className="rounded-full"
                     alt="dp" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCvFCNx3XOOU9GirFqWfVMedEN_EIzJS-aKg&s"/>
                </div>
                <div className="mx-2">
                    <h2>Arun</h2>
                    <p>Online</p>
                </div>
                </div>
                <div className="flex mr-4">
                <ul className="flex">
                    <li className="mx-4"><FaPhoneAlt  size={22   } /></li>
                    <li className="mx-4"><FaVideo size={22} /></li>
                    <li className="mx-4">
                    <IoMdMore  size={24}/>
                    </li>
                </ul>
                </div>
            </div>
        </div>
    )
}

export default ChatHead;