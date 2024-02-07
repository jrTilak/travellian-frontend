import React from "react";

type InputProps = React.InputHTMLAttributes<HTMLInputElement>;

const Person: React.FC<InputProps> = (props) => {
  return (
    <div className="flex flex-col gap-3 relative w-full">
      <label htmlFor={props.name} className="uppercase">
        {props.name}
      </label>
      <input
        type="number"
        id={props.name}
        className="outline-none w-full font-playfair text-secondary-black"
        {...props}
      />
      <span className="absolute bottom-0 right-0 w-full h-0.5 bg-secondary-black" />
    </div>
  );
};

export default Person;
