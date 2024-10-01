
import { initializeApp } from "firebase/app";
import { initializeAuth,getReactNativePersistence } from "firebase/auth";
import  ReactNativeAsyncStorage  from "@react-native-async-storage/async-storage";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyANG3CHTYklN7M328MWEJK8MsFYMhsmLD4",
  authDomain: "gestorbiblioteca-3b1c8.firebaseapp.com",
  projectId: "gestorbiblioteca-3b1c8",
  storageBucket: "gestorbiblioteca-3b1c8.appspot.com",
  messagingSenderId: "429789353669",
  appId: "1:429789353669:web:17830eb60a2851903742ac",
  databaseURL:"https://gestorbiblioteca-3b1c8-default-rtdb.firebaseio.com/"
};

// Initialize Firebase
const firebase = initializeApp(firebaseConfig);
export const auth = initializeAuth(firebase,{
  persistence: getReactNativePersistence(ReactNativeAsyncStorage)
});

export const database = getDatabase(firebase);