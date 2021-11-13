import { collection, getDocs, query } from "@firebase/firestore";
import { createAsyncThunk } from "@reduxjs/toolkit";
import projectConverter from "../../converter/ProjectConverter";
import { db } from "../../FireBase/FireBase";
import { IProject } from "../../interface/interface";

export const getProjects = createAsyncThunk("project/getProjects", async () => {
  try {
    const q = query(collection(db, "projects"));
    const snapshot = await getDocs(q.withConverter(projectConverter));
    const data: IProject[] = [];
    snapshot.forEach((doc) => {
      data.push({ ...doc.data() });
    });
    return data;
  } catch (error) {
  }
});

