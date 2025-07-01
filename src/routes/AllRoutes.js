import React from 'react'
import {Routes, Route } from "react-router-dom";
import { HomePage, ProductsList, ProductDetails, Login, Register, CartPage , OrderPage , DashbaordPage , PageNotFound} from '../pages';
import { ProtectedRoute } from './ProtectedRoute';



export const AllRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path="/product" element={<ProductsList/>} />
        <Route path="/product/:id" element={<ProductDetails/>} />

        <Route path='login' element={<Login/>} />
        <Route path='register' element={<Register/>} />

        <Route path='cart' element={<ProtectedRoute><CartPage/></ProtectedRoute>} />
        <Route path='order-summary' element={<ProtectedRoute><OrderPage/></ProtectedRoute>} />
        <Route path='/dashboard' element={<ProtectedRoute><DashbaordPage/></ProtectedRoute>} />

        <Route path="*" element={<PageNotFound/>} />
      </Routes>
    </>
  )
}
