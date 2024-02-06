import AsyncStorage from "@react-native-async-storage/async-storage";

export default {
  login: (email: string, password: string) => {
    return new Promise((resolve, reject) => {
      setTimeout(async () => {
        if (!email || !password) {
          reject("Email e senha são obrigatórios");
          return;
        }

        await AsyncStorage.setItem("token", "123");
        resolve(null);
      }, 1000);
    });
  },
  getToken: async () => {
    const token = await AsyncStorage.getItem("token");
    return token;
  },
  logout: async () => {
    await AsyncStorage.removeItem("token");
  },
};
