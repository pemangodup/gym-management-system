import { Redirect } from "expo-router";

export default function Index() {
  const token = null; // later: load from SecureStore

  if (!token) {
    return <Redirect href="/welcome" />;
  }

  return <Redirect href="/home" />;
}
