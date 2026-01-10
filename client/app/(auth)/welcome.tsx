import { View, Text, StyleSheet, Image, Pressable } from "react-native";
import { useRouter } from "expo-router";
import { StatusBar } from "expo-status-bar";

import AppButton from "../../components/AppButton";

export default function () {
  const router = useRouter();

  return (
    <>
      <StatusBar style="light" />
      <View style={styles.container}>
        {/* Image */}

        <Image
          source={{
            uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJ-35V4LVzKEzDw0UQ9hiU0BdQ9GA5Tx6Iig&s",
          }}
          style={styles.image}
          resizeMode="cover"
        />

        {/*Text Sectopm*/}

        <View style={styles.textContainer}>
          <Text style={styles.title}>Welcome to</Text>
          <Text style={styles.brand}>FitTrack</Text>
          <Text style={styles.subTitle}>
            Track your workouts, payments, and memberships - app in one place.
          </Text>
        </View>

        {/*Buttons*/}

        <View style={styles.buttonRow}>
          <AppButton
            title="Login"
            onPress={() => router.push("/(auth)/login")}
            variant="login"
          />
          <AppButton
            title="Register"
            onPress={() => router.push("/(auth)/register")}
            variant="register"
          />
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  image: {
    width: "100%",
    height: "40%",
  },
  textContainer: {
    paddingHorizontal: 24,
    paddingTop: 24,
  },
  title: {
    fontSize: 28,
    fontWeight: "700",
    textAlign: "center",
  },
  brand: {
    fontSize: 28,
    fontWeight: "700",
    textAlign: "center",
    marginBottom: 10,
  },
  subTitle: {
    fontSize: 16,
    color: "#666",
    textAlign: "center",
    lineHeight: 22,
  },
  buttonRow: {
    flexDirection: "column",
    gap: 15,
    paddingHorizontal: 24,
    marginTop: 40,
  },
});
