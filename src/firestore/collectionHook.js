import {useEffect} from "react";
import {dataFromSnapshot} from "./firestoreService";

export default function useFirestoreCollection({query, data, deps}){

    useEffect(()=>{

        const unsubscribe = query().onSnapshot(
            snapshot => {
                const docs = snapshot.docs.map(doc => dataFromSnapshot(doc));
                data(docs);
            },
        );
        return () => {
            unsubscribe()
        }
    }, deps )



}