const ContactBox =({data})=>{
    console.log(data);
    
    
    return (
        <div>
 <div className="Conversation-Message">
          <div className="flex shadow-md py-1 w-[100%]">
            <div className="w-10 rounded-full">
              <img
                className="rounded-full"
                alt="dp"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCvFCNx3XOOU9GirFqWfVMedEN_EIzJS-aKg&s"
              />
            </div>
            <h2 className="mx-2 text-black">Arun</h2>
          </div>
         
        </div>
        </div>
    )
}

export default ContactBox;