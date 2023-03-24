import { StyleSheet } from "react-native";

export default StyleSheet.create({
  body: {
    backgroundColor: "white",
    width: "100%",
    height: "100%",
  },
  "description-text": {
    color: "#026666",
    fontWeight: "bold",
    fontFamily: "Poppins",
    fontSize: 34,
  },
  "search-input": {
    fontWeight: "bold",
    marginLeft: "auto",
    marginRight: "auto",
    backgroundColor: "white",
    borderStyle: "solid",
    borderWidth: 2,
    borderColor: "black",
    width: "85%",
    borderRadius: 12,
    borderTopLeftRadius: 12,
    borderTopRightRadius: 12,
  },
  "header-text": {
    fontFamily: "Poppins",
    color: "#FF8E01",
    fontSize: 40,
    marginLeft: "auto",
    marginRight: "auto",
  },
  "shop-item": {
    marginLeft: "auto",
    marginRight: "auto",
    backgroundColor: "#F1F3F6",
    width: "90%",
    height: 100,
    padding: "5%",
    borderRadius: 30,
  },
  "shop-item-group": {
    flexDirection: "row",
    alignItems: "center",
  },
  "shop-item-picture": {
    width: 60,
    height: 60,
    borderRadius: 12,
  },
  "shop-item-name": {
    marginLeft: "15%",
    fontWeight: "bold",
  },
});
