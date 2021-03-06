export const createProject = (project) =>{
    return (dispatch, getState, { getFirebase, getFirestore })=>{
        //make async call to database
        const profile = getState().firebase.profile;
        const authorId = getState().firebase.auth.uid;
        const firestore = getFirestore();
        firestore.collection('projects').add({
            ...project,
            authorFirstName: profile.firstName,
            authorLastName: profile.lastName,
            authorId: authorId,
            createdAt: new Date()
        }).then(()=>{
            dispatch({ type:'ADD_PROJECT', project });
        }).catch((err)=>{
            dispatch({ type:'CREATE_PROJECT_ERROR', err });
        })
    }
} 