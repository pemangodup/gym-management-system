import { View, Text, StyleSheet } from "react-native";

export default function home() {
  return (
    <View style={styles.container}>
      <Text>Payment</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "silver",
    justifyContent: "center",
    alignItems: "center",
  },
});
