import { StyleSheet } from "react-native";

export default StyleSheet.create({
  body: {
    backgroundColor: "white",
    height: "100%",
  },
  "header-text": {
    fontSize: 34,
    color: "#026666",
    fontWeight: "900",
    marginLeft: "5%",
  },
  "search-input": {
    fontWeight: "bold",
    marginLeft: "auto",
    marginRight: "auto",
    backgroundColor: "#F1F3F6",
    width: "85%",
  },
  "scroll-item": {
    flex: 1,
    margin: 10,
    borderRadius: 30,
    width: 185, height: 180
    //width: "45%",height: "25%",    
  },
  "scroll-item-text": {
    fontFamily: "Poppins",
    fontSize: 20,
    marginLeft: 10,
    color: "white",
    marginTop: "10%",
  },
  "folder-icon": {
    marginTop: 15,
    marginLeft: 15,
  }
});
