import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  // These are placeholder values - replace with your actual Firebase config
  apiKey: "your-api-key-here",
  authDomain: "shell-leather.firebaseapp.com",
  projectId: "shell-leather",
  storageBucket: "shell-leather.appspot.com",
  messagingSenderId: "123456789",
  appId: "your-app-id-here"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;