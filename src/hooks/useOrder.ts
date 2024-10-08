import { useState } from "react"
import type { MenuItem, OrderItem } from "../types"

//generic en typeScript-codigo flexible y reutilizable <>
export default function useOrder(){
    const [order,setOrder] = useState<OrderItem[]>([])//para que no sea de tipo never si no usar el generic y agregarle mas informacion
    //const [total,setTotal] = useState<number>(0)--de este modo no es necesario el generic
    const [tip,setTip] = useState(0)//La propiba inicial es cero hasta que el cliente elija la propina

    const addItem = (item:MenuItem) =>{//addItem es un funcion y la exportamos en return
        const itemExist = order.find(orderItem =>orderItem.id === item.id)//Una const que busca por cada elemento del state order su id y que sea igual que el item que le estamos pasando item.id
        if(itemExist){
            //map te retorna un nuevo arreglo modificado
            const updateOrder = order.map(orderItem=> orderItem.id === item.id ? 
                {...orderItem, quantity: orderItem.quantity + 1}://Toma lo que tenemos en cantidad y le agrega uno
                 orderItem) 
                 setOrder(updateOrder)
        }else{
            const newItem = {...item, quantity:1}
            setOrder([...order,newItem])

        }
    }
    //id va a tener el typo valor de MenuItem en id
    const removeItem = (id:MenuItem['id'])=>{
        setOrder(order.filter(item=>item.id !== id))
     }

     const placeOrder = ()=>{
        setOrder([])
        setTip(0)
     }

    //De esta forma lo hacemos disponible y lo podemos usar en nuestros componentes
    return{
        order,
        tip,
        setTip,
        addItem,
        removeItem,
        placeOrder
    }
}