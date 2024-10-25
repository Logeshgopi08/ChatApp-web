import { MdOutlineMessage } from "react-icons/md";
import { IoNotifications } from "react-icons/io5";
import { IoMdSettings } from "react-icons/io";
import { IoLogOut } from "react-icons/io5";
const FirstContainer =  ()=>{
    return (
        <div className="flex">
            <div className="bg-white h-screen flex flex-col justify-between  shadow-lg ">
                  <div className="mx-2 my-5">
                    <ul className="">
                        <div >
                            <div className="w-14 rounded-full ">
                            <img  className="rounded-full" 
                            alt="dp" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCvFCNx3XOOU9GirFqWfVMedEN_EIzJS-aKg&s"/>
                            </div>
                        </div>
                        <div className=" flex items-center my-3 ">
                        <MdOutlineMessage  />
                        <p className="text-green-600">Chats</p>
                        </div>
                       <div className=" flex items-center my-3">
                       <IoNotifications />
                          <p>Notify</p>
                       </div>
                        <div  className=" flex items-center my-3">
                        <IoMdSettings />
                        <p>Settings</p>
                        </div>
 
                    </ul>
                  </div>
                  <div className="mb-7 flex items-center">

                  <IoLogOut />
                  <p>Logout</p>
                  </div>
            </div>
            <div className="Conversation w-full">
                <div className="Search">

                <input type="text" placeholder="Search" className="input input-bordered w-full max-w-xs mt-1" />
                <div className="divider divider-primary"></div>

                </div>


                <div className="Conversation-Message">
                    <div className="flex shadow-md py-1 w-[100%]">
                        <div className="w-10 rounded-full">
                            <img className="rounded-full"
                            alt="dp" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCvFCNx3XOOU9GirFqWfVMedEN_EIzJS-aKg&s" />
                        </div>
                        <h2 className="mx-2 text-black">Arun</h2>
                    </div>
                    <div className="flex shadow-md py-1 w-[100%] my-1">
                        <div className="w-10 rounded-full">
                            <img className="rounded-full"
                            alt="dp" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCvFCNx3XOOU9GirFqWfVMedEN_EIzJS-aKg&s" />
                        </div>
                        <h2 className="mx-2 text-black">Karthi</h2>
                    </div>
                       
                </div>
            </div>
        </div>
    );
}

export default FirstContainer;