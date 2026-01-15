import { Pressable, StyleSheet, Text } from "react-native";
import colors from "../src/shared/theme/colors";

type AppButtonProps = {
  title: string;
  onPress: () => void;
  variant: "primary" | "secondary";
};
export default function AppButton({ title, onPress, variant }: AppButtonProps) {
  return (
    <Pressable
      style={[
        styles.button,
        variant === "primary" ? styles.loginButton : styles.registerButton,
      ]}
      onPress={onPress}
    >
      <Text
        style={variant === "primary" ? styles.loginText : styles.registerText}
      >
        {title}
      </Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    paddingVertical: 12,
    borderRadius: 10,
    alignItems: "center",
  },
  loginButton: {
    backgroundColor: colors.primary,
  },
  loginText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "600",
  },
  registerButton: {
    borderWidth: 1,
    borderColor: colors.primary,
  },
  registerText: {
    color: colors.primary,
    fontSize: 16,
    fontWeight: "600",
  },
});
