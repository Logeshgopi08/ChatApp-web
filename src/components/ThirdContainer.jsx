import { FaMobileAlt } from "react-icons/fa";
const ThirdContainer = () => {
  return (
    <div>
      <div className=" mt-14 ">
        <ul className="items-center">
        <div className="w-20 rounded-full">
          <img
            className="rounded-full"
            alt="dp"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCvFCNx3XOOU9GirFqWfVMedEN_EIzJS-aKg&s"
          />
        </div>
        <h1 className="font-bold text-lg text-black my-2"> Logesh</h1>
        <p>Love With a Beautiful Woman</p>
        </ul>
        
        
      </div>
      <div>
        <div className="flex justify-between items-center bg-gray-800 py-2 my-2">
            <div>
                <h2>Mobile Number</h2>
                <h3>9879766756</h3>
            </div>
            <FaMobileAlt  size={20}/>
        </div>
        <div className="flex justify-between items-center bg-gray-800 py-2">
            <div>
                <h2>Email Address</h2>
                <h3>logesh@gmail.com</h3>
            </div>
            <FaMobileAlt  size={20}/>
        </div>
      </div>
      <div className="my-4">
      <button className="btn btn-primary w-full">Edit Profile</button>
      </div>
    </div>
  );
};

export default ThirdContainer;
