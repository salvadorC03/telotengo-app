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
  "search-input-primary": {
    fontWeight: "bold",
    marginLeft: "auto",
    marginRight: "auto",
    backgroundColor: "#F1F3F6",
    width: "85%"
  },
  "search-input-secondary": {
    fontWeight: "bold",
    marginLeft: "auto",
    marginRight: "auto",
    backgroundColor: "#F1F3F6",
    width: "85%",
    borderRadius: 20,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  "scroll-item": {
    flex: 1,
    margin: 10,
    borderRadius: 30,
    width: 185,
    height: 180,
  },
  "scroll-item-text": {
    fontFamily: "Poppins",
    fontSize: 20,
    marginLeft: 10,
    color: "white",
    marginTop: "10%",
    letterSpacing: 1
  },
  "folder-icon": {
    marginTop: 15,
    marginLeft: 15,
  },
  button: {
    width: "85%",
    height: 57,
    marginLeft: "auto",
    marginRight: "auto",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 20,
  },
  "button-secondary": {
    padding: 7,
    borderRadius: 12,
    width: "35%",
    height: 45,
  },
  "active-button-secondary": {
    backgroundColor: "#55208A",
  },
  "inactive-button-secondary": {
    backgroundColor: "white",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  "button-text-secondary": {
    padding: 4,
    letterSpacing: 0.5,
    textAlign: "center",
    color: "white",
    fontSize: 16,
    fontFamily: "Poppins",
    fontWeight: "bold",
  },
  "inactive-button-text-secondary": {
    padding: 4,
    letterSpacing: 0.5,
    textAlign: "center",
    color: "#B3B3B3",
    fontSize: 16,
    fontFamily: "Poppins",
    fontWeight: "bold",
  },
  "enabled-button": {
    backgroundColor: "#FF8E01",
  },
  "disabled-button": {
    backgroundColor: "#ffc680",
  },
  "button-text": {
    color: "white",
    fontWeight: "bold",
  },
});
