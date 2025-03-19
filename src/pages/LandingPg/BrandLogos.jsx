import React from "react";
import versaceLogo from "../../assets/images/versace.png";
import gucciLogo from "../../assets/images/gucci.png";
import zaraLogo from "../../assets/images/zara.png";
import prada from "../../assets/images/prada.png";
import klein from "../../assets/images/klein.png";

const BrandLogos = () => {
  return (
    <div className="bg-black w-full grid grid-cols-3 gap-4 mx-auto px-8 py-2 items-center md:grid-cols-5 md:px-48">
      <img src={versaceLogo} alt="BrandLogos" className="w-20 md:w-24" />
      <img src={zaraLogo} alt="BrandLogos" className="w-16 md:w-20 mx-auto md:mx-0" />
      <img src={gucciLogo} alt="BrandLogos" className="w-20 md:w-24" />
        <img src={prada} alt="BrandLogos" className="w-20 md:w-24" />
      <img src={klein} alt="BrandLogos" className="w-20 md:w-24" />
    </div>
  );
};

export default BrandLogos;
