import { useState } from "react";

const Login = () => {

    const [isLogin,setIsLogin] = useState(true);
  return (
    <div className="flex justify-center mt-2">
      <div className="card bg-white w-96 shadow-xl">
          <h1 className="mx-2 mt-2 text-xl font-bold text-green-600">{isLogin?"Login": "Register"}</h1>
        <div className="card-body ">
          <ul>
            { !isLogin &&<div>
            <input type="text" placeholder="FullName" className="input input-bordered w-full max-w-xs my-1" />
            </div>}
          <input type="text" placeholder="Email" className="input input-bordered w-full max-w-xs my-1" />
          <input type="text" placeholder="Password" className="input input-bordered w-full max-w-xs my-1" />
          {!isLogin && <div>
          <input type="text" placeholder="Confirm Password" className="input input-bordered w-full max-w-xs my-1" />
          <input type="text" placeholder="Phone Number" className="input input-bordered w-full max-w-xs my-1" />
          </div>}
          <p onClick={()=>setIsLogin(!isLogin)}
           className="font-semibold text-gray-700 my-1 hover:underline">{isLogin?"New User? Register":"Already have a Account? Login"}</p>
          <div>
          <button className="btn btn-primary w-full">{isLogin?"Login":"Register"}</button>
          </div>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Login;
