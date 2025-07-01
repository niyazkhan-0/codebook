import { createContext, useContext, useReducer } from "react";
import { cartReducers } from "../reducers";

const cartInitialState = {
    cartList: [],
    total: 0
}

const CartContext = createContext(cartInitialState);

export const CartProvider = ({children}) => {
    const [state , dispatch] = useReducer(cartReducers, cartInitialState)

    function addToCart(product){
        let updatedCartList = state.cartList.concat(product)
        let updatedTotal = state.total + product.price
        dispatch({
            type:"ADD_TO_CART",
            payload:{
                products : updatedCartList,
                total : updatedTotal
            }
        })
    }

    function removeFromCart(product){
        let updatedCartList = state.cartList.filter((item) => item.id !== product.id)
        let updatedTotal = state.total - product.total
        dispatch({
            type:"REMOVE_FROM_CART",
            payload:{
                products : updatedCartList,
                total : updatedTotal
            }
        })
    }


    function clearCart(){
        dispatch({
            type:"CLEAR_CART",
            payload:{
                products: [],
                total : 0
            }
        })
    }

    const value = {
        cartList: state.cartList,
        total: state.total,
        addToCart,
        removeFromCart,
        clearCart

    }

    return (
        <CartContext.Provider value={value}>
            {children}
        </CartContext.Provider>
    )
}

export const useCart = () => {
    const context = useContext(CartContext);
    return context;
}