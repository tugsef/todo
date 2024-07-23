import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity } from "react-native";
import styles from "./SearchMedot.style";


interface SearchMedotProps {
  onSearch: ({ text }: { text: string }) => void;
  searchKeyword: string;
}

// Memoize the SearchMedot component
const SearchMedot = React.memo(({ onSearch, searchKeyword }: SearchMedotProps) => {

  const [textChange,setTextChange] = useState('');
  const onChangeText =(text:string)=>{
    setTextChange(text)
  }

  return (
    <View style={styles.container}>
      <TextInput
      placeholder="Search..."
      focusable={searchKeyword.length>0}
        style={styles.input}
        value={textChange} // Use the searchKeyword to populate the input
      onChangeText={onChangeText}
      />
      <TouchableOpacity onPress={()=>onSearch({text:textChange})}>
        <Text style={styles.ok}>Ok</Text>
      </TouchableOpacity>
    </View>
  );
});

export default SearchMedot;
