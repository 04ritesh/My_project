import { initializeApp,getApp,getApps } from "firebase/app";
import {getFirestore} from 'firebase/firestore'
import {getStorage} from 'firebase/storage'

const firebaseConfig = {
  apiKey: "AIzaSyAeTdxHgls7jmGM8QYy7u4VRas0cMykySQ",
  authDomain: "my-project-19bcc.firebaseapp.com",
  databaseURL: "https://my-project-19bcc-default-rtdb.firebaseio.com",
  projectId: "my-project-19bcc",
  storageBucket: "my-project-19bcc.appspot.com",
  messagingSenderId: "366525770110",
  appId: "1:366525770110:web:89b0ea27809b619578ab2f"
};

  const app = getApps.length>0 ? getApp() : initializeApp(firebaseConfig);
 const firestore = getFirestore(app);
  const storage = getStorage(app);
 
  export { app , firestore , storage };