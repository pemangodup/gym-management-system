import { Redirect } from "expo-router";

export default function Index() {
  const token = null; // later: load from SecureStore

  if (!token) {
    return <Redirect href="/welcome" />;
  }

  // later: decide role
  // return <Redirect href="/dashboard" />; // admin/owner
  // return <Redirect href="/home" />;      // member

  return <Redirect href="/home" />;
}
