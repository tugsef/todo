import React, { useCallback } from "react";
import { Text, View, TouchableOpacity } from "react-native";
import DoneStatus from "../DoneStatus";

import ToDoTitle from "../ToDoTitle/ToDoTitle";
import styles from "./HeaderSection.style";
import SearchMedot from "../SearchMedot";
import TodoSortBy from "../TodoSortBy";
import { Foundation } from "@expo/vector-icons";

interface SearchMedotProps {
  onSearch: ({ text }: { text: string }) => void;
  searchKeyword: string;
}
function HeaderSection({
  active,
  onChangeActive,
  shortByActive,
  updateShort,
  onSearch,
  searchKeyword,
}: {
  active: string;
  onChangeActive: ({ text }: { text: string }) => void;
  shortByActive: string;
  updateShort: ({ text }: { text: string }) => void;
  onSearch: ({ text }: { text: string }) => void;
  searchKeyword: string;
}) {
  return (
    <View>
      <ToDoTitle />
      <DoneStatus active={active} onChangeActive={onChangeActive} />
      <View style={styles.inner_container}>
        <TouchableOpacity
          style={styles.button_sort}
          onPress={() => updateShort({ text: "search" })}
        >
          <Text style={styles.text_sort}>Search</Text>
        </TouchableOpacity>
      {shortByActive.length!=0&&<TouchableOpacity
          style={styles.button_exit}
          onPress={() => {updateShort({ text: "" })
        onChangeActive({text:active})}}
        >
          <Foundation name="x" size={12} color="black" />
        </TouchableOpacity>}  
        <TouchableOpacity
          style={styles.button_search}
          onPress={() => updateShort({ text: "shortby" })}
        >
          <Text style={styles.text_search}>Sort By</Text>
        </TouchableOpacity>
      </View>
      {shortByActive === "search" && (
        <SearchMedot searchKeyword={searchKeyword} onSearch={onSearch} />
      )}
      {shortByActive === "shortby" && <TodoSortBy />}
    </View>
  );
}

export default HeaderSection;
