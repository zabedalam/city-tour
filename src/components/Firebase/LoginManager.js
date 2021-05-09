import React from "react";
import firebase from "firebase";
import "firebase/auth";
import firebaseConfig from "../../Firebase.config";

export const initializeLoginFrameWork = () => {
  if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
  } else {
    firebase.app(); // if already initialized, use that one
  }
};

export const createUserWithEmailAndPassword = (name, email, password) => {
  return firebase
    .auth()
    .createUserWithEmailAndPassword(email, password)
    .then(res => {
      // Signed in
      const newUserInfo = res.user;
      newUserInfo.error = "";
      newUserInfo.success = true;

      updateUserName(name);
      return newUserInfo;
    })
    .catch(error => {
      const newUserInfo = {};
      newUserInfo.error = error.message;
      newUserInfo.success = false;
      return newUserInfo;
    });
};

const updateUserName = name => {
  const user = firebase.auth().currentUser;

  user
    .updateProfile({
      displayName: name
      // photoURL: "https://example.com/jane-q-user/profile.jpg"
    })
    .then(res => {
      // Update successful.
      console.log("User Name updated successfully");
    })
    .catch(err => {
      // An error happened.
      console.log("User Name Error", err.message);
    });
};

export const signInWithEmailAndPassword = (email, password) => {
  return firebase
    .auth()
    .signInWithEmailAndPassword(email, password)
    .then(res => {
      // Signed in
      const newUserInfo = res.user;
      newUserInfo.error = "";
      newUserInfo.success = true;
      return newUserInfo;
      // ...
    })
    .catch(error => {
      const newUserInfo = {};
      newUserInfo.error = error.message;
      newUserInfo.success = false;
      return newUserInfo;
    });
};
