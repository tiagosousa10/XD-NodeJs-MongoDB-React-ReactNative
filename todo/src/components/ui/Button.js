import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";
import { globalStyles } from "../styles/global";

const buttonVariants = {
  default: {
    backgroundColor: globalStyles.colors.sage[600],
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderRadius: 8,
  },
  destructive: {
    backgroundColor: globalStyles.colors.copper[600],
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderRadius: 8,
  },
  outline: {
    backgroundColor: "transparent",
    borderWidth: 1,
    borderColor: globalStyles.colors.sage[600],
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderRadius: 8,
  },
  secondary: {
    backgroundColor: globalStyles.colors.bronze[100],
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderRadius: 8,
  },
  ghost: {
    backgroundColor: "transparent",
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderRadius: 8,
  },
};

const buttonSizes = {
  default: {
    paddingHorizontal: 16,
    paddingVertical: 12,
  },
  sm: {
    paddingHorizontal: 12,
    paddingVertical: 8,
  },
  lg: {
    paddingHorizontal: 24,
    paddingVertical: 16,
  },
  icon: {
    width: 40,
    height: 40,
    paddingHorizontal: 0,
    paddingVertical: 0,
  },
};

const textVariants = {
  default: {
    color: globalStyles.colors.cream[50],
    fontSize: 16,
    fontWeight: "500",
  },
  destructive: {
    color: globalStyles.colors.cream[50],
    fontSize: 16,
    fontWeight: "500",
  },
  outline: {
    color: globalStyles.colors.sage[600],
    fontSize: 16,
    fontWeight: "500",
  },
  secondary: {
    color: globalStyles.colors.bronze[700],
    fontSize: 16,
    fontWeight: "500",
  },
  ghost: {
    color: globalStyles.colors.sage[600],
    fontSize: 16,
    fontWeight: "500",
  },
};

const textSizes = {
  default: {
    fontSize: 16,
  },
  sm: {
    fontSize: 14,
  },
  lg: {
    fontSize: 18,
  },
  icon: {
    fontSize: 16,
  },
};

export const Button = React.forwardRef(
  (
    {
      children,
      variant = "default",
      size = "default",
      className = "",
      style = {},
      textStyle = {},
      disabled = false,
      ...props
    },
    ref
  ) => {
    const buttonStyle = [
      buttonVariants[variant] || buttonVariants.default,
      buttonSizes[size] || buttonSizes.default,
      disabled && styles.disabled,
      style,
    ];

    const textStyleCombined = [
      textVariants[variant] || textVariants.default,
      textSizes[size] || textSizes.default,
      disabled && styles.disabledText,
      textStyle,
    ];

    return (
      <TouchableOpacity
        ref={ref}
        style={buttonStyle}
        disabled={disabled}
        activeOpacity={0.8}
        {...props}
      >
        <Text style={textStyleCombined}>{children}</Text>
      </TouchableOpacity>
    );
  }
);

Button.displayName = "Button";

const styles = StyleSheet.create({
  disabled: {
    opacity: 0.5,
  },
  disabledText: {
    opacity: 0.5,
  },
});

export { buttonVariants };
