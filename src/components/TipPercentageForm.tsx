import type { Dispatch, SetStateAction } from "react"
const tipOptions = [
    {
      id: 'tip-10',
      value: .10,
      label: '10%'
    },
    {
      id: 'tip-20',
      value: .20,
      label: '20%'
    },
    {
      id: 'tip-50',
      value: .50,
      label: '50%'
    },
  ]

type TipPercentageFormProps ={
    setTip:Dispatch<SetStateAction<number>>
}

export default function TipPercentageForm({setTip}:TipPercentageFormProps) {
  return (
    <div>
        <h3 className="font-black text-2xl">Propina:</h3>
        <form>
            {/* Me genera un div por cada opcion*/}
            {tipOptions.map(tip => (

                <div key={tip.id} className="flex gap-2">
                    {/* el htmlFor hace que se conecte con el input el label*/}
                    <label htmlFor={tip.id}>{tip.label} </label>
                    <input 
                        id={tip.id}
                        type="radio"
                        // definimos el name y su value para que no pueda elegir mas de una opcion 
                        name="tip"
                        value={tip.value}
                        onChange={e =>setTip(+e.target.value)}//la opcion de ValueAsNumber no cambia los de tipo radio---Parsefloat(e.target.value) funciona correctamente tambien
                    />
                </div>

            ))}
        </form>
    </div>
  )
}
