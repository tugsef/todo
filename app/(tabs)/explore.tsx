import HeaderSection from "@/components/headerSection";
import TodoCard from "@/components/TodoCard";
import { appReducer } from "@/reducers";
import { initialTodoList } from "@/reducers/initialStates";
import { useReducer } from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function TabTwoScreen() {
  const [state, dispatch] = useReducer(appReducer, {
    todolist: initialTodoList,
    searchWord: "",
    ranking: [],
    active: "all",
    filteredTodoList: initialTodoList,
    sortBy: "",
  });

  console.log(state.sortBy);

  const updateShortByType = ({ text }: { text: string }) => {
    dispatch({ type: "UPDATE_SHORT_BY", text: text });
  };

  const changeListingContent = ({ text }: { text: string }) => {
    dispatch({ type: "UPDATE_ACTIVE", text: text });
    dispatch({ type: "FILTER_TODO_BY_ACTIVE" });
  };

  const onChangeSearchButtonText = ({ text }: { text: string }) => {
    dispatch({ type: "FILTER_TODO_BY_SEARCH_WORD", searchWord: text });
  };
  return (
    <SafeAreaView style={styles.container}>
      <HeaderSection
            active={state.active}
            onChangeActive={changeListingContent}
            shortByActive={state.sortBy}
            updateShort={updateShortByType}
            onSearch={onChangeSearchButtonText}
            searchKeyword={state.searchWord}
          
          />
      <FlatList
        style={styles.list}
        renderItem={({ item }) => <TodoCard todo={item}/>
      }
        data={state.filteredTodoList}
      ItemSeparatorComponent={()=><View style={styles.separator}/>}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor:'#F5F5F5'
    padding: 5,
  },
  list: {
    flex: 1,
  },
  separator:{
    height:1,
    backgroundColor:'#5567e9'
  }
});
