import { useState } from "react";
// import useSignUp from "../hooks/useSignUp";
import {validateSignUp} from "../utlis/Helper";
import axios from "axios";
import { useDispatch,  } from "react-redux";
// import useSignUp from "../hooks/useSignUp";
import { addUser } from "../utlis/Slice/userSlice";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [fullName, setFullName] = useState("");
  const [emailId, setEmailID] = useState("");
  const [password, setPassword] = useState("");
  const [confirmpassword, setConfirmPassword] = useState("");
  const [phoneNumber, setPhoneNunber] = useState("");

  const [error, setError] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  // const userStore = useStore((store)=>store?.user);

  const handleSignUp = async () => {
    try {
      validateSignUp(
        fullName,
        emailId,
        password,
        confirmpassword,
        phoneNumber,
        setError
      );

      const res = await axios.post(
        "http://localhost:8000/chatapp/signup",
        {
          fullName,
          emailId,
          password,
          confirmpassword,
          phoneNumber,
        },
        { withCredentials: true }
      );

      dispatch(addUser(res?.data));
      return navigate("/");
    } catch (error) {
      console.log(error.message);
    }
  };

  const handleLogin = async()=>{
    const res = await axios.post("http://localhost:8000/chatapp/login",{emailId,password},{withCredentials:true});
      console.log(res.data);
      
        dispatch(addUser(res.data));
        
      return navigate("/");
  }

  return (
    <div className="flex justify-center mt-2">
      <div className="card bg-white w-96 shadow-xl">
        <h1 className="mx-2 mt-2 text-xl font-bold text-green-600">
          {isLogin ? "Login" : "Register"}
        </h1>
        <div className="card-body ">
          <ul>
            {!isLogin && (
              <div>
                <input
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  type="text"
                  placeholder="FullName"
                  className="input input-bordered w-full max-w-xs my-1"
                />
              </div>
            )}

            <input
              value={emailId}
              onChange={(e) => setEmailID(e.target.value)}
              type="text"
              placeholder="Email"
              className="input input-bordered w-full max-w-xs my-1"
            />

            <input
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              type="text"
              placeholder="Password"
              className="input input-bordered w-full max-w-xs my-1"
            />
            {!isLogin && (
              <div>
                <input
                  value={confirmpassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  type="text"
                  placeholder="Confirm Password"
                  className="input input-bordered w-full max-w-xs my-1"
                />
                <input
                  value={phoneNumber}
                  onChange={(e) => setPhoneNunber(e.target.value)}
                  type="text"
                  placeholder="Phone Number"
                  className="input input-bordered w-full max-w-xs my-1"
                />
              </div>
            )}
            <p className="text-red-600">{error}</p>
            <p
              onClick={() => setIsLogin(!isLogin)}
              className="font-semibold text-gray-700 my-1 hover:underline"
            >
              {isLogin ? "New User? Register" : "Already have a Account? Login"}
            </p>
            <div>
              <button onClick={isLogin?handleLogin :handleSignUp} className="btn btn-primary w-full">
                {isLogin ? "Login" : "Register"}
              </button>
            </div>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Login;
