import firebase from '../config/firebase'

export const db = firebase.firestore();

export function dataFromSnapshot(snapshot){
    if(!snapshot.exists) return undefined;
    const data = snapshot.data();

    return {
        ...data,
        id: snapshot.id

    }
    

}

export function getCallsFromDB(observer){
 return db.collection('calls').onSnapshot(observer);
}