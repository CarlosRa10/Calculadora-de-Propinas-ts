import { useMemo } from "react"
import { formatCurrency } from "../helpers"
import { OrderItem } from "../types"

// //se puede crear componente con el atajo rfc
type  OrderTotalsProps={
    order : OrderItem[],
    tip : number
}

export default function OrderTotals({order,tip}:OrderTotalsProps) {
//useMemo te permite que unicamente se renderice o se vuelva a ejecutar este codigo cuando cambie la dependencia-order-.....reduce(acumulador,valoractual)
    const subtotalAmount = useMemo(()=> order.reduce((total,item)=>total+(item.quantity*item.price),0),[order])
    const tipAmount = useMemo(()=>subtotalAmount*tip,[tip,order])

  return (
    <>
        <div className="space-y-3">
            <h2 className="font-black text-2xl">Totales y Propina:</h2>
            <p>Subtotal a pagar:{' '}
                <span className="font-bold">{formatCurrency(subtotalAmount)} </span>
            </p>
            <p>Propina:{' '}
                <span className="font-bold">{formatCurrency(tipAmount)} </span>
            </p>
            <p>Total a Pagar:{' '}
                <span className="font-bold">$0</span>
            </p>
        </div>
        <button></button>
    
    </>
  )
}
