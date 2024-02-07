import React from "react";
import { cn } from "../../utils/cn";
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
      <div className="bg-[#172432] h-10 w-10 absolute -top-5 -left-5 -z-10" />
      <div className="bg-[#767E86] h-10 w-10 absolute -bottom-5 -right-5 -z-10" />
      <Button {...props} className={cn("z-20 h-14 w-44", className)}>
        {children}
      </Button>
    </div>
  );
};

export default SuperBtn;
