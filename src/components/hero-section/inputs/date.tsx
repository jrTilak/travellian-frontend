import React from "react";

type InputProps = React.InputHTMLAttributes<HTMLInputElement>;

const Date: React.FC<InputProps> = (props) => {
  // Format the name to be more readable
  const formattedName = props?.name?.replace(/([A-Z])/g, " $1").trim();

  return (
    <div className="flex flex-col w-full">
      <label htmlFor={props.name} className="uppercase">
        {formattedName}
      </label>
      <input
        type="date"
        id={props.name}
        className="outline-none w-full font-playfair text-secondary-black mt-3"
        {...props}
      />
      <span className="w-full h-px bg-secondary-black" />
    </div>
  );
};

export default Date;
