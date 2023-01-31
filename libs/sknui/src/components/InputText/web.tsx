import React from "react";
import { useTheme } from "../../theme/web";
import { StyleSheet } from "../../theme/StyleSheet/web";
import { Box } from "../Box/web";
import { Text } from "../Text/web";

interface InputTextProps {
  label?: string;
  name?: string;
  id?: string;
  disabled?: boolean;
  placeholder?: string;
  value?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onBlur?: (event: React.FocusEvent<HTMLInputElement>) => void;
  error?: string;
  hiddenText?: boolean;
  mask?: string;
  autoComplete?:
    | "new-password"
    | "current-password"
    | "username"
    | "email"
    | "tel"
    | "off";
  styleSheet?: StyleSheet;
  // TODO: Add support to seamless integration with react-hook-form
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  formRegister?: any;
}
export function InputText({
  label,
  name,
  id,
  error,
  styleSheet,
  formRegister,
  value,
  onChange,
  onBlur,
  disabled,
}: InputTextProps) {
  const { theme } = useTheme();
  const {
    ref: innerRef,
    error: formRegisterError,
    name: formRegisterName,
    ...formRegisterProps
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } = formRegister as any;

  const inputType = "text";
  const inputName = formRegisterName || name;
  const inputId = id || `inputtext_${inputName}`;
  const inputErrorId = `inputtext_${inputName}_error`;
  const inputError = formRegisterError || error;
  const inputValue = value;
  const inputOnChange = onChange;
  const inputOnBlur = onBlur;

  const inputTextStateInvalidOrDefault = inputError ? "invalid" : "default";
  const inputTextState = disabled ? "disabled" : inputTextStateInvalidOrDefault;
  const isInputTextStateInvalid = inputTextState === "invalid";

  const labelStyleSheet: StyleSheet = {
    ...theme.typography.body3,
    display: "flex",
    fontWeight: 600,
    color: isInputTextStateInvalid
      ? theme.colors.negative.x600
      : theme.colors.neutral.x700,
  };

  const errorStyleSheet: StyleSheet = {
    ...theme.typography.body3,
    display: "flex",
    position: "absolute",
    left: 0,
    color: theme.colors.negative.x600,
    top: theme.spacing.x1,
  };

  const inputStyleSheet: StyleSheet = {
    ...styleSheet,
    ...theme.typography.body3,
    display: "flex",
    width: "100%",
    borderWidth: theme.spacing.x_unit,
    borderColor: isInputTextStateInvalid
      ? theme.colors.negative.x600
      : theme.colors.neutral.x400,
    borderStyle: "solid",
    borderRadius: theme.rounded.md,
    boxShadow: theme.shadow.sm,
    paddingX: theme.spacing.x2,
    paddingY: theme.spacing.x3,
    outline: "none",
    marginTop: theme.spacing.x1,
    _focus: {
      boxShadow: isInputTextStateInvalid
        ? `rgb(255, 255, 255) 0px 0px 0px 0px, ${theme.colors.negative.x600} 0px 0px 0px 1px, rgba(0, 0, 0, 0.05) 0px 1px 2px 0px`
        : `rgb(255, 255, 255) 0px 0px 0px 0px, ${theme.colors.primary.x500} 0px 0px 0px 1px, rgba(0, 0, 0, 0.05) 0px 1px 2px 0px`,
      borderColor: isInputTextStateInvalid
        ? theme.colors.negative.x600
        : theme.colors.primary.x500,
    },
  };

  return (
    <Box
      styleSheet={{
        paddingBottom: theme.spacing.x10,
      }}
    >
      <Box as="label" styleSheet={labelStyleSheet}>
        {label}
        <Box
          innerRef={innerRef}
          as="input"
          type={inputType}
          id={inputId}
          name={inputName}
          aria-describedby={inputErrorId}
          aria-errormessage={inputErrorId}
          styleSheet={inputStyleSheet}
          value={inputValue}
          onChange={inputOnChange}
          onBlur={inputOnBlur}
          {...formRegisterProps}
        />
      </Box>
      <Box
        styleSheet={{
          position: "relative",
        }}
      >
        {isInputTextStateInvalid && (
          <Text id={inputErrorId} styleSheet={errorStyleSheet}>
            {inputError}
          </Text>
        )}
      </Box>
    </Box>
  );
}

InputText.defaultProps = {
  label: undefined,
  formRegister: {},
};
