// 파이어베이스 공통코드
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.9.3/firebase-app.js";
const firebaseConfig = {
  apiKey: "AIzaSyAH98ja465XVDtF_cMpDu3WbhQOO_13j3k",
  authDomain: "d-gym-2f858.firebaseapp.com",
  databaseURL:
    "https://d-gym-2f858-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "d-gym-2f858",
  storageBucket: "d-gym-2f858.appspot.com",
  messagingSenderId: "1009913446948",
  appId: "1:1009913446948:web:ecd10bb1e345bd5197ceb1",
};

export const firebaseApp = initializeApp(firebaseConfig);
console.log(firebaseApp);
