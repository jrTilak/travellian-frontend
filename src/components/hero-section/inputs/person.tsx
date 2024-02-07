import React from "react";

type InputProps = React.InputHTMLAttributes<HTMLInputElement>;

const Person: React.FC<InputProps> = (props) => {
  return (
    <div className="flex flex-col w-full">
      <label htmlFor={props.name} className="uppercase">
        {props.name}
      </label>
      <input
        max={100}
        min={1}
        type="number"
        id={props.name}
        className="outline-none w-full font-playfair text-secondary-black mt-3" 
        {...props}
      />
      <span className="w-full h-px bg-secondary-black" />
    </div>
  );
};

export default Person;
