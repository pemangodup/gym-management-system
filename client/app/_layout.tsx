import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";

import { colors } from "../src/shared/theme/colors";
import { SafeAreaView } from "react-native-safe-area-context";

export default function RootLayout() {
  return (
    <SafeAreaView
      edges={["top"]}
      style={{ flex: 1, backgroundColor: colors.primary }}
    >
      <StatusBar style="light" backgroundColor={colors.primary} />
      <Stack>
        <Stack.Screen name="index" options={{ headerShown: false }} />
        <Stack.Screen name="(auth)" options={{ headerShown: false }} />
        <Stack.Screen name="(admin)" options={{ headerShown: false }} />
        <Stack.Screen name="(member)" options={{ headerShown: false }} />
      </Stack>
    </SafeAreaView>
  );
}
