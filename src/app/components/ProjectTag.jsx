import React from "react";

const ProjectTag = ({ name, onClick, isSelected }) => {
  const buttonStyles = isSelected
    ? "text-white bg-gradient-to-br from-blue-700 to-blue-400 active:bg-primary-700"
    : "text-white bg-grey hover:bg-blue-900 active:bg-blue-900";
  const textStyles = isSelected ? "font-normal" : "font-normal"; 
  
  return (
    <button
      className={`rounded-full border-2 px-6 py-3 text-xl cursor-pointer ${buttonStyles}`}
      onClick={() => onClick(name)}
    >
      <span className={textStyles}>{name}</span>
    </button>
  );
};

export default ProjectTag;
