import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

import { doc, getDoc, getFirestore } from "firebase/firestore"
import { ItemDetail } from "../ItemDetail/ItemDetail"
import { Loading } from "../Loading/Loading"

import './ItemDetailContainer.css'

export const ItemDetailContainer = () => {
    const [ product, setProduct ] = useState({})
    const [ loading, setLoading ] = useState(true)
    const { pid } = useParams()

    useEffect(() =>{
        const dbFirestore = getFirestore()
        const queryDoc = doc(dbFirestore, 'Products', pid)
        getDoc(queryDoc)
        .then(res => setProduct( {id: res.id, ...res.data() } ))
        .catch(err => console.log(err))
        .finally(()=> setLoading(false))
    }, [pid])
    

    return (
        <>
            { loading ?
                <Loading />
            :
                <ItemDetail product={product} />
            }
        </>
    )
}
