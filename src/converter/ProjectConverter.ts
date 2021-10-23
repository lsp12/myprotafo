import { QueryDocumentSnapshot, SnapshotOptions } from "@firebase/firestore";
import { IProject } from "../interface/interface";

const projectConverter = {
    toFirestore:(project:IProject)=>({
        ...project,
    }),
    fromFirestore:(snapshot:QueryDocumentSnapshot, options: SnapshotOptions):IProject=>{
        const data = snapshot.data(options);
        const {title,description,link,item} = data;
        return {
            id:snapshot.id,
            title,
            description,
            link,
            item
        }as IProject;
    }
}

export default projectConverter;
