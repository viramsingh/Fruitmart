import React, { useMemo } from "react";
import { useNavigate, useParams } from "react-router-dom";
import fruits from "../data/fruits";

const FruiteDetails = () => {
  const { id } = useParams();

  const FruitDetail = useMemo(() => {
    return fruits.find((item) => item.id == id);
  }, [fruits]);
  console.log(FruitDetail, id);

  const navigate = useNavigate();

  const handleClick = () => {
    navigate(-1);
  };

  return (
    <div className="max-w-[700px] bg-gray-50 justify-center items-center  flex-col sm:flex-row sm:h-[70vh] font-averia  gap-10  py-10 sm:px-7 sm:justify-start flex mx-auto   ">
      <div className=" w-[300px]">
        <img
          src={FruitDetail.imageUrl}
          alt="straw"
          className="rounded-lg  h-72 w-72   shadow-xl backdrop"
        />
      </div>
      <div className="flex flex-col gap-3 sm:py-5">
        <div className="font-bold text-2xl">{FruitDetail.name}</div>
        <p className="">{FruitDetail.description}</p>
        <h1 className="font-semibold">{`Price ₹${FruitDetail.price}`}</h1>
        <button
          onClick={handleClick}
          className="bg-primary text-white px-3 hover:bg-secondary hover:text-black font-bold py-2"
        >
          Back to Shop Page
        </button>
      </div>
    </div>
  );
};

export default FruiteDetails;
