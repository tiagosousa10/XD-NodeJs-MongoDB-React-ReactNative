import React from "react";
import { Switch as RNSwitch, View, Text, StyleSheet } from "react-native";
import { globalStyles } from "../../styles/global";

export const Switch = React.forwardRef(
  (
    {
      value = false,
      onValueChange,
      disabled = false,
      label,
      labelStyle = {},
      style = {},
      ...props
    },
    ref
  ) => {
    return (
      <View style={[styles.container, style]}>
        {label && <Text style={[styles.label, labelStyle]}>{label}</Text>}
        <RNSwitch
          ref={ref}
          value={value}
          onValueChange={onValueChange}
          disabled={disabled}
          trackColor={{
            false: globalStyles.colors.sage[200],
            true: globalStyles.colors.sage[300],
          }}
          thumbColor={
            value
              ? globalStyles.colors.sage[600]
              : globalStyles.colors.cream[50]
          }
          ios_backgroundColor={globalStyles.colors.sage[200]}
          {...props}
        />
      </View>
    );
  }
);

Switch.displayName = "Switch";

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingVertical: 8,
  },
  label: {
    fontSize: 16,
    fontWeight: "500",
    color: globalStyles.colors.forest[600],
    marginRight: 12,
  },
});

export default Switch;
