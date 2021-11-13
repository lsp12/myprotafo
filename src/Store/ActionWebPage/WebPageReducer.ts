import { addDoc, collection, deleteDoc, doc, getDocs, query } from "@firebase/firestore";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { setDoc } from "firebase/firestore";
import { toast } from "react-toastify";
import projectConverter from "../../converter/ProjectConverter";
import { db } from "../../FireBase/FireBase";
import { IProject } from "../../interface/interface";


export const getWepPage = createAsyncThunk("webPage/get", async ()=>{
    try {
        const q = query(collection(db, "projects"));
    const snapshot = await getDocs(q.withConverter(projectConverter));
    const data: IProject[] = [];
    snapshot.forEach((doc) => {
      data.push({ ...doc.data() });
    });
    return data;

    } catch (error) {
        toast.error("error");
    }
})


export const deleteWebPage = createAsyncThunk("webPage/delete", async (data: IProject, { dispatch }) => {
    const id = toast.loading("this load");
    try {
      if(data.id){
        await deleteDoc(doc(db, "projects",data.id ));
        toast.update(id, {
          render: "Technology delete satisfactorily",
          type: "success",
          isLoading: false,
          autoClose: 5000,
          closeButton:true,
        })
        dispatch(getWepPage());
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

  export const createProject = createAsyncThunk("project/createProject", async (project: IProject, {dispatch}) => {
    const id = toast.loading("this load");
    try {
      await addDoc(collection(db, "projects"), project);
      toast.update(id, {
        render: "Web page Create success",
        type: "success",
        isLoading: false,
        autoClose: 5000,
        closeButton:true,
      })
      dispatch(getWepPage());
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

  export const updateProject = createAsyncThunk("project/updateProject", async (project: IProject, {dispatch}) => {
    const id = toast.loading("this load");
    try {
        if (project.id) {
          await setDoc(doc(db, "projects", project.id), {
            title: project.title,
            description: project.description,
            link: project.link,
            item: project.item,
          });
        }
        toast.update(id, {
            render: "All is good",
            type: "success",
            isLoading: false,
            autoClose: 5000,
            closeButton:true,
          });
          dispatch(getWepPage());
      } catch (error) {
        toast.update(id, {
          render: "All is good",
          type: "error",
          isLoading: false,
          autoClose: 5000,
          closeButton:true,
        });
      }
  });