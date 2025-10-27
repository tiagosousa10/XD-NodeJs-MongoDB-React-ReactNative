import * as React from "react";
import { Check } from "lucide-react";

const Checkbox = React.forwardRef(
  ({ className = "", checked, onCheckedChange, ...props }, ref) => (
    <div className="relative">
      <input
        type="checkbox"
        ref={ref}
        checked={checked}
        onChange={(e) => onCheckedChange && onCheckedChange(e.target.checked)}
        className={`peer h-4 w-4 shrink-0 rounded-sm border border-sage-600 bg-cream-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sage-600 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-sage-600 data-[state=checked]:text-cream-50 ${className}`}
        {...props}
      />
      {checked && (
        <Check className="absolute top-0 left-0 h-4 w-4 text-sage-600 pointer-events-none" />
      )}
    </div>
  )
);
Checkbox.displayName = "Checkbox";

export { Checkbox };
