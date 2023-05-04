// Import the functions you need from the SDKs you need
// import * as firebase from "firebase/app";
// import firebase from "firebase/compat/app";
import firebase from 'firebase/compat/app';
import { deleteDoc, doc, getDoc, getFirestore, setDoc, updateDoc } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDdLJDKiREMMwtEB1x0krgrJQAx3LGlaoc",
  authDomain: "cs303-proj.firebaseapp.com",
  projectId: "cs303-proj",
  storageBucket: "cs303-proj.appspot.com",
  messagingSenderId: "553702657372",
  appId: "1:553702657372:web:7e68bca22610a7502bc599"
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const db=getFirestore(app);
// const storage=getStorage(app);

const setUser=async(db,collection,id,obj=null)=>{
  if(!obj){
    // console.log("attempted to write an empty object");
    throw "attempted to write an empty object";
  }
  const docRef=doc(db, collection, id);
  await setDoc(docRef, obj);
  return true;
}
const getUser=async(db,collection,id,obj=null)=>{
  const docRef = doc(db, collection, id);
  const docSnap = await getDoc(docRef);

  if (docSnap.exists()) {
    // console.log("Document data:", docSnap.data());
    return docSnap.data();
  }
  console.log("No such document!");
  return null;
}
const updateUser=async(db,collection,id,obj=null)=>{
  const userData=getUser(db,collection,id);
  // cant update a non existing user
  if(!userData){
    throw "this user does not exist";
  }
  // cant update with an empty object
  // for some other reason we might also return false
  if(!obj){
    console.log("attempted to write an empty object");
    return false;
  }
  const docRef = doc(db, collection, id);
  await updateDoc(docRef, obj);
  return true;
}
const deleteUser=async(db,collection,id,obj=null)=>{
  const userData=getUser(db,collection,id);
  // cant delete a non existing user
  if(!userData){
    throw "this user does not exist";
  }
  console.log("deleting this doc with data:", userData);

  const docRef = doc(db, collection, id);
  await deleteDoc(docRef);
  return true;
}
export { auth, db, setUser, getUser, updateUser, deleteUser};