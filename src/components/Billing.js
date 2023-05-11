import React from "react";

const details = [
  {
    id: 0,
    days: "3 Days",
    rs: "278",
    how: "/ Per Meal",
    src: "icons8-rupee-48.png",
    src1: "delivery-man.png",
    total: " 835 for 3 days",
    sale: "20% off",
    delivery: "Free Delivery ",
  },
  {
    id: 1,
    days: "7 Days",
    rs: "244",
    how: "/ Per Meal",
    src: "icons8-rupee-48.png",
    src1: "delivery-man.png",
    total: " 1710 for 7 days",
    sale: "30% off",
    delivery: "Free Delivery ",
  },
  {
    id: 2,
    days: "14 Days",
    rs: "209",
    how: "/ Per Meal",
    src: "icons8-rupee-48.png",
    src1: "delivery-man.png",
    total: " 2930 for 14 days",
    sale: "40% off",
    delivery: "Free Delivery ",
  },
  {
    id: 3,
    days: "13 Days",
    rs: "175",
    how: "/ Per Meal",
    src: "icons8-rupee-48.png",
    src1: "delivery-man.png",
    total: " 5235 for 30 days",
    sale: "50% off",
    delivery: "Free Delivery ",
  },
];

const Billing = () => {
  return (
    <div className="flex ">
      {details.map((value) => (
        <div className="flex ml-9 mt-12">
          <div className="border-2 border-gray-300 w-72 h-52">
            <p className="text-center text-xl pt-3 pb-2 font-medium">
              {value.days}
            </p>
            <hr />
            <div className="flex pt-3">
              <img src={value.src} alt="rupee" />
              <p className="text-3xl font-medium">
                {value.rs} <span className="text-sm"> {value.how}</span>
              </p>
            </div>
            <div className="flex mt-3">
              <img src={value.src} alt="rs" className="w-9 pl-3" />
              <p className="font-medium">
                {value.total} <span className="pl-5">{value.sale}</span>
              </p>
            </div>
            <hr className="mx-3 mt-3" />
            <div className="flex">
              <img src={value.src1} alt="man" className="w-12 py-2 pl-4" />
              <p className="pl-4 pt-3 font-medium">{value.delivery}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Billing;
