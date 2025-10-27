import React from "react";
import { Text, StyleSheet } from "react-native";
import { globalStyles } from "../../styles/global";

export const Label = React.forwardRef(
  (
    { children, style = {}, variant = "default", size = "default", ...props },
    ref
  ) => {
    const labelVariants = {
      default: {
        color: globalStyles.colors.forest[600],
        fontSize: 16,
        fontWeight: "500",
      },
      secondary: {
        color: globalStyles.colors.forest[500],
        fontSize: 14,
        fontWeight: "400",
      },
      muted: {
        color: globalStyles.colors.forest[400],
        fontSize: 12,
        fontWeight: "400",
      },
      error: {
        color: globalStyles.colors.copper[600],
        fontSize: 14,
        fontWeight: "500",
      },
    };

    const labelSizes = {
      default: {
        fontSize: 16,
      },
      sm: {
        fontSize: 14,
      },
      lg: {
        fontSize: 18,
      },
    };

    const labelStyle = [
      labelVariants[variant] || labelVariants.default,
      labelSizes[size] || labelSizes.default,
      style,
    ];

    return (
      <Text ref={ref} style={labelStyle} {...props}>
        {children}
      </Text>
    );
  }
);

Label.displayName = "Label";

export default Label;
