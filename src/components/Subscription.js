import React from "react";
import { useState, useEffect } from "react";
import Billing from "./Billing";

const imageList1 = [
  {
    id: 1,
    alt: "Button 1 Image 1",
    src: "food8.jpeg",
    name: "Veg Briyani",
  },
  {
    id: 2,
    alt: "Button 1 Image 2",
    src: "food5.jpeg",
    name: "Roti Babji",
  },
  {
    id: 3,
    alt: "Button 1 Image 3",
    src: "food4.jpeg",
    name: "Dish",
  },
  {
    id: 4,
    alt: "Button 1 Image 1",
    src: "food3.jpeg",
    name: "Rice",
  },
  {
    id: 5,
    alt: "Button 1 Image 1",
    src: "food2.jpeg",
    name: "Dessert",
  },
];

const imageList2 = [
  {
    id: 1,
    alt: "Button 2 Image 1",
    src: "non4.jpeg",
    name: "Chicken",
  },
  {
    id: 2,
    alt: "Button 2 Image 2",
    src: "non3.jpeg",
    name: " Mix Chicken",
  },
  {
    id: 3,
    alt: "Button 2 Image 3",
    src: "non2.jpeg",
    name: "Fish",
  },
  {
    id: 4,
    alt: "Button 2 Image 1",
    src: "non1.jpeg",
    name: "Mutton",
  },
];
const Subscription = () => {
  const [vegSelected, setVegSelected] = useState(false);
  const [nonvegSelected, setnonvegSelected] = useState(false);
  const [lunchText, setLunchText] = useState(false);
  const [dinnerText, setDinnerText] = useState(false);

  const vegButtonClick = () => {
    setVegSelected(!vegSelected);
  };

  const nonvegButtonClick = () => {
    setnonvegSelected(!nonvegSelected);
  };

  const lunchButtonClick = () => {
    setLunchText(!lunchText);
  };

  const dinnerButtonClick = () => {
    setDinnerText(!dinnerText);
  };

  useEffect(() => {
    setVegSelected(true);
    setnonvegSelected(false);
  }, []);

  useEffect(() => {
    setLunchText(true);
    setDinnerText(false);
  }, []);

  let imageList = [];
  if (vegSelected && nonvegSelected) {
    imageList = [...imageList1, ...imageList2];
  } else if (vegSelected) {
    imageList = imageList1;
  } else if (nonvegSelected) {
    imageList = imageList2;
  }

  return (
    <div className=" mx-48">
      <div className="flex">
        <div className="w-[50%]">
          <img src="subscription.jpeg" alt="ima" className="w-full" />
        </div>
        <div className="w-[50%] px-6 py-5">
          <p className="text-2xl font-medium">Select your preference</p>
          <div className="border rounded-lg px-4 py-3 mt-6">
            <p className="text-xl font-medium">Diet Preference</p>
            <div className="flex mt-3">
              <label className="mr-4">
                <input
                  type="checkbox"
                  checked={vegSelected}
                  defaultChecked={vegSelected}
                  onChange={vegButtonClick}
                  className="border bg-yellow-300 rounded-md px-10 py-1 font-medium"
                />
                Veg
              </label>
              <label>
                <input
                  type="checkbox"
                  checked={nonvegSelected}
                  onChange={nonvegButtonClick}
                />
                Non Veg
              </label>
            </div>
          </div>
          <div className="border rounded-lg px-4 py-3 mt-6">
            <p className="text-xl font-medium">Select Meal Time</p>
            <div className="flex mt-3">
              <label className="mr-4">
                <input
                  type="checkbox"
                  checked={lunchText}
                  defaultChecked={vegSelected}
                  onChange={lunchButtonClick}
                  className="border bg-yellow-300 rounded-md px-10 py-1 font-medium"
                />
                Lunch
              </label>
              <label>
                <input
                  type="checkbox"
                  checked={dinnerText}
                  onChange={dinnerButtonClick}
                />
                Dinner
              </label>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-between mx-7">
        {lunchText && (
          <p className="font-medium text-4xl pt-4 pb-3">Lunch Packages</p>
        )}
        {dinnerText && (
          <p className="font-medium text-4xl pt-4 pb-3">Dinner Packages</p>
        )}
      </div>

      <hr className="border-2 border-green-700" />
      <p className="w-40 mx-auto text-center rounded-2xl bg-slate-200 border-2   mt-3  font-semibold text-xl">
        Individual
      </p>
      <div className="flex flex-wrap justify-center mt-9">
        {imageList.map((image) => (
          <div className="border-4 w-64 h-56 m-auto ml-12 mt-6 ">
            <img
              key={image.id}
              src={image.src}
              alt={image.alt}
              className="w-32 m-auto pt-7"
            />
            <p className="text-center pt-3 font-bold">{image.name}</p>
          </div>
        ))}
      </div>

      <hr className="mt-16" />
      <Billing />
    </div>
  );
};

export default Subscription;
