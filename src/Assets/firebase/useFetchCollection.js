import { collection, onSnapshot } from 'firebase/firestore';
import { useEffect, useState } from 'react';
import { db } from './config';

const useFetchCollection = (fbCollection) => {
    const [documents, setDocuments] = useState(null);

    useEffect(() => {
        const collectionRef = collection(db, fbCollection);
        const unsubscribe = onSnapshot(collectionRef, (Snapshot) => {
            let results = [];
            Snapshot.docs.forEach((doc) => {
                results.push({ ...doc.data(), id: doc.id });
            });
            setDocuments(results);
        });

        return () => unsubscribe();
    }, [fbCollection]);

    

    return { documents };
};

export default useFetchCollection;