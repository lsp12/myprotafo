import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDocs,
  query,
  setDoc,
} from "@firebase/firestore";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import TechnologyConverter from "../../converter/TechnologyConverter";
import { db } from "../../FireBase/FireBase";
import { IFormTechonology } from "../../interface/interface";

export const saveTechnology = createAsyncThunk(
  "technology/post",
  async (data: IFormTechonology, { dispatch }) => {
    try {
      await addDoc(collection(db, "technology"), data);
      dispatch(getTechnology());
    } catch (error) {
      toast.error("error");
    }
  }
);

export const getTechnology = createAsyncThunk("technology/get", async () => {
  try {
    const q = query(collection(db, "technology"));
    const snapshot = await getDocs(q.withConverter(TechnologyConverter));
    const data: IFormTechonology[] = [];
    snapshot.forEach((doc) => {
      data.push({ ...doc.data() });
    });
    return data;
  } catch (error) {
    toast.error("error");
  }
});

export const updateTechnology = createAsyncThunk(
  "technology/put",
  async (data: IFormTechonology, { dispatch }) => {
    const id = toast.loading("esta cargando");
    try {
      if (data.id) {
        await setDoc(doc(db, "technology", data.id), {
          technology: data.technology,
          urlimage: data.urlimage,
          description: data.description,
          url: data.url,
        });
        toast.update(id, {
          render: "All is good",
          type: "success",
          isLoading: false,
          autoClose: 5000,
          closeButton:true,
        });
        dispatch(getTechnology());
      }
    } catch (error) {
      
      toast.update(id, {
        render: "All is good",
        type: "error",
        isLoading: false,
        autoClose: 5000,
        closeButton:true,
      });
    }
  }
);

export const deleteTechnology = createAsyncThunk("technology/delete", async (data: IFormTechonology, { dispatch }) => {
  const id = toast.loading("esta cargando");
  try {
    if(data.id){
      await deleteDoc(doc(db, "technology",data.id ));
      toast.update(id, {
        render: "Technology delete satisfactorily",
        type: "success",
        isLoading: false,
        autoClose: 5000,
        closeButton:true,
      })
      dispatch(getTechnology());
    }

  } catch (error) {
    toast.update(id, {
      render: "Error",
      type: "error",
      isLoading: false,
      autoClose: 5000,
      closeButton:true,
    });
  }
});