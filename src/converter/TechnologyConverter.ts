import { QueryDocumentSnapshot, SnapshotOptions } from "@firebase/firestore";
import { IFormTechonology } from "../interface/interface";

const TechnologyConverter = {
    toFirestore:(technology:IFormTechonology)=>({
        ...technology,
    }),
    fromFirestore:(snapshot:QueryDocumentSnapshot, options: SnapshotOptions):IFormTechonology=>{
        const data = snapshot.data(options);
        const {technology,description,urlimage,url} = data;
        return {
            id:snapshot.id,
            technology,
            urlimage,
            description,
            url
        }as IFormTechonology;
    }
}

export default TechnologyConverter
