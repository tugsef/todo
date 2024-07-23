import { Image, StyleSheet, SafeAreaView, Text } from "react-native";

import { ThemedText } from "@/components/ThemedText";

export default function HomeScreen() {
  return (
    <SafeAreaView style={styles.container}>
   
      <Image
        source={require("@/assets/images/todo_logo.png")}
        style={styles.reactLogo}
      />

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  reactLogo: {
    width: 500, // Resmin genişliği
    height: 500, // Resmin yüksekliği
  },
  themeContainer: {
    flexDirection: "column",
    justifyContent: "center",
    alignContent: "center",
    marginTop: 20,
  },
});
