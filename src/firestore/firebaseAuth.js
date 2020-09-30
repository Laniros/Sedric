import firebase from '../config/firebase';
import { setUserProfileData } from './firestoreService';

export function signInWithEmail(details) {
    return firebase
        .auth()
        .signInWithEmailAndPassword(details.email, details.password);
}

export function signOutFirebase() {
    return firebase.auth().signOut();
}

export async function registerInFirebase(details) {
    try {
        const result = await firebase
            .auth()
            .createUserWithEmailAndPassword(details.email, details.password);
        await result.user.updateProfile({
            displayName: details.displayName,
        });
        return await setUserProfileData(result.user);
    } catch (error) {
        throw error;
    }
}

export function updateUserPassword(details) {
    const user = firebase.auth().currentUser;
    return user.updatePassword(details.newPassword);
}







