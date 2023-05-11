import React from "react";

const Footer = () => {
  return (
    <div className="h-96 py-16">
      <img src="logo.png" alt="logo" className="mx-auto" />
      <div className="flex justify-between pt-10 mx-48">
        <div className="w-80 text-center ">
          <p className="text-xl font-medium pb-3">Our Address</p>
          <p>
            EM-Kitchen-5/East Building, Rani Kamlapati Railway Station, Habib
            Ganj, Bhopal, Madhya Pradesh 462023
          </p>
        </div>
        <div className="text-center">
          <p className="text-xl font-medium pb-3">Opening Hours</p>
          <p>Mon - Sun 10:00 AM - 11:30 PM</p>
        </div>
        <div className="text-center">
          <p className="text-xl font-medium pb-3">Contact Us</p>
          <p>Email : info@toneopeats.com</p>
          <p>Phone: 7400989898</p>
        </div>
      </div>
      <hr className="mt-12" />
      <div className="flex pt-5">
        <div className="mx-auto flex cursor-pointer">
          <img src="linked.png" alt="linked" />
          <img src="instagram.png" alt="linked" className="pl-3" />
          <img src="facebook.png" alt="linked" className="pl-3" />
          <img src="twitter.png" alt="linked" className="pl-3" />
          <img src="youtube.png" alt="linked" className="pl-3" />
        </div>
      </div>
      <p className="text-center py-5 pb-16">
        Copyright All rights reserved by TONEOPEATS
      </p>
    </div>
  );
};

export default Footer;
