

import validator from "validator";

export const validateSignUp = async(fullName,emailId,password,confirmpassword,phoneNumber,setError)=>{

   
try {
   
   if(!fullName || !emailId || !password ||!confirmpassword ||!phoneNumber){
      return setError("Please Enter All Fields")
       
     }
     if(!validator.isEmail(emailId)){
         
          return setError("Please Enter Valid Email")
     }
     if(!validator.isStrongPassword(password)){
        return setError("Please Enter Strong Password");
         
     }
 
     if(password !== confirmpassword){
        return setError("Password is Not Match");
         
     }
     if(!validator.isMobilePhone(phoneNumber) ){
         return setError("Enter Valid PhoneNumber");
         
     }

   

    
    
     
   
} catch (error) {
   console.log(error);
   
}
    
    
 }
 


export const getContactList = async()=>{

 }
 
