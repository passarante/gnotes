import AsyncStorage from "@react-native-async-storage/async-storage";

export const getStorage = async (key) => {

  return await AsyncStorage.getItem(key);
}

export const setStorage = async (key, value) => {
  try {
    await AsyncStorage.setItem(key, JSON.stringify(value))
  } catch (e) {
    console.log(e);
  }
}

