import { Tabs } from "expo-router";

export default function AdminLayout() {
  return (
    <Tabs>
      <Tabs.Screen name="dashboard" options={{ title: "Dashboard" }} />
      <Tabs.Screen name="members" options={{ title: "Members" }} />
      <Tabs.Screen name="settings" options={{ title: "Settings" }} />
    </Tabs>
  );
}
