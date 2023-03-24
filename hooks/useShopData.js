import { useState } from "react";
import { useLoading } from "./useLoading";
import firestore from "@react-native-firebase/firestore";
import { Text } from "react-native";

export default function useShopData(
  collectionName,
  errorMessage = <Text>Error al cargar.</Text>
) {
  const [shopList, setShopList] = useState(null);
  const [hasError, setHasError] = useState(false);
  const loadingState = useLoading();

  async function fetchShopList() {
    setHasError(false);
    loadingState.setIsLoading(true);
    try {
      const travelCollectionRef = await firestore()
        .collection(collectionName)
        .get();
      const travelShopList = [];
      travelCollectionRef.forEach((shop) =>
        travelShopList.push({ ...shop.data(), id: shop.id })
      );
      setShopList(travelShopList);
    } catch (error) {
      console.error(error.message);
      setHasError(true);
      loadingState.setMessage(errorMessage);
    }
    loadingState.setIsLoading(false);
  }

  return {
    shopList,
    hasError,
    isLoading: loadingState.isLoading,
    message: loadingState.message,
    fetchShopList,
  };
}
