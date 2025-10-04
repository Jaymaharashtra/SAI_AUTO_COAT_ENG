import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleUser } from "@fortawesome/free-solid-svg-icons";
import "./Founder.css"

const Founder = (props)=>{
    return(
        <>
        <div className="card text-center inline-block mx-50 mt-15 mb-15 ">

            <span className="">
            <FontAwesomeIcon className="text-8xl mt-5" icon={faCircleUser} />
            <h3 className="font-bold">{props.name}</h3>
            <h2 className="text-bule italic">{props.desi}</h2>
            <p>{props.contact}</p>
            <p>{props.email}</p>
            </span>
        </div>
        </>
    );
}
export default Founder;