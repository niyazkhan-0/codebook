import { useEffect, useState } from "react"
import { toast } from "react-toastify"
import { DashboardCard } from "./components/DashboardCard"
import { DashboardEmpty } from "./components/DashboardEmpty"
import { getUser, getUserOrders } from "../../services"
import { useTitle } from './../../hooks/useTitle';

export const DashbaordPage = () => {
  const [orders, setOrders] = useState([])

  useTitle("Dash board")

  useEffect(() => {
    async function fetchOrder() {
      try {
        const data = await getUserOrders();
        setOrders(data);
      } catch (error) {
        toast.error(error.message, {
          position: "top-center",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: false,
          draggable: true,
          progress: undefined,
          theme: "light",
        }
        )
      }

    }
    fetchOrder()
  }, [])

  return (
    <main>
      <section>
        <p className="text-2xl text-center font-semibold dark:text-slate-100 my-10 underline underline-offset-8">My Dashboard</p>
      </section>

      <section>
        {orders.length && orders.map((order) => (
          <DashboardCard key={order.id} order={order} />
        ))}
      </section>

      <section>
        {!orders.length && <DashboardEmpty />}
      </section>
    </main>
  )
}