import { initializeApp } from "https://www.gstatic.com/firebasejs/11.8.1/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/11.8.1/firebase-firestore.js";

// ✅ Конфигурация из твоего Firebase проекта
const firebaseConfig = {
  apiKey: "AIzaSyA8Fo9eGc2bK2b-FM1y61XeCVw4EWxlCXQ",
  authDomain: "portfolio-48a0d.firebaseapp.com",
  projectId: "portfolio-48a0d",
  storageBucket: "portfolio-48a0d.firebasestorage.app",
  messagingSenderId: "53759423675",
  appId: "1:53759423675:web:3771c5c977b48d0a25659e",
  measurementId: "G-P4863WDKQE"
};

// 🔥 Инициализация
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };