import React from "react";

const Card = ({ name, url, imageClick }) => {
  
  return (
    <div
      onClick={imageClick}
      className=" w-full h-36 flex flex-col justify-center items-center bg-black text-white border border-white p-2 text-center"
    >
      <h1>{name}</h1>
      <img className=" overflow-hidden" src={url} alt={name} />
    </div>
  );
};

export default Card;
