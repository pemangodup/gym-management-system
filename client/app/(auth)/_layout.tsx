import { Stack } from "expo-router";

export default function AuthLayout() {
  return (
    <Stack>
      <Stack.Screen
        name="welcome"
        options={{ title: "", headerShown: false }}
      />
      <Stack.Screen
        name="login"
        options={{ title: "Login", headerBackTitle: "Back" }}
      />
      <Stack.Screen
        name="register"
        options={{ title: "Register", headerBackTitle: "Back" }}
      />
    </Stack>
  );
}
