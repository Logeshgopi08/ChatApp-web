import { createSlice } from "@reduxjs/toolkit";

const contactSlice = createSlice({
    name:"contact",
    initialState:{
        contactList:[]
    },
    reducers:{
        addContacts:(state,action)=>{
            state.contactList.push(action.payload);
        }
    }
});

export const {addContacts} = contactSlice.actions;
export default contactSlice.reducer;