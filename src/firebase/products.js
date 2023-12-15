import { database } from "./client.js"
import { getDocs, collection, query, where, getDoc, doc, QuerySnapshot } from "firebase/firestore"

export const myProducts = (categoryId) => {
        return new Promise((resolve, reject) => {
           
            const prodsRef = categoryId

            ? query (collection (database, 'products'), where ('category', '==', categoryId))
            :collection (database, 'products')

        getDocs(prodsRef)
        .then (QuerySnapshot=> {

            const adaptedProducts= QuerySnapshot.docs.map (documentSnapshot => {
                const fields = documentSnapshot.data()

                return (
                    {
                        id: documentSnapshot.id,
                        ...fields
                    }
                )
            })
            console.log (adaptedProducts)
            resolve (adaptedProducts)
        })
        .catch (error =>{
            reject(error)
        }
            )
    })
}


export const myProductsById = (itemId) => {
    const prodRef = doc(database, 'products', itemId)

    return getDoc(prodRef)
                .then(documentSnapshot => {
                    const fields = documentSnapshot.data()
                    const adaptedProduct = { id: documentSnapshot.id, ...fields }
                    return adaptedProduct 
                })
                .catch(error => {
                    return error
                })
}

