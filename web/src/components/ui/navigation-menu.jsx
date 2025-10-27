import * as React from "react";

const NavigationMenu = React.forwardRef(
  ({ className = "", children, ...props }, ref) => (
    <div
      ref={ref}
      className={`relative z-10 flex max-w-max flex-1 items-center justify-center ${className}`}
      {...props}
    >
      {children}
    </div>
  )
);
NavigationMenu.displayName = "NavigationMenu";

const NavigationMenuList = React.forwardRef(
  ({ className = "", ...props }, ref) => (
    <div
      ref={ref}
      className={`group flex flex-1  gap-8 list-none items-center justify-center space-x-1 ${className}`}
      {...props}
    />
  )
);
NavigationMenuList.displayName = "NavigationMenuList";

const NavigationMenuItem = React.forwardRef(
  ({ className = "", ...props }, ref) => (
    <div ref={ref} className={`${className} `} {...props} />
  )
);
NavigationMenuItem.displayName = "NavigationMenuItem";

const NavigationMenuLink = React.forwardRef(
  ({ className = "", asChild = false, children, ...props }, ref) => {
    if (asChild) {
      return React.cloneElement(children, { ref, className });
    }
    return (
      <a
        ref={ref}
        className={`group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 ${className}`}
        {...props}
      >
        {children || <span className="sr-only">Navigation link</span>}
      </a>
    );
  }
);
NavigationMenuLink.displayName = "NavigationMenuLink";

export {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuLink,
};
