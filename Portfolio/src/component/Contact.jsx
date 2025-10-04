import React from "react";
import Founder from "./FounderDetails/Founder";
import UserData from "./UserData";

const Contact =() =>{
    const user = UserData();
    return(
      

        user.map((ele)=>(
            <Founder 
            name ={ele.name}
            email ={ele.Email}
            contact={ele.contact}
            desi ={ele.designation}
            />
        ))
        
    );
}
export default Contact;