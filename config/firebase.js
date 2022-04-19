
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyDZc8Ulfujxu3YGUrWY_UGgZtVQmXQtDac",
  authDomain: "cookchef-bd9b4.firebaseapp.com",
  projectId: "cookchef-bd9b4",
  storageBucket: "cookchef-bd9b4.appspot.com",
  messagingSenderId: "717690880923",
  appId: "1:717690880923:web:ffd9a38f4040e4669d173e"
};


const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
// export default app