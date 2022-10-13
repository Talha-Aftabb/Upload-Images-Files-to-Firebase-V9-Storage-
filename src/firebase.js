 import { initializeApp } from "firebase/app"; 
 import {getStorage} from "firebase/storage";

 const firebaseConfig = {
  apiKey: "AIzaSyB3q-XlqVeUdytfNt8dwmCpm1HTnVMTxVQ",
  authDomain: "upload-files-41a08.firebaseapp.com",
  projectId: "upload-files-41a08",
  storageBucket: "upload-files-41a08.appspot.com",
  messagingSenderId: "183588227432",
  appId: "1:183588227432:web:5787ac93bcd8c010d92edd"
};

 const app = initializeApp(firebaseConfig);
 export const storage = getStorage(app);