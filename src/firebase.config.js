import {getApp, getApps, initializeApp} from 'firebase/app';
import {getFirestore} from 'firebase/firestore';
import {getStorage} from 'firebase/storage';

const firebaseConfig = {
    apiKey: "AIzaSyCVMz7LMke1paabiGFiFnNIeoYrbYwGkOc",
    authDomain: "webvegetables.firebaseapp.com",
    databaseURL: "https://webvegetables-default-rtdb.firebaseio.com",
    projectId: "webvegetables",
    storageBucket: "webvegetables.appspot.com",
    messagingSenderId: "82436601077",
    appId: "1:82436601077:web:85a097d62c7902718c41bc"
};

const app = getApps.length > 0 ? getApp() : initializeApp(firebaseConfig);

const firebase = getFirestore(app);
const storage = getStorage(app);

export { app, firebase, storage };
