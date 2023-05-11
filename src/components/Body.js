import React from "react";

const content = [
  {
    id: 1,
    text: "Every dish is prepared in olive oil",
  },
  {
    id: 2,
    text: "No added sugar, color or preservatives",
  },
  {
    id: 3,
    text: "Designed as per calorie requirements",
  },
  {
    id: 4,
    text: "Nutrition and portions planned by expert dieticians",
  },
  {
    id: 5,
    text: "High protein and low carb food",
  },
  {
    id: 6,
    text: "Made with fresh and best quality ingredients",
  },
  {
    id: 7,
    text: "Flexibility of plans",
  },
  {
    id: 8,
    text: "On-time doorstep delivery",
  },
];

const Body = () => {
  return (
    <div className="h-auto lg:mx-48">
      <img
        src="horizontal.jpeg"
        alt="img1"
        className="mx-auto w-3/4 h-80 py-14"
      />
      <div className="flex sm:flex-col md:flex-row mx-auto md:justify-between">
        <div className="w-full">
          <p className="text-7xl font-medium pl-3 pt-4">
            Health & Taste At
            <span className="font-normal text-green-700"> Your Doorstep</span>
          </p>
          {content.map((value) => (
            <div className="flex pt-5">
              <img src="leaf.png" alt="leaf" className="w-4 h-7 ml-5" />
              <p className="text-xl pl-4 sm:order-2">{value.text}</p>
            </div>
          ))}
        </div>
        <div className="w-full">
          <img src="food9.jpeg" alt="img" className="w-full" />
        </div>
      </div>
    </div>
  );
};

export default Body;
