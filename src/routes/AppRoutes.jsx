import React, { useContext } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { PrivateRoutes } from './PrivateRoutes'
import { PageNotFound } from '../pages/PageNotFound'
import { Login } from '../pages/Login/Login'
import { Home } from '../pages/Home/Home'

import { AuthContext } from '../contexts/AuthProvider'
import { Header } from '../layout/header/Header'
import { Footer } from '../layout/footer/Footer'
import { Contract } from '../pages/Contract/Contract'
import { MyContracts } from '../pages/MyContracts/MyContracts'
import { ContractSelected } from '../pages/ContractSelected/ContractSelected'

export const AppRoutes = () => {

  const { user } = useContext(AuthContext)

  return (
    <BrowserRouter>
        {user && <Header />}
        <Routes>
            <Route path='/gerenciador-de-contratos/' element={<Login />} />
            <Route path='/gerenciador-de-contratos/home' element={<PrivateRoutes />}>
                <Route path='/gerenciador-de-contratos/home' element={<Home />} />   
            </Route>
            <Route path='/gerenciador-de-contratos/mycontracts' element={<PrivateRoutes />}>
                <Route path='/gerenciador-de-contratos/mycontracts' element={<MyContracts />} />   
            </Route>
            <Route path='/gerenciador-de-contratos/mycontracts/:idContract' element={<PrivateRoutes />}>
                <Route path='/gerenciador-de-contratos/mycontracts/:idContract' element={<ContractSelected />} />   
            </Route>
            <Route path='/gerenciador-de-contratos/contract/:idArtist' element={<PrivateRoutes />}>
                <Route path='/gerenciador-de-contratos/contract/:idArtist' element={<Contract />} />   
            </Route>
            <Route path='*' element={<PageNotFound />} />
        </Routes>
        <Footer />
    </BrowserRouter>
  )
}
