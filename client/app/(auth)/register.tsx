import { useState } from "react";
import { Text, View, StyleSheet, TextInput } from "react-native";
import AppButton from "../../components/AppButton";
import { router } from "expo-router";

export default function Register() {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const onSubmit = () => {
    console.log("Form Submitted");
  };
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Let's Register</Text>
      <Text style={styles.subTitle}>Register to access your gym dashboard</Text>
      <View style={styles.form}>
        <Text style={styles.label}>Full Name</Text>
        <TextInput
          value={fullName}
          onChangeText={setFullName}
          placeholder="John Doe"
          autoCapitalize="words"
          style={styles.input}
          returnKeyType="next"
        />
        <Text style={styles.label}>Email</Text>
        <TextInput
          value={email}
          onChangeText={setEmail}
          placeholder="John Doe"
          autoCapitalize="none"
          style={styles.input}
          returnKeyType="next"
        />
        <Text style={styles.label}>Password</Text>
        <TextInput
          value={password}
          onChangeText={setPassword}
          placeholder="John Doe"
          returnKeyType="next"
          secureTextEntry
          style={styles.input}
        />
        <Text style={styles.label}>Confirm password</Text>
        <TextInput
          value={confirmPassword}
          onChangeText={setConfirmPassword}
          placeholder="John Doe"
          returnKeyType="done"
          secureTextEntry
          style={styles.input}
        />
        <AppButton title="CreateAccount" onPress={onSubmit} variant="primary" />
        <AppButton
          title="Already have an account? login"
          onPress={() => router.replace("/login")}
          variant="secondary"
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    justifyContent: "center",
  },
  form: {
    gap: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: "700",
    marginBottom: 20,
  },
  subTitle: {
    fontSize: 24,
    opacity: 0.5,
    marginBottom: 35,
  },
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
