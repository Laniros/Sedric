import {useEffect} from "react";
import {dataFromSnapshot} from "./firestoreService";

export default function useFirestoreDoc({query, data, deps}){

    useEffect(()=>{

        const unsubscribe = query().onSnapshot(
            snapshot => {

                data(dataFromSnapshot(snapshot));
            },
        );
        return () => {
            unsubscribe()
        }
    }, deps )


}