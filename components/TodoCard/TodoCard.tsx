import { Todo } from "@/types";
import React, { useState } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import styles from "./TodoCard.style";
import Marker from "../Marker/Marker";
import { ThemedText } from "../ThemedText";
import { Ionicons } from "@expo/vector-icons";
import { splitTextAtNearestSpace } from "@/utils/helper";
import Edit from "./Edit/Edit";

function TodoCard({ todo }: { todo: Todo }) {
  let titleLimit = 40;
  let contentLimit = 40;
  const [isOpen, setIsOpen] = useState(false);
  return (
    <View style={styles.container}>
      <View style={styles.edit_container}>
        <Edit/>
      </View>
      <View style={styles.inner_container}>
        <View style={styles.done_container}>
          <Marker color={todo.done ? "#2be055" : "#ff7473"} />
        </View>
        <View style={styles.content_container}>
          <Text  style={styles.title}>
            {!isOpen && todo.content.length > 30
              ? splitTextAtNearestSpace({ text: `${todo.content}`, limit: 40 })
              : todo.content}
          </Text>
          <Text style={styles.content_text}>
            {!isOpen && todo.content.length > 30
              ? splitTextAtNearestSpace({ text: `${todo.content}`, limit: 40 })
              : todo.content}
          </Text>
        </View>
      </View>
      <View style={styles.icon_container}>
        {todo.content.length > titleLimit ||
        todo.content.length > contentLimit ? (
          <View style={styles.details_container}>
            <TouchableOpacity
              onPress={() => setIsOpen((value) => !value)}
              activeOpacity={0.8}
            >
              <Ionicons
                name={isOpen ? "chevron-up-outline" : "chevron-down-outline"}
                size={18}
              />
            </TouchableOpacity>
          </View>
        ) : (
          ""
        )}

        <Text style={styles.date_text}>
        {todo.startTime?.getDay()}-{todo.startTime?.getMonth()}-{todo.endTime?.getFullYear()}
         
        </Text>
      </View>
    </View>
  );
}

export default TodoCard;
