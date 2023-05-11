import React from "react";

const Header = () => {
  return (
    <div className="fixed px-4 py-4 h-15 flex justify-between w-full bg-purple-50">
      <img src="logo.png" className="w-64" alt="imaagee" />
      <p className="text-xl font-bold text-green-800 pt-3">
        Meal Subscription Plain
      </p>
    </div>
  );
};

export default Header;
