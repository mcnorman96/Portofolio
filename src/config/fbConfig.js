import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
import "firebase/storage";
import { apiKey, appId, authDomain, databaseURL, messagingSenderId, projectId, storageBucket } from "./fbConfigContants";

// Replace this with your own config details
var config = {
  apiKey: apiKey,
  authDomain: authDomain,
  databaseURL: databaseURL,
  projectId: projectId,
  storageBucket: storageBucket,
  messagingSenderId: messagingSenderId,
  appId: appId,
};

firebase.initializeApp(config);

export default firebase;
