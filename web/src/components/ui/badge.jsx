import * as React from "react";

const badgeVariants = {
  default: "border-transparent bg-sage-600 text-cream-50 hover:bg-sage-700",
  secondary:
    "border-transparent bg-bronze-100 text-bronze-700 hover:bg-bronze-200",
  destructive:
    "border-transparent bg-copper-600 text-cream-50 hover:bg-copper-700",
  outline: "text-forest-900 border-sage-200",
};

function Badge({ className = "", variant = "default", ...props }) {
  const variantClasses = badgeVariants[variant] || badgeVariants.default;
  return (
    <div
      className={`inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-sage-600 focus:ring-offset-2 ${variantClasses} ${className}`}
      {...props}
    />
  );
}

export { Badge, badgeVariants };
