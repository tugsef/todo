import React from "react";
import { Text, View } from "react-native";
import styles from "./DoneStatus.style";
import BouncyCheckbox from "react-native-bouncy-checkbox";
function DoneStatus({
  active,
  onChangeActive,
}: {
  active: string;
  onChangeActive: ({ text }: { text: string }) => void;
}) {
  return (
    <View style={styles.container}>
      <View style={styles.section}>
        <BouncyCheckbox
          textContainerStyle={styles.text}
          isChecked={active === "all"}
          size={25}
          text="All"
          fillColor="#ff7473"
          unFillColor="#fbbfbb"
          textStyle={{
            fontFamily: "JosefinSans-Regular",
            textDecorationLine: "none",
          }}
          onPress={(isChecked: boolean) => {
            isChecked && onChangeActive({ text: "all" });
          }}
        />
      </View>
      <View style={styles.section}>
        <BouncyCheckbox
          isChecked={active === "continue"}
          textContainerStyle={styles.text}
          size={25}
          text="Continue"
          fillColor="#a98ae7"
          unFillColor="#cab6f4"
          textStyle={{
            fontFamily: "JosefinSans-Regular",
            textDecorationLine: "none",
          }}
          onPress={(isChecked: boolean) => {
            isChecked && onChangeActive({ text: "continue" });
          }}
        />
      </View>
      <View style={styles.section}>
        <BouncyCheckbox
          isChecked={active === "complated"}
          textContainerStyle={styles.text}
          size={25}
          text="Complated"
          fillColor="#5567e9"
          unFillColor="#afb5f5"
          textStyle={{
            fontFamily: "JosefinSans-Regular",
            textDecorationLine: "none",
          }}
          onPress={(isChecked: boolean) => {
            isChecked && onChangeActive({ text: "complated" });
          }}
        />
      </View>
    </View>
  );
}

export default DoneStatus;
