import React from "react";
import clsx from "clsx";

const Button = ({
  children,
  variant = "primary",
  size = "md",
  loading = false,
  disabled = false,
  rightIcon,
  type = "button",
  className,
  ...props
}) => {
  const baseStyles =
    "inline-flex items-center justify-center rounded-lg transition-all duration-200";

  const variants = {
    primary:
      "bg-[rgba(47,115,242,1)] text-white hover:bg-blue-700 ",
    outline:
      "border border-[rgba(47,115,242,1)] text-[rgba(47,115,242,1)] hover:bg-[rgba(47,115,242,1)] hover:text-white",

  };

  const sizes = {
    sm: "px-3 py-1.5 text-sm",
    md: "px-4 py-2 text-sm",
    lg: "px-6 py-3 text-base",
  };

  return (
    <button
      type={type}
      disabled={disabled || loading}
      className={clsx(
        baseStyles,
        variants[variant],
        sizes[size],
        className
      )}
      {...props}
    >
      {loading ? (
        <span className="animate-spin h-4 w-4 border-2 border-white border-t-transparent rounded-[8px]" />
      ) : (
        children
      )}

        
    </button>
  );
};

export default Button;
