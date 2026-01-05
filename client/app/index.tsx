// import { useEffect } from "react";
// import { router } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
// import { getToken } from "../src/services/storage/token";
// Option A: decode role from token
// import { getRoleFromToken } from "../src/utils/auth";

export default function Index() {
  //   useEffect(() => {
  //     (async () => {
  //       const token = await getToken();

  //       if (!token) {
  //         router.replace("/welcome"); // goes to app/(auth)/welcome.tsx
  //         return;
  //       }

  //       const role = getRoleFromToken(token); // "OWNER" | "ADMIN" | "MEMBER" | null

  //       if (role === "OWNER" || role === "ADMIN") {
  //         router.replace("/dashboard");
  //       } else if (role === "MEMBER") {
  //         router.replace("/home");
  //       } else {
  //         // token exists but invalid/expired
  //         router.replace("/welcome");
  //       }
  //     })();
  //   }, []);

  return (
    <View style={styles.container}>
      <Text>I Am Here</Text>
      <StatusBar style="auto" />
    </View>
  ); // you can show a loading screen here later
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
