import React, { useState } from 'react'
import { FaBars } from 'react-icons/fa'
import { RxCross2 } from 'react-icons/rx'
import { GET_FROM_STORAGE, GET_FROM_STORAGE_ENCRIPTED } from '../Data/localstorage'
import Cart from './Cart'
import { BsCart3 } from 'react-icons/bs'
import { useNavigate } from 'react-router-dom'

export default function Navbar() {
  const [navbarOpen, setNavbarOpen] = React.useState(false)
  const [Logged, setLogged] = React.useState(true)
  const [cartopen, setCartOPen] = useState(false)
  if (GET_FROM_STORAGE('Logged') !== undefined) {
    if (GET_FROM_STORAGE_ENCRIPTED('Logged') === 'True') {
      setLogged(true)
    } else {
      setLogged(false)
    }
  }
  let navigate = useNavigate()
  return (
    <>
      <nav className="relative flex flex-wrap items-center justify-between px-2 py-3 bg-cyan-500 mb-3">
        <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
          <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
            {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
            <a
              className="text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase text-white"
              onClick={() => {
                navigate('/')
              }}
            >
              REPLIQ Challenge
            </a>
            <button
              className="text-white cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
              type="button"
              onClick={() => setNavbarOpen(!navbarOpen)}
            >
              {!navbarOpen ? <FaBars /> : <RxCross2 />}
            </button>
          </div>
          <div
            className={'lg:flex flex-grow items-center' + (navbarOpen ? ' flex' : ' hidden')}
            id="example-navbar-danger"
          >
            {Logged ? <Loggedin setcart={setCartOPen} /> : <NotLogged />}
          </div>
        </div>
      </nav>
      {cartopen ? <Cart setcart={setCartOPen} /> : <></>}
    </>
  )
}

function NotLogged() {
  let navigate = useNavigate()
  return (
    <ul className="flex flex-col lg:flex-row list-none lg:ml-auto">
      <li className="nav-item">
        {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
        <a
          className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
          onClick={() => {
            navigate('/products')
          }}
        >
          <span className="ml-2">Products</span>
        </a>
      </li>
      <li className="nav-item">
        {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
        <a
          className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
          onClick={() => {
            navigate('/login')
          }}
        >
          <span className="ml-2">Login</span>
        </a>
      </li>
      <li className="nav-item">
        {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
        <a
          className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
          onClick={() => {
            navigate('/register')
          }}
        >
          <span className="ml-2">Registration</span>
        </a>
      </li>
    </ul>
  )
}

function Loggedin(prop) {
  let navigate = useNavigate()
  return (
    <ul className="flex flex-col lg:flex-row list-none lg:ml-auto">
      <li className="nav-item">
        {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
        <a
          className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
          onClick={() => {
            navigate('/products')
          }}
        >
          <span className="ml-2">Products</span>
        </a>
      </li>
      <li className="nav-item">
        {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
        <a
          className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
          href="#"
        >
          <span className="ml-2">Account</span>
        </a>
      </li>
      <li className="nav-item">
        <button
          className="ml-2 bg-blue-500 px-3 py-2 flex items-center text-xl uppercase font-bold leading-snug text-white hover:opacity-75"
          onClick={() => {
            prop.setcart((prevState) => {
              return !prevState
            })
          }}
        >
          <BsCart3 />
        </button>
      </li>
    </ul>
  )
}
