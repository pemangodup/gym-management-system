import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import { useState } from "react";
import { Ionicons } from "@expo/vector-icons";

import AppInput from "../../components/AppInput";
import AppButton from "../../components/AppButton";
import { router } from "expo-router";
import { colors } from "../../src/shared/theme/colors";

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
      <View style={styles.inputContainer}>
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
      </View>
      <View>
        <View style={styles.orContainer}>
          <View style={styles.line} />
          <Text style={styles.orText}>OR</Text>
          <View style={styles.line} />
        </View>
        <View style={styles.socialContainer}>
          <Pressable style={styles.socialBtn} onPress={() => {}}>
            <Ionicons name="logo-google" size={24} color={colors.primary} />
          </Pressable>
          <Pressable style={styles.socialBtn} onPress={() => {}}>
            <Ionicons name="logo-linkedin" size={24} color={colors.primary} />
          </Pressable>
          <Pressable style={styles.socialBtn} onPress={() => {}}>
            <Ionicons name="logo-facebook" size={24} color={colors.primary} />
          </Pressable>
        </View>
      </View>
      <View style={styles.authContainer}>
        <AppButton title="Login" onPress={onPress} variant="primary" />
        <AppButton
          title="Don't have an account? Register"
          onPress={() => router.replace("/register")}
          variant="secondary"
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 30,
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
  inputContainer: {
    gap: 10,
  },
  orContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 24,
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
  socialContainer: {
    flexDirection: "row",
    justifyContent: "center",
    gap: 10,
  },
  socialBtn: {
    borderWidth: 1,
    borderRadius: 12,
    justifyContent: "center",
    alignItems: "center",
    height: 48,
    width: 48,
    borderColor: colors.primary,
  },
  authContainer: {
    flex: 1,
    justifyContent: "center",
    gap: 10,
  },
});
