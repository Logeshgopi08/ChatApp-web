/* eslint-disable react-hooks/exhaustive-deps */
import axios from "axios";
import { useEffect } from "react";
// import { useDispatch } from "react-redux";

const useContactList = (setContactList)=>{

    // const dispatch = useDispatch();

    const getcontactList=async(setContactList)=>{
      try {
        const res = await axios.get("http://localhost:8000/chatapp/user",{withCredentials:true});
        
        console.log(res.data);
        return setContactList(res.data)
        

      
      } catch (error) {
        console.log(error);
        
      }
    }

    useEffect(()=>{
        getcontactList();
    },[])
}

export default useContactList;