import React from "react";

type InputProps = React.InputHTMLAttributes<HTMLInputElement>;

const Destination: React.FC<InputProps> = (props) => {
  return (
    <div className="flex flex-col w-full">
      <label htmlFor={props.name} className="uppercase">
        {props.name}
      </label>
      <input
        autoComplete="off"
        type="text"
        id={props.name}
        className="outline-none w-full font-playfair text-secondary-black mt-3"
        {...props}
      />
      <span className="w-full h-px bg-secondary-black" />
    </div>
  );
};

export default Destination;
