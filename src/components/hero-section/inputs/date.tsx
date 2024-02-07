import React from "react";

type InputProps = React.InputHTMLAttributes<HTMLInputElement>;

const Date: React.FC<InputProps> = (props) => {
  return (
    <div className="flex flex-col gap-3 relative w-full">
      <label htmlFor={props.name} className="uppercase">
        {props.name}
      </label>
      <input
        type="date"
        id={props.name}
        className="outline-none w-full font-playfair text-secondary-black"
        {...props}
      />
      <span className="absolute bottom-0 right-0 w-full h-0.5 bg-secondary-black" />
    </div>
  );
};

export default Date;
