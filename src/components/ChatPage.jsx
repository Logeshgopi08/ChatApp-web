import FirstContainer from "./FirstContainer";
import SecondContainer from "./SecondContainer";
import ThirdContainer from "./ThirdContainer";

const ChatPage =()=>{
    return (
        <div className="h-screen bg-white flex  ">
            <div className=" w-[30%]">
                 <FirstContainer/>
            </div>
            <div className="w-[56.6%]">
            <SecondContainer/>
            </div>
            <div className="w-[20%]">
            <ThirdContainer/>
            </div>
        </div>
    );
}

export default ChatPage;