import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDZc8Ulfujxu3YGUrWY_UGgZtVQmXQtDac",
  authDomain: "cookchef-bd9b4.firebaseapp.com",
  projectId: "cookchef-bd9b4",
  storageBucket: "cookchef-bd9b4.appspot.com",
  messagingSenderId: "717690880923",
  appId: "1:717690880923:web:ffd9a38f4040e4669d173e",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db };
