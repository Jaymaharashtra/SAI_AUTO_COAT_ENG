import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleUser } from "@fortawesome/free-solid-svg-icons";
import "./Founder.css"

const Founder = (props)=>{
    return(
        <>
      <div className="bg-white shadow-lg rounded-2xl p-6 flex flex-col items-center text-center transition-transform transform hover:scale-105 w-full sm:w-72 md:w-80 mx-auto">
        {/* Profile Icon */}
        <FontAwesomeIcon
          className="text-7xl text-gray-400 mb-4 mt-3"
          icon={faCircleUser}
        />

        {/* Name */}
        <h3 className="text-lg md:text-xl font-bold text-gray-800">
          {props.name}
        </h3>

        {/* Designation */}
        <h2 className="text-red-700 italic text-sm md:text-base mb-2">
          {props.desi}
        </h2>

        {/* Contact Info */}
        <p className="text-gray-600 text-sm md:text-base">{props.contact}</p>
        <p className="text-gray-600 text-sm md:text-base">{props.email}</p>
      </div>
    </>
    );
}
export default Founder;