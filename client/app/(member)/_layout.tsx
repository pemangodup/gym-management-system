import { Tabs } from "expo-router";

export default function MemberLayout() {
  return (
    <Tabs>
      <Tabs.Screen name="home" options={{ title: "Home" }} />
      <Tabs.Screen name="payments" options={{ title: "Payments" }} />
      <Tabs.Screen name="profile" options={{ title: "Profile" }} />
    </Tabs>
  );
}
