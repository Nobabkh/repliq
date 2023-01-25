import React from 'react'
import Header from '../mcomponents/Header'
import Footer from '../mcomponents/Footer'
import { productdata } from '../data'
import { useNavigate } from 'react-router-dom'

function Products() {
  return (
    <div>
      <Header />
      <div>All products</div>
      <div className={'h-screen bg-gray-100 flex items-center justify-content'}>
        <ALLproducts />
      </div>
      <Footer />
    </div>
  )
}

const ALLproducts = () => {
  return productdata.map((produc) => {
    // eslint-disable-next-line react/jsx-key
    return <ProductList data={produc} />
  })
}
function ProductList(props) {
  // eslint-disable-next-line react/prop-types
  const prop = props.data
  let navigate = useNavigate()
  return (
    <div
      className={'card'}
      onClick={() => {
        // eslint-disable-next-line react/prop-types
        navigate('/product/' + prop.pid)
      }}
    >
      {/* eslint-disable-next-line react/prop-types */}
      <img
        /* eslint-disable-next-line react/prop-types */
        src={prop.image[0].mainImage}
        className={'w-full h-full text-black'}
        alt={'headphones'}
      />
      <div className={'p-5 flex-col gap-3'}>
        <div className={'flex items-center gap-2'}>
          <span className={'badge text-black'}>Stock Ready</span>
          {/* eslint-disable-next-line react/prop-types */}
          <span className={'badge text-black'}>{prop.company}</span>
        </div>
        <h2
          className={'overflow-ellipsis overflow-hidden whitespace-nowrap text-2xl  text-black'}
          title={'Best HeadPhones'}
        >
          {/* eslint-disable-next-line react/prop-types */}
          {prop.name}
        </h2>
        <div>
          <span className={'text-xl font-bold'}>
            {/* eslint-disable-next-line react/prop-types */}$
            {persentagecalculator(prop.price, prop.discount)}
          </span>
          <div className={'flex items-center gap-2 mt-1'}>
            {/* eslint-disable-next-line react/prop-types */}
            <span className={'text-sm line-through opacity-50'}>${prop.price}</span>
            <span className={'bg-green-400 px-1.5 py-0.5 rounded-md text-xs text-white'}>
              {/* eslint-disable-next-line react/prop-types */}
              save {prop.discount}%
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}

function persentagecalculator(price, discount) {
  price = price / 100
  discount = 100 - discount
  price = price * discount
  return price
}
export { Products, ALLproducts, ProductList, persentagecalculator }
