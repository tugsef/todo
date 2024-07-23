import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import styles from './TodoSortBy.style'
function TodoSortBy() {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.text}>Sort By</Text>
      </TouchableOpacity>
      <TouchableOpacity >
        <Text style={styles.ok}>Ok</Text>
      </TouchableOpacity>
    </View>
  );
}

export default TodoSortBy;
