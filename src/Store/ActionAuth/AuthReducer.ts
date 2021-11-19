import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "@firebase/auth";
import { doc, setDoc, getDoc } from "@firebase/firestore";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import { auth, db } from "../../FireBase/FireBase";
import { IUser } from "../../interface/interface";

interface logiunData {
  email: string;
  password: string;
}

export const loginSet =  createAsyncThunk("auth/login", async (data:logiunData, {dispatch})=>{
    try {
        const {user} = await signInWithEmailAndPassword(auth, data.email, data.password);
        toast.success("Login Successful");
        dispatch(getUserLogeed(user.uid));
        dispatch(FaildLogin(true));
      } catch (error) {
          toast.error("Login fail");
          dispatch(FaildLogin(false))
      }

});


export const registerSet = createAsyncThunk("auth/register", async (data:logiunData)=>{
  try {
    const {user} = await createUserWithEmailAndPassword(auth,data.email, data.password);
    await setDoc(doc(db,'users',user.uid), {
      email: data.email,
      createdAt: new Date(),
    });
    toast.success("Register Successful");
    } catch (error) {
    }
});

export const getUserLogeed = createAsyncThunk("auth/getUserLogeed", async (id:string)=>{
  try {
    const docRef = doc(db,'users',id);
    const docSnap = await getDoc(docRef);
    const userData = docSnap.data();
    const {email, createdAt}=userData as IUser
    return {
      email,
      createdAt: createdAt.seconds,
    }
  } catch (error) {
  }
});

export const FaildLogin = createAsyncThunk("auth/FaildLogin", async (date:Boolean)=>{
  return date;

});