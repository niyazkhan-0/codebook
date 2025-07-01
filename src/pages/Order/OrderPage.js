import { useLocation } from "react-router-dom";
import { OrderFailed } from "./components/OrderFailed";
import { OrderSuccess } from "./components/OrderSuccess";
import { useTitle } from './../../hooks/useTitle';


export const OrderPage = () => {
    const { state } = useLocation()
    useTitle('Your Orders')
  return (
    <main>
        {state.status ? <OrderSuccess data={state.data} /> : <OrderFailed/>}
    </main>
  )
}
