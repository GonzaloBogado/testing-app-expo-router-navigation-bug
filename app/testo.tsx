import { Link, Stack } from "expo-router";
import { StyleSheet } from "react-native";

import { Text, View } from "@/components/Themed";

import {
  useGlobalSearchParams,
  useLocalSearchParams,
  router,
} from "expo-router";

export default function TestScreen() {
  const { first, second } = useLocalSearchParams();
  const { third } = useGlobalSearchParams();

  console.log("params:");
  console.log(first);
  console.log(second);
  console.log(third);

  return (
    <>
      <Stack.Screen options={{ title: "Heyo test screeen!" }} />
      <View style={styles.container}>
        <Text style={styles.title}>
          Navigated to the selected scren!. These are the params:
        </Text>

        <Text>{first}</Text>
        <Text>{second}</Text>
        <Text>{third}</Text>

        <Link href="/" style={styles.link}>
          <Text style={styles.linkText}>Go to home screen!</Text>
        </Link>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  link: {
    marginTop: 15,
    paddingVertical: 15,
  },
  linkText: {
    fontSize: 14,
    color: "#2e78b7",
  },
});
