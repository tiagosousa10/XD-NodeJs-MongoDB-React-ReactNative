import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { globalStyles } from "../../styles/global";

export const Badge = React.forwardRef(
  (
    {
      children,
      variant = "default",
      size = "default",
      style = {},
      textStyle = {},
      ...props
    },
    ref
  ) => {
    const badgeVariants = {
      default: {
        backgroundColor: globalStyles.colors.sage[100],
        borderColor: globalStyles.colors.sage[200],
      },
      active: {
        backgroundColor: globalStyles.colors.sage[600],
        borderColor: globalStyles.colors.sage[600],
      },
      secondary: {
        backgroundColor: globalStyles.colors.bronze[100],
        borderColor: globalStyles.colors.bronze[200],
      },
      outline: {
        backgroundColor: "transparent",
        borderColor: globalStyles.colors.sage[600],
      },
    };

    const badgeSizes = {
      default: {
        paddingHorizontal: 12,
        paddingVertical: 6,
        borderRadius: 8,
      },
      sm: {
        paddingHorizontal: 8,
        paddingVertical: 4,
        borderRadius: 6,
      },
      lg: {
        paddingHorizontal: 16,
        paddingVertical: 8,
        borderRadius: 10,
      },
    };

    const textVariants = {
      default: {
        color: globalStyles.colors.sage[600],
        fontSize: 14,
        fontWeight: "500",
      },
      active: {
        color: globalStyles.colors.cream[50],
        fontSize: 14,
        fontWeight: "600",
      },
      secondary: {
        color: globalStyles.colors.bronze[700],
        fontSize: 14,
        fontWeight: "500",
      },
      outline: {
        color: globalStyles.colors.sage[600],
        fontSize: 14,
        fontWeight: "500",
      },
    };

    const textSizes = {
      default: {
        fontSize: 14,
      },
      sm: {
        fontSize: 12,
      },
      lg: {
        fontSize: 16,
      },
    };

    const badgeStyle = [
      badgeVariants[variant] || badgeVariants.default,
      badgeSizes[size] || badgeSizes.default,
      { borderWidth: 1 },
      style,
    ];

    const textStyleCombined = [
      textVariants[variant] || textVariants.default,
      textSizes[size] || textSizes.default,
      textStyle,
    ];

    return (
      <View ref={ref} style={badgeStyle} {...props}>
        <Text style={textStyleCombined}>{children}</Text>
      </View>
    );
  }
);

Badge.displayName = "Badge";

export default Badge;
