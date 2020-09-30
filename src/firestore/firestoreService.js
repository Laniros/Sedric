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

// db.collection("calls").add({
//         "event": "recording.completed",
//         "payload": {
//             "account_id":"aaaaaaaaaaaaaaaaa",
//             "object": {
//                 "uuid": "ffffffffffff==",
//                 "topic": "vvvvvvvvvvvvvv Meeting",
//                 "start_time": "2020-02-16T11:18:55Z",
//                 "host_email": "interview@sedric.me"
//             }
//         },
//         "download_token": ""
//     }
// )
//     .then(function() {
//         console.log("Document successfully written!");
//     })
//     .catch(function(error) {
//         console.error("Error writing document: ", error);
//     });

export function getCallsFromDB(){
 return db.collection('calls');
}

export function getOneCallFromDB(callId){
    return db.collection('calls').doc(callId);
}

export function setUserProfileData(user) {
    return db
        .collection('users')
        .doc(user.uid)
        .set({
            displayName: user.displayName,
            email: user.email,
        });
}