import { db } from ".";
import { collection, addDoc,setDoc,getDocs, doc,deleteDoc } from "firebase/firestore"; 
//En este fichero crearemos toda la logica para la BD

export const addNewTask=async task=>{
    try {
        const docRef = await addDoc(collection(db, "tasks"), task);
        console.log("Document written with ID: ", docRef.id);
    } catch (e) {
        console.error("Error adding document: ", e);
    }
}

export const getTasks= async()=>{
    const querySnapshot = await getDocs(collection(db, "tasks"));
    // querySnapshot.forEach((doc) => {
    //     // doc.data() is never undefined for query doc snapshots
    //     console.log(doc.id, " => ", doc.data());
    // });
    const tasks=querySnapshot.docs.map(doc => {
        // doc.data() is never undefined for query doc snapshots
        return {...doc.data(),id:doc.id}
    });
    // console.log(tasks);
    return tasks;
}

export const updateTask=async(task)=>{
    await setDoc(doc(db, "tasks", task.id), {
        title: task.title,
        description: task.description
    });
    // console.log(task);
}

export const deleteTask=async(id)=>{
    await deleteDoc(doc(db, "tasks", id));
}