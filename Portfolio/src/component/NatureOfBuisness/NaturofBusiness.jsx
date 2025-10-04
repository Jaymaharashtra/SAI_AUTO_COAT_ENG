import React from "react";
import "./NatureofBusiness.css";

const NatureOfBusiness = () => {
  return (
    <div className="container flex flex-col md:flex-row justify-evenly items-start p-6 gap-6">
      {/* Left Side - Title */}
      <h2 className="text-2xl md:text-3xl font-sans font-bold text-red-800 text-center md:text-left">
        NATURE OF BUSINESS
      </h2>

      {/* Right Side - Info Box */}
      <div className="content bg-white shadow-md rounded-2xl p-6 w-full md:w-1/2">
        <ul className="list-disc list-inside text-gray-600 leading-relaxed space-y-3">
          <li>
            Blasting and Paint Applicator for MRF, Nippon, Berger, Jotun, Renner
            for Industrial Coatings – PU & Epoxy Paints on MS, GI, SS, Wood
            Coatings, Wall Paints, Specialty coatings.
          </li>
          <li>
            Building Painting Service – We provide reliable and trusted painting
            services to corporate offices, industries, buildings, towers,
            societies, hospitals, schools, colleges, and homes.
          </li>
          <li>
            Distributors for PU, Epoxy Wood, Glass Paints, Paint Finishing
            products, Abrasives, Polishes, waterproofing & hardening chemicals.
            Major Companies: MRF, Nippon, Renner, Berger Paints, Esdee Paints,
            Norton, 3M, Sun Infra Chem, Sika.
          </li>
        </ul>
      </div>
    </div>
  );
};

export default NatureOfBusiness;
