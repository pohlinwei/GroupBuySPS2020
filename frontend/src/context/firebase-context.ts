import { createContext } from "react";
import firebase from "firebase";

const firebaseContext = {
	firebase: firebase,
	firebaseApp: {},
}

export const FirebaseContext = createContext(firebaseContext);
