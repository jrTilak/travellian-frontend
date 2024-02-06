import React from "react";
import { cn } from "../../../utils/cn";
import Button from "./button";

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: keyof typeof variants;
};

const variants = {
  primary: "bg-primary text-secondary-white",
  ghost: "bg-transparent text-secondary-white ",
  secondary: "bg-secondary-black text-secondary-white",
} as const;

const SuperBtn: React.FC<ButtonProps> = ({ children, className, ...props }) => {
  return (
    <div className="relative w-max mt-6 ml-6">
      <div className="bg-[#172432] h-[43px] w-[43px] absolute -top-[21.5px] -left-[21.5px] -z-10" />
      <div className="bg-[#767E86] h-[43px] w-[43px] absolute -bottom-[21.5px] -right-[21.5px] -z-10" />
      <Button {...props} className={cn("z-20 h-[61px] w-[186px]", className)}>
        {children}
      </Button>
    </div>
  );
};

export default SuperBtn;
