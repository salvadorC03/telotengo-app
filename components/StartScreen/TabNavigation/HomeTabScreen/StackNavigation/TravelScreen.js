import { useEffect } from "react";
import { Image, Pressable, ScrollView, Text, View } from "react-native";
import Spinner from "react-native-loading-spinner-overlay";
import styles from "../../../../../styles/StartScreen/TabNavigation/ShopScreen.styles";
import { TextInput } from "react-native-paper";
import SearchIcon from "../../../../../assets/search-icon.svg";
import AlphabeticIcon from "../../../../../assets/alphabetic-icon.svg";
import GridIcon from "../../../../../assets/grid-icon.svg";
import useShopData from "../../../../../hooks/useShopData";

export default function TravelScreen() {
  const data = useShopData("travel");

  useEffect(() => {
    data.fetchShopList();
  }, []);

  return (
    <View style={styles.body}>
      <Spinner color="purple" size={60} visible={data.isLoading} />
      <Text style={{ ...styles["header-text"], marginBottom: "10%" }}>
        VIAJES
      </Text>
      {!data.isLoading && !data.hasError && data.shopList && (
        <>
          <TextInput
            right={<TextInput.Icon size={30} icon={SearchIcon} />}
            placeholderTextColor="#49418E"
            underlineColor="transparent"
            style={styles["search-input"]}
            placeholder="Buscar por Especialidad"
          />
          <View
            style={{
              flexDirection: "row",
              marginTop: "5%",
              marginBottom: "5%",
              marginLeft: "10%",
            }}
          >
            <Pressable style={{ marginRight: 7 }}>
              <GridIcon width={45} height={45} />
            </Pressable>
            <Pressable>
              <AlphabeticIcon width={45} height={45} />
            </Pressable>
          </View>
          <Text
            style={{
              ...styles["description-text"],
              marginBottom: "5%",
              marginLeft: "10%",
            }}
          >
            Todo
          </Text>
          <ScrollView>
            {data.shopList.map((shop) => (
              <View style={styles["shop-item"]} key={shop.id}>
                <View style={styles["shop-item-group"]}>
                  <Image
                    style={styles["shop-item-picture"]}
                    source={{ uri: shop.photoURL }}
                  />
                  <Text style={styles["shop-item-name"]}>{shop.name}</Text>
                </View>
              </View>
            ))}
          </ScrollView>
        </>
      )}
      {data.message && <View>{data.message}</View>}
    </View>
  );
}
