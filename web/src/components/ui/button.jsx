import * as React from "react";

const buttonVariants = {
  default:
    "bg-sage-600 text-cream-50 hover:bg-sage-700 px-4 py-2 rounded-md font-medium transition-colors",
  destructive:
    "bg-copper-600 text-cream-50 hover:bg-copper-700 px-4 py-2 rounded-md font-medium transition-colors",
  outline:
    "border border-sage-600 bg-transparent hover:bg-sage-50 hover:text-sage-700 px-4 py-2 rounded-md font-medium transition-colors",
  secondary:
    "bg-bronze-100 text-bronze-700 hover:bg-bronze-200 px-4 py-2 rounded-md font-medium transition-colors",
  ghost:
    "hover:bg-sage-50 hover:text-sage-700 px-4 py-2 rounded-md font-medium transition-colors",
  link: "text-sage-600 underline-offset-4 hover:underline px-4 py-2 font-medium transition-colors",
};

const buttonSizes = {
  default: "h-10 px-4 py-2",
  sm: "h-9 px-3 text-sm",
  lg: "h-11 px-8",
  icon: "h-10 w-10",
};

const Button = React.forwardRef(
  (
    { className = "", variant = "default", size = "default", ...props },
    ref
  ) => {
    const baseClasses =
      "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sage-600 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50";
    const variantClasses = buttonVariants[variant] || buttonVariants.default;
    const sizeClasses = buttonSizes[size] || buttonSizes.default;

    return (
      <button
        className={`${baseClasses} ${variantClasses} ${sizeClasses} ${className}`}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
