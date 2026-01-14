import { useState } from "react";
import { Text, View, StyleSheet, TextInput } from "react-native";
import AppButton from "../../components/AppButton";
import { router } from "expo-router";
import AppInput from "../../components/AppInput";

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
        <AppInput
          label="Full Name"
          value={fullName}
          onChangeText={setFullName}
          placeholder="John Doe"
          autoCapitalize="words"
          returnKeyType="next"
        />
        <AppInput
          label="Email"
          value={email}
          onChangeText={setEmail}
          placeholder="John Doe"
          autoCapitalize="none"
          returnKeyType="next"
          keyboardType="email-address"
        />
        <AppInput
          label="Password"
          value={password}
          onChangeText={setPassword}
          placeholder="John Doe"
          returnKeyType="next"
          secureTextEntry
        />
        <AppInput
          label="Confirm Password"
          value={confirmPassword}
          onChangeText={setConfirmPassword}
          placeholder="John Doe"
          returnKeyType="done"
          secureTextEntry
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
    justifyContent: "flex-start",
  },
  form: {
    gap: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: "500",
    marginBottom: 20,
  },
  subTitle: {
    fontSize: 24,
    opacity: 0.5,
    marginBottom: 35,
  },
});
