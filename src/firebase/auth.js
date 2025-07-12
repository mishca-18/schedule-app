import { auth } from "./firebase";
import { createUserWithEmailAndPassword, GoogleAuthProvider, GithubAuthProvider, FacebookAuthProvider, sendPasswordResetEmail, sendEmailVerification, signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";


export const doCreateUserWithEmailAndPassword = async (email, password) => {
  return createUserWithEmailAndPassword(auth, email, password);
};

export const doSignInWithEmailAndPassword = (email, password) => {
  return signInWithEmailAndPassword(auth, email, password);
};

export const doSignInWithGoogle = async () => {
  const provider = new GoogleAuthProvider();
  const result = await signInWithPopup(auth, provider);
  return result;
};

export const doSignInWithGithub = async () => {
  const provider = new GithubAuthProvider();
  const result = await signInWithPopup(auth, provider);
  return result;
};

export const doSignInWithFacebook = async () => {
  const provider = new FacebookAuthProvider();
  const result = await signInWithPopup(auth, provider);
  return result;
};

export const doSignOut = () => {
  return auth.signOut();
};


/*export const doPasswordReset = (email) => {
    return sendPasswordResetEmail(auth, email);
};

export const doPasswordChange = (password) => {
    return updatePassword(auth.currentUser, password);
};

export const doSendEmailVerification = () => {
    return sendEmailVerification(auth.currentUser, {
        url: `${window.location.origin}/home`,
    });
};*/