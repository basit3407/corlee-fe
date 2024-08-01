import { initializeApp } from "firebase/app";
import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyC0BK6ojLen63-w1WuOn-bRENMtyiovWR8",
  authDomain: "corlee-85a80.firebaseapp.com",
  projectId: "corlee-85a80",
  storageBucket: "corlee-85a80.appspot.com",
  messagingSenderId: "81090684417",
  appId: "1:81090684417:web:61c6f5abb9414067968200",
  measurementId: "G-G3JEN2Z8MM",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

const provider = new GoogleAuthProvider();

export const googleLogin = async () => {
  try {
    const currentUser = auth.currentUser;

    if (currentUser) {
      await signOut(auth);
    }

    const result = await signInWithPopup(auth, provider);
    const token = await result.user.getIdToken();
    return { token, error: false };
  } catch (error) {
    return { error: true };
  }
};
