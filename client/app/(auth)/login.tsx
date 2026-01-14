import { StyleSheet, Text, View } from "react-native";
import { useState } from "react";
import AppInput from "../../components/AppInput";
import AppButton from "../../components/AppButton";
import { router } from "expo-router";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onPress = () => {
    console.log("I pressed login button");
  };
  return (
    <View style={styles.container}>
      <View style={styles.textContainer}>
        <Text style={styles.title}>Let's Sign you in.</Text>
        <Text style={[styles.title, styles.subTitle]}>Welcome back</Text>
        <Text style={[styles.title, styles.subTitle]}>You've been missed!</Text>
      </View>
      <View style={styles.formContainer}>
        <AppInput
          label="Usernam"
          value={email}
          onChangeText={setEmail}
          placeholder="you@example.com"
          autoCapitalize="none"
          keyboardType="email-address"
          returnKeyType="next"
        />
        <AppInput
          label="Password"
          value={password}
          onChangeText={setPassword}
          placeholder="Enter Password"
          autoCapitalize="none"
          keyboardType="default"
          returnKeyType="done"
        />
        <AppButton title="Login" onPress={onPress} variant="primary" />
        <AppButton
          title="Don't have an account? Register"
          onPress={() => router.replace("/register")}
          variant="secondary"
        />
      </View>
      <View>
        <View style={styles.orContainer}>
          <View style={styles.line} />
          <Text style={styles.orText}>OR</Text>
          <View style={styles.line} />
        </View>
        <View></View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
  },
  textContainer: {
    flexDirection: "column",
    gap: 10,
    marginBottom: 35,
  },
  title: {
    fontSize: 24,
    fontWeight: "500",
  },
  subTitle: {
    opacity: 0.3,
  },
  formContainer: {
    gap: 10,
  },
  orContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 20,
  },
  line: {
    flex: 1,
    height: 1,
    backgroundColor: "#ccc",
  },
  orText: {
    marginHorizontal: 10,
    color: "#ccc",
  },
});
