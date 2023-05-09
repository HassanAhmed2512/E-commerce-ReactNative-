// Import the functions you need from the SDKs you need
// import * as firebase from "firebase/app";
// import firebase from "firebase/compat/app";
import firebase from 'firebase/compat/app';
import { collection, deleteDoc, doc, getDoc, getDocs, getFirestore, setDoc, updateDoc } from "firebase/firestore";
import { getDownloadURL, getStorage, ref, uploadBytes } from "firebase/storage";
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import { myProducts, products } from './src/data/data';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
//Ahmed Hany Config
// const firebaseConfig = {
//   apiKey: "AIzaSyDdLJDKiREMMwtEB1x0krgrJQAx3LGlaoc",
//   authDomain: "cs303-proj.firebaseapp.com",
//   projectId: "cs303-proj",
//   storageBucket: "cs303-proj.appspot.com",
//   messagingSenderId: "553702657372",
//   appId: "1:553702657372:web:7e68bca22610a7502bc599"
// };

//Hassan Ahmed
const firebaseConfig = {
  apiKey: "AIzaSyA-atbyw-l92PBR_J6fVwBV4_8i0QPQGts",
  authDomain: "react-native-auth-8fa1b.firebaseapp.com",
  projectId: "react-native-auth-8fa1b",
  storageBucket: "react-native-auth-8fa1b.appspot.com",
  messagingSenderId: "971567626598",
  appId: "1:971567626598:web:e0d7aff57494615174b0a7"
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
  // console.log("No such document!");
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
    // console.log("attempted to write an empty object");
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

const storage=getStorage(app);

const uploadImage=async(uri,dir,id)=>{
  // return download url;
  const response = await fetch(uri);

  const blob = await response.blob();
  const storageRef = ref(storage, `${dir}/${id}`);

  let dwlUrl=null;
  uploadBytes(storageRef, blob).then((snapshot) => {
      getDownloadURL(snapshot.ref).then((url) => {
        // console.log(url);
        dwlUrl=url;
      });
  });
  // return downloadURL;
  if(!dwlUrl) throw "could not upload image, something went wrong";
  return dwlUrl
}
const isFile = async (path) => {
  let dwlUrl=null;
  getDownloadURL(ref(storage, path))
  .then((url) => {
    // console.log(`File at ${path} exists with URL: `, url);
    dwlUrl=url;
    return true;
  })
  .catch((error) => {
    // console.log(`File at ${path} does not exist: `, error.message);
    return false;
  });
  return dwlUrl;
};
export const uploadProducts=async()=>{
  for(en of products){
    if(!(await getUser(db,'products',en.id) ) )
      await setUser(db,'products',en.id,{...en,image:en.image,
      reviews:["The shoe is a comfortable and stylish option for everyday wear. Its cushioned sole provides excellent support and makes it easy to walk or stand for long periods of time, while its sleek design adds a touch of sophistication to any outfit. Whether you're running errands or going out for a night on the town, this shoe is a great choice for both comfort and style",
      "The camera is a fantastic piece of equipment that captures high-quality photos and videos. Its intuitive controls and compact size make it easy to use and carry around, while its advanced features provide a range of creative options for photographers of all skill levels. Overall, it's an excellent choice for anyone looking to capture their memories with stunning clarity and detail.",
      "The phone is a powerful and versatile device that offers a range of features for both work and play. Its high-resolution display provides a crisp and clear viewing experience, while its fast processor and ample storage allow for smooth performance and easy multitasking. The phone's camera is also top-notch, with advanced features that capture stunning photos and videos. Overall, it's a great choice for anyone looking for a reliable and feature-packed smartphone."]
    })
  }
}
export const getProducts=async()=>{
  
  const querySnapshot = await getDocs(collection(db, "products"));
  let arr=[];
  querySnapshot.forEach((doc) => {
    arr.push(doc.data() );
  });
  return arr;
}

export { auth, db, storage,setUser, getUser, updateUser, deleteUser, uploadImage, isFile};