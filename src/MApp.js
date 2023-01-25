import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './Pages/Home'
import Login from './Pages/Login'
import Registration from './Pages/Registration'
import Product from './Pages/Product'
import Cart from './mcomponents/Cart'
import React, { useEffect } from 'react'
import { CHECK_VALIDITY } from './Data/localstorage'
import './index.css'
import { Products } from './Pages/Products'
function MApp() {
  useEffect(() => {
    CHECK_VALIDITY()
  }, [])
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path={'/'} element={<Home />} />
          <Route path={'/home'} element={<Home />} />
          <Route path={'/login'} element={<Login />} />
          <Route path={'/register'} element={<Registration />} />
          <Route path={'/products'} element={<Products />} />
          <Route path={'/product/:id'} element={<Product />} />
          <Route path={'/cart'} element={<Cart />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default MApp
