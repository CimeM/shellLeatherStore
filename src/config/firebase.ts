import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  // These are placeholder values - replace with your actual Firebase config
  apiKey: "AIzaSyBfUWbUZgZCqVgNphK3vYxdr2nQNewDytU",
  authDomain: "shell-ecommerce-site.firebaseapp.com",
  projectId: "shell-ecommerce-site",
  storageBucket: "shell-ecommerce-site.firebasestorage.app",
  messagingSenderId: "387276600491",
  appId: "1:387276600491:web:a3b0fe6fa3d19f92c5b3ee",
  measurementId: "G-F468DXQD75"

};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;