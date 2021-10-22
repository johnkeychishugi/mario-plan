export const createProject = (project) =>{
    return (dispatch, getState, { getFirebase, getFirestore })=>{
        //make async call to database
        const firestore = getFirestore();
        firestore.collection('projects').add({
            ...project,
            authorFirstName: 'Ary',
            authorLastName: 'Kalume',
            authorId: 12345,
            createdAt: new Date()
        }).then(()=>{
            dispatch({ type:'ADD_PROJECT', project });
        }).catch((err)=>{
            dispatch({ type:'CREATE_PROJECT_ERROR', err });
        })
    }
} 