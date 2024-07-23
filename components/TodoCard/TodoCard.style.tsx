import { Dimensions, StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  inner_container: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  title: {
    fontSize:18,
    textAlign: "left",
    letterSpacing: 0.1,
    marginBottom: 8,
    
  },
  done_container: {
    marginRight:20,
    justifyContent: "center",
    alignItems: "center",
  },
  content_container: {
    flex: 1,
    justifyContent: "center",

    alignItems: "flex-start",
    flexDirection: "column",
    marginVertical:10,
  },
  update_container: {
    flex: 2,
    justifyContent: "space-between",
    alignItems: "center",
  },
  icon_container: {
    flexDirection: "row",
    justifyContent: "flex-end",
    position: "relative",
    padding: 10,
  },
  edit_container: {
    alignItems: "flex-end",
    padding: 3,
  },
  details_container:{
    position: 'absolute',
    top: '50%',
    left: '50%',
  
  },
  content_text:{
    color:'#7D7C7C'
  },
  date_text:{
    fontSize:12,
    color:'gray'
  }
});
