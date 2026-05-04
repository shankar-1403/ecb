import React from "react";

const baseStyles =
  "inline-flex cursor-pointer items-center justify-center gap-2 whitespace-nowrap rounded-lg text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50";

const variantStyles = {
  default: "bg-primary text-white hover:bg-primary/90",
  destructive: "bg-red-500 text-white hover:bg-red-600",
  outline: "border border-gray-300 bg-white hover:bg-gray-100",
  secondary: "bg-gray-200 text-black hover:bg-gray-300",
  ghost: "hover:bg-gray-100",
  link: "text-blue-500 underline-offset-4 hover:underline",
};

const sizeStyles = {
  default: "h-9 px-3 py-2 text-sm",
  sm: "h-8 px-2.5 py-1.5 text-xs",
  lg: "h-10 min-h-10 px-5 py-2 text-sm md:text-base",
  icon: "h-9 w-9 shrink-0 p-0",
};

const Button = React.forwardRef(
  (
    {
      variant = "default",
      size = "default",
      className = "",
      asChild = false,
      ...props
    },
    ref
  ) => {
    const Comp = asChild ? "span" : "button";

    return (
      <Comp
        ref={ref}
        className={`${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${className}`}
        {...props}
      />
    );
  }
);

Button.displayName = "Button";

export default Button;
