import React from "react";
import { View, TextInput, Text, StyleSheet } from "react-native";
import { globalStyles } from "../../styles/global";

const Input = React.forwardRef(
  (
    {
      label,
      placeholder,
      value,
      onChangeText,
      multiline = false,
      numberOfLines = 1,
      style = {},
      inputStyle = {},
      labelStyle = {},
      ...props
    },
    ref
  ) => {
    return (
      <View style={[styles.container, style]}>
        {label && <Text style={[styles.label, labelStyle]}>{label}</Text>}
        <TextInput
          ref={ref}
          style={[styles.input, multiline && styles.multilineInput, inputStyle]}
          placeholder={placeholder}
          placeholderTextColor={globalStyles.colors.forest[400]}
          value={value}
          onChangeText={onChangeText}
          multiline={multiline}
          numberOfLines={numberOfLines}
          {...props}
        />
      </View>
    );
  }
);

Input.displayName = "Input";

const styles = StyleSheet.create({
  container: {
    marginBottom: 16,
  },
  label: {
    fontSize: 16,
    fontWeight: "500",
    color: globalStyles.colors.forest[600],
    marginBottom: 8,
  },
  input: {
    borderWidth: 1,
    borderColor: globalStyles.colors.sage[200],
    borderRadius: 8,
    paddingHorizontal: 12,
    paddingVertical: 12,
    fontSize: 16,
    color: globalStyles.colors.forest[600],
    backgroundColor: globalStyles.colors.cream[50],
  },
  multilineInput: {
    minHeight: 80,
    textAlignVertical: "top",
  },
});

export { Input };
