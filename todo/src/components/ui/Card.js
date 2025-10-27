import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { globalStyles } from "../../styles/global";

const Card = React.forwardRef(({ children, style = {}, ...props }, ref) => (
  <View
    ref={ref}
    style={[
      {
        backgroundColor: globalStyles.colors.cream[100],
        borderRadius: 12,
        borderWidth: 1,
        borderColor: globalStyles.colors.sage[200],
        padding: 16,
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 3,
      },
      style,
    ]}
    {...props}
  >
    {children}
  </View>
));

Card.displayName = "Card";

const CardHeader = React.forwardRef(
  ({ children, style = {}, ...props }, ref) => (
    <View
      ref={ref}
      style={[
        {
          flexDirection: "column",
          marginBottom: 8,
        },
        style,
      ]}
      {...props}
    >
      {children}
    </View>
  )
);

CardHeader.displayName = "CardHeader";

const CardTitle = React.forwardRef(
  ({ children, style = {}, ...props }, ref) => (
    <Text
      ref={ref}
      style={[
        {
          fontSize: 20,
          fontWeight: "600",
          color: globalStyles.colors.forest[600],
          marginBottom: 4,
        },
        style,
      ]}
      {...props}
    >
      {children}
    </Text>
  )
);

CardTitle.displayName = "CardTitle";

const CardDescription = React.forwardRef(
  ({ children, style = {}, ...props }, ref) => (
    <Text
      ref={ref}
      style={[
        {
          fontSize: 14,
          color: globalStyles.colors.forest[500],
        },
        style,
      ]}
      {...props}
    >
      {children}
    </Text>
  )
);

CardDescription.displayName = "CardDescription";

const CardContent = React.forwardRef(
  ({ children, style = {}, ...props }, ref) => (
    <View
      ref={ref}
      style={[
        {
          paddingTop: 0,
        },
        style,
      ]}
      {...props}
    >
      {children}
    </View>
  )
);

CardContent.displayName = "CardContent";

const CardFooter = React.forwardRef(
  ({ children, style = {}, ...props }, ref) => (
    <View
      ref={ref}
      style={[
        {
          flexDirection: "row",
          alignItems: "center",
          paddingTop: 0,
          marginTop: 8,
        },
        style,
      ]}
      {...props}
    >
      {children}
    </View>
  )
);

CardFooter.displayName = "CardFooter";

export {
  Card,
  CardHeader,
  CardFooter,
  CardTitle,
  CardDescription,
  CardContent,
};
