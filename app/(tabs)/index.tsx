import { StyleSheet, Button } from "react-native";

import EditScreenInfo from "@/components/EditScreenInfo";
import { Text, View } from "@/components/Themed";

import { router } from "expo-router";

export default function TabTwoScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Tab Two</Text>
      <View
        style={styles.separator}
        lightColor="#eee"
        darkColor="rgba(255,255,255,0.1)"
      />
      <Button
        title="Hello! Click me to navigate to the screen with correct params"
        onPress={() => {
          router.push({
            pathname: "/testo",
            params: {
              first: "a",
              second: "b",
              third: "c",
            },
          });
        }}
      />
      <Button
        title="Hello! Click me to navigate to the screen with incorrect params"
        onPress={() => {
          router.push({
            pathname: "/testo",
            params: {
              first: "a (a)",
              second: "b",
              third: "c",
            },
          });
        }}
      />

      <Button
        title="Hello! Click me to navigate to (also) the screen with incorrect params"
        onPress={() => {
          router.push({
            pathname: "/testo",
            params: {
              first: "(a)",
              second: "b",
              third: "c",
            },
          });
        }}
      />
      <EditScreenInfo path="app/(tabs)/two.tsx" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
});
