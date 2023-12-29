import { addDoc, collection, deleteDoc, doc, updateDoc } from 'firebase/firestore';
import { useState } from 'react';
import { db } from './config';

export const useFirestore = (fbcollection) => {
    const [document, setDocument] = useState(null);
    const [error, setError] = useState(null);

    const collectionRef = collection(db, fbcollection);

    const addDocument = async (document) => {
        try {
            const docRef = await addDoc(collectionRef, { ...document });
            setDocument(docRef);
        } catch (err) {
            setError(err);
        }
    };

    const deleteDocument = async(id)=>{
        const docRef = doc(db,fbcollection,id);
        try{
            await deleteDoc(docRef);
        }
        catch(err){
            setError(err)
        }
    }
    
    const updateDocument=async(id,document)=>{
        const docRef = doc(db,fbcollection,id);
        try{
            await updateDoc(docRef,{
                ...document
            });
        }
        catch(err){
            setError(err)
        }
        
    }

    return { addDocument, deleteDocument,updateDocument,document, error };
};