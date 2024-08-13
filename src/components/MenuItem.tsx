import type { MenuItem } from "../types"

type MenuItemProps ={
  item: MenuItem
  addItem: (item:MenuItem) => void//void significa una funcion que no retorna nada
}

//rfc o rafc
export default function MenuItem({item, addItem}:MenuItemProps) {
  return (
    <button
    className="border-2 border-teal-400 hover:bg-teal-200 w-full p-3 flex justify-between"
    onClick={()=>addItem(item)}//onClick es un prop o atributo de react
    >

    <p>{item.name} </p>
    <p className="font-black">${item.price} </p>
    </button>
  )
}
