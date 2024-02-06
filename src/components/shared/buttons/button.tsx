import React from "react";
import { cn } from "../../../utils/cn";

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: keyof typeof variants;
};

const variants = {
  primary: "bg-primary text-secondary-white",
  ghost: "bg-transparent text-secondary-white ",
} as const;

const Button: React.FC<ButtonProps> = ({
  children,
  variant = "primary",
  className,
  ...props
}) => {
  return (
    <button
      {...props}
      className={cn("px-4 py-2 rounded-md font-rubik", variants[variant], className)}
    >
      {children}
    </button>
  );
};

export default Button;
