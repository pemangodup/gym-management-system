import { View, Text, TextInput, StyleSheet } from "react-native";

type AppInputProps = {
  label?: string;
  value: string;
  onChangeText: (text: string) => void;
  placeholder?: string;
  autoCapitalize?: "none" | "sentences" | "words" | "characters";
  returnKeyType: "next" | "done";
  secureTextEntry?: boolean;
  keyboardType?: "default" | "email-address" | "numeric";
};
export default function AppInput({
  label,
  value,
  onChangeText,
  placeholder,
  autoCapitalize,
  returnKeyType,
  secureTextEntry,
  keyboardType,
}: AppInputProps) {
  return (
    <View>
      {label && <Text style={styles.label}>{label}</Text>}

      <TextInput
        value={value}
        onChangeText={onChangeText}
        placeholder={placeholder}
        autoCapitalize={autoCapitalize}
        style={styles.input}
        returnKeyType={returnKeyType}
        secureTextEntry={secureTextEntry}
        keyboardType={keyboardType}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  label: {
    fontSize: 13,
    fontWeight: "500",
  },
  input: {
    borderWidth: 1,
    borderColor: "#2E86DE",
    borderRadius: 10,
    paddingHorizontal: 12,
    paddingVertical: 8,
    fontSize: 16,
  },
});
