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

export function getCallsFromDB(){
 return db.collection('calls');
}

export function getOneCallFromDB(callId){
    return db.collection('calls').doc(callId);
}

