// // src/stores/useAuthStore.js

// import { create } from "zustand";
// import { api, setAuthToken } from "../config/api";
// import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";

// const useAuthStore = create((set) => ({
//   user: null,
//   token: null,
//   error: null,
//   loading: false,

//   checkAuth: () => {
//     const token = localStorage.getItem("token");
//     if (token) {
//       set({ token });
//       setAuthToken(token); // Set Axios headers
//     }
//   },

//   googleLogin: async () => {
//     set({ loading: true, error: null });
//     try {
//       const auth = getAuth();
//       const result = await signInWithPopup(auth, GoogleAuthProvider);
//       const idToken = await result.user.getIdToken();

//       // Send the ID token to your backend
//       const response = await api.post("/google-login/", { idToken });

//       if (response.status === 200) {
//         const token = response.data.token;
//         set({ user: result.user, token, loading: false });
//         localStorage.setItem("token", token);
//         setAuthToken(token); // Set Axios headers
//       }
//     } catch (error) {
//       set({ error: error.message, loading: false });
//     }
//   },

//   register: async (userData) => {
//     set({ loading: true, error: null });
//     try {
//       const response = await api.post("/register/", userData);
//       console.log(response);
//       if (response.status === 201) {
//         set({ user: response.data.user, token, loading: false });
//         const token = response.data.token;
//         localStorage.setItem("token", token);
//         setAuthToken(token);
//       }
//     } catch (error) {
//       set({
//         error: error.response ? error.response.data : error.message,
//         loading: false,
//       });
//     }
//   },

//   login: async (credentials) => {
//     set({ loading: true, error: null });
//     try {
//       const response = await api.post("/login/", credentials);
//       if (response.status === 200) {
//         const token = response.data.token;
//         set({ user: response.data.user, token, loading: false });
//         localStorage.setItem("token", token);
//         setAuthToken(token); // Set Axios headers
//       }
//     } catch (error) {
//       set({
//         error: error.response ? error.response.data : error.message,
//         loading: false,
//       });
//     }
//   },

//   logout: () => {
//     set({ user: null, token: null });
//     localStorage.removeItem("token");
//     setAuthToken(null); // Remove Axios headers
//   },
// }));

// export default useAuthStore;
