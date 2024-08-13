import { useState } from "react"
import type { MenuItem, OrderItem } from "../types"

//generic en typeScript-codigo flexible y reutilizable <>
export default function useOrder(){
    const [order,setOrder] = useState<OrderItem[]>([])//para que no sea de tipo never si no usar el generic y agregarle mas informacion
    //const [total,setTotal] = useState<number>(0)--de este modo no es necesario el generic

    const addItem = (item:MenuItem) =>{//addItem es un funcion y la exportamos en return
        console.log(item)
    }

    return{
        addItem
    }
}