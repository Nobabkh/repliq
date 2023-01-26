import React from 'react'
import iconDelete from '../images/icon-delete.svg'
import { cartdata } from '../data'
import { RxCross2 } from 'react-icons/rx'

function persentagecalculator(price, discount) {
  price = price / 100
  discount = 100 - discount
  price = price * discount
  return price
}
export default function Cart(pop) {
  const [product, setProducts] = React.useState(cartdata)
  const removeproduct = (produ) => {
    setProducts(() => {
      return product.filter((ele) => {
        return ele !== produ
      })
    })
  }

  let showproducts = product.map((pdata) => {
    return (
      // eslint-disable-next-line react/jsx-key
      <div className="flex items-center justify-between">
        <img src={pdata.prod.image[0].mainImage} alt="" className="rounded-lg w-14" />
        <ul>
          <li className="text-slate-600 text-sm">{`${pdata.prod.name.substring(0, 23)}...`}</li>
          <li className="text-slate-600 text-sm">
            ${persentagecalculator(pdata.prod.price, pdata.prod.discount)} x {pdata.number}{' '}
            <span className="font-bold text-slate-900">
              ${persentagecalculator(pdata.prod.price, pdata.prod.discount) * pdata.number}.00
            </span>
          </li>
        </ul>

        <button
          onClick={() => {
            removeproduct(pdata)
          }}
        >
          <img src={iconDelete} alt="" />
        </button>
      </div>
    )
  })

  return (
    <>
      <article
        className="bg-white rounded-2xl shadow-2xl p-8 absolute right-8 top-32 left-8 lg:w-96 lg:left-auto lg:top-20"
        style={{
          zIndex: 1000,
        }}
      >
        <button
          className={'pi-5'}
          onClick={() => {
            pop.setcart(false)
          }}
        >
          <RxCross2 />
        </button>
        <h2 className="border-b border-slate-400 font-bold pb-2 mb-8">Cart</h2>

        {showproducts}

        <button className="bg-orange-500 py-2 px-4 text-white font-bold rounded-lg shadow mt-5 w-full hover:bg-orange-600 transition-all duration-200">
          Checkout
        </button>
      </article>
    </>
  )
}
