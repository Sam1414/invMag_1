import { initializeApp } from "firebase/app"
import { getDatabase, ref, set, get } from "firebase/database"

const useFirestore = () => {

    // Firebase configuration
    const firebaseConfig = {
        apiKey: "AIzaSyBDu_DPcv_q2s88pquYjlhAf9-nbYkhIoE",
        authDomain: "inv-manage-4439b.firebaseapp.com",
        databaseURL: "https://inv-manage-4439b-default-rtdb.firebaseio.com",
        projectId: "inv-manage-4439b",
        storageBucket: "inv-manage-4439b.appspot.com",
        messagingSenderId: "174836553939",
        appId: "1:174836553939:web:9a7485d81b89197d919c26",
        measurementId: "G-J92EL8LGLY"
    };

    // Initialize Firebase
    const app = initializeApp(firebaseConfig)

    const db = getDatabase(app)

    // Write Data
    const writeData = async (path: string, data: any) => {
        const reference = ref(db, path)
        const response = await set(reference, data).then(() => {
            return "Successfully Written"
        }).catch((err) => {
            return "Error: " + err.message
        });

        return response
    }

    // Static Read Method (Not Realtime)
    const readData = async () => {
        const dbRef = ref(getDatabase(app))

        const response = await get(dbRef).then((snapshot) => {
            if (snapshot.exists()) {
                return snapshot.val()
            } else {
                return "No data available"
            }
        }).catch((err) => {
            return "Error: " + err.message
        });

        return response
    };

    return {
        writeData,
        readData,
    };

}

export default useFirestore;
