import React from "react";
import { Text, View } from "react-native";
import styles from './ToDoTitle.style'
import { ThemedText } from "@/components/ThemedText";
function ToDoTitle() {
  return (
    <View >
      <ThemedText  type="title" style={styles.title}>Todo </ThemedText>
    </View>
  );
}

export default ToDoTitle;
