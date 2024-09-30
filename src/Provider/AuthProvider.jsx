import PropTypes from 'prop-types'
import { createContext, useEffect, useState } from "react";
import {
 
  createUserWithEmailAndPassword,
  getAuth,
  GoogleAuthProvider,
  onAuthStateChanged,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,

} from "firebase/auth";
import { app } from "../Firebase/firebase.config";


export const AuthContext = createContext(null);
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider()

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  

  //------New---user----create---------?
  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  //------Login---user----create---------?
  const singIn = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  //-------Google----Singin----------?
  const googleSingIn = () => {
    setLoading(true);
    return signInWithPopup(auth, googleProvider);
  };

  //------ResetPassword--------
  const resetPassword = email => {
    setLoading(true);
    return sendPasswordResetEmail(auth, email)
  }


  //-------LogOut-----user-------?
  const logOut = () => {
    setLoading(true);
    return signOut(auth);
  };

  //-------User----Profie-----Update--------
  const updateUserProfile = (name, photo) => {
    return updateProfile(auth.currentUser, {
      displayName: name,
      photoURL: photo,
    });
  };

  //--------OnAuthState------User----------
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });
    return () => {
      return unsubscribe();
    };
  }, []);

  const authInfo = {
    user,
    loading,
    setLoading,
    createUser,
    singIn,
    googleSingIn,
    resetPassword,
    logOut,
    updateUserProfile,
  };

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

AuthProvider.propTypes = {
  // Array of children.
  children: PropTypes.array,
}
export default AuthProvider;
