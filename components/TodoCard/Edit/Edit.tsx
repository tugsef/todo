import { AntDesign, Entypo, Foundation, Ionicons } from "@expo/vector-icons";
import React from "react";
import { TouchableOpacity, View } from "react-native";
import styles from "./Edit.style";
function Edit() {
  return (
    <View style={styles.container}>
      
      <TouchableOpacity activeOpacity={0.8}>
        <Foundation name="page-remove" size={24} color="red" />
      </TouchableOpacity>
      <TouchableOpacity activeOpacity={0.8}>
        <AntDesign name="edit" size={24} color="blue" />
      </TouchableOpacity>
      <TouchableOpacity activeOpacity={0.8}>
        <Entypo  name="check" size={24} color="green" />
      </TouchableOpacity>
    </View>
  );
}

export default Edit;
