import { View, Text, StyleSheet, Image, Pressable } from "react-native";
import { useRouter } from "expo-router";
import { StatusBar } from "expo-status-bar";

import AppButton from "../../components/AppButton";
import colors from "../../src/shared/theme/colors";
import { images } from "../../src/shared/assets/images";

export default function () {
  const router = useRouter();

  return (
    <>
      <StatusBar style="light" />
      <View style={styles.container}>
        {/* Image */}

        <Image
          source={{
            uri: images.welcome,
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
            variant="primary"
          />
          <AppButton
            title="Register"
            onPress={() => router.push("/(auth)/register")}
            variant="secondary"
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
    paddingHorizontal: 24,
    paddingVertical: 40,
  },
  image: {
    width: "100%",
    height: "40%",
    //margin: 24,
  },
  textContainer: {
    paddingHorizontal: 24,
    paddingTop: 24,
  },
  title: {
    fontSize: 28,
    fontWeight: "700",
    textAlign: "center",
    color: colors.title,
  },
  brand: {
    fontSize: 28,
    fontWeight: "700",
    textAlign: "center",
    marginBottom: 10,
    color: colors.subTitle,
  },
  subTitle: {
    fontSize: 16,
    color: colors.textPrimary,
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
