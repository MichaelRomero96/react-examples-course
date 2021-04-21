import { dataBase } from "./firebase";


export const getProducts = async () => {
    try {
        const querySnapshot = await dataBase.collection("products").get();
        const response = [];
        querySnapshot.forEach((doc) => {
            console.log(doc.data());
            response.push({ ...doc.data(), id: doc.id });
            console.log(response);
            return querySnapshot;
        });
    } catch (error) {
        console.log(error)
    }
}