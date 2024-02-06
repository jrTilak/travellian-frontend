import React from "react";

type InputProps = React.InputHTMLAttributes<HTMLInputElement>;

const Person: React.FC<InputProps> = (props) => {
  return (
    <div className="flex flex-col gap-3 relative w-48">
      <label htmlFor={props.name} className="uppercase">
        {props.name}
      </label>
      <input
        type="number"
        id={props.name}
        className="outline-none w-full font-playfair"
        {...props}
      />
      <span className="absolute bottom-0 right-0 w-full h-0.5 bg-secondary-black" />
    </div>
  );
};

export default Person;
