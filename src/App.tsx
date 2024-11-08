import MenuItem from "./components/MenuItem"
import OrderContents from "./components/OrderContents"
import OrderTotals from "./components/OrderTotals"
import TipPercentageForm from "./components/TipPercentageForm"
import { menuItems } from "./data/db"
import useOrder from "./hooks/useOrder"
//finalizado
function App() {
  const {order,tip, setTip, addItem, removeItem, placeOrder} = useOrder()//no se le pasa ningun argumento pero se extrae addItem de useOrder
  //Fragment
  return (
    <>
      <header className="bg-teal-400 py-5">
        <h1 className="text-center text-4xl font-black">Calculadora de Propinas y Consumo</h1>
      </header>
      <main className=" max-w-7xl mx-auto py-20 grid md:grid-cols-2"> 
        <div className="p-5 ">
          <h2 className="text-4xl font-black ">Menú</h2>
          <div className="space-y-3 mt-10">
            {menuItems.map(item=>(
              //Para hacer dinamico nuestro componente MenuItem- Para eso tenemos que pasarle el prop a MenuItem con este objeto item
              <MenuItem //Siempre que itero necesito un id unico osea un key
                  key={item.id}
                  item={item}//item y objeto de item
                  addItem={addItem}
              />
          ))}
          </div>
        </div>
        <div className="border border-dashed border-slate-300 p-5 rounded-lg space-y-10">
          {/* order.length sin el > 0 tambien agarra */}
          {order.length > 0 ?(
            <>
                <OrderContents
                  order={order}
                  removeItem={removeItem}
                />
                <TipPercentageForm
                  setTip={setTip}
                  tip={tip}
                />

                <OrderTotals
                  order={order}
                  tip={tip}
                  placeOrder={placeOrder}
                />                  
            </>
          ):(
            <p className="text-center">La orden esta vacia</p>
          )}
        </div>
      </main>
    </>
  )
}

export default App
