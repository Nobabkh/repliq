import React, { useState } from 'react'
import { cartdata, productdata } from '../data'
import { AiOutlineShoppingCart } from 'react-icons/ai'
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa'
import minus from '../images/icon-minus.svg'
import plus from '../images/icon-plus.svg'
import Header from '../mcomponents/Header'
import Lightbox from '../mcomponents/Lightbox'
import { useParams } from 'react-router-dom'
import Cart from '../mcomponents/Cart'
import Footer from '../mcomponents/Footer'

export default function Product() {
  const param = useParams()
  const { id } = param
  const pid = parseInt(id)
  const data = productdata[pid].image
  const pro = productdata[pid]

  const [products] = useState(data)
  console.log(products)
  const [value, setValue] = useState(0)
  const [amount, setAmount] = useState(0)
  const [slideIndex, setSlideIndex] = useState(1)
  const [showLightbox, setShowLightbox] = useState(false)

  const { mainImage } = products[value]

  const nextSlide = () => {
    if (slideIndex !== products.length) {
      setSlideIndex(slideIndex + 1)
    } else if (slideIndex === products.length) {
      setSlideIndex(1)
    }
  }

  const previousSlide = () => {
    if (slideIndex !== 1) {
      setSlideIndex(slideIndex - 1)
    } else if (slideIndex === 1) {
      setSlideIndex(products.length)
    }
  }

  const handleMinus = () => {
    setAmount(amount - 1)
    if (amount <= 0) setAmount(0)
  }
  function persentagecalculator(price, discount) {
    price = price / 100
    discount = 100 - discount
    price = price * discount
    return price
  }

  return (
    <>
      <Header />
      {showLightbox && (
        <Lightbox
          products={products}
          slideIndex={slideIndex}
          nextSlide={nextSlide}
          previousSlide={previousSlide}
          setShowLightbox={setShowLightbox}
        />
      )}

      <section className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 lg:place-items-center lg:py-20">
        <article>
          <div className="lg:hidden">
            {products.map((item, index) => (
              <div key={index} className={slideIndex === index + 1 ? 'relative' : 'hidden'}>
                <img
                  src={item.mainImage}
                  alt=""
                  className="w-full lg:rounded-2xl cursor-pointer"
                  onClick={() => setShowLightbox(true)}
                />

                <ul className="lg:hidden">
                  <li>
                    <button
                      onClick={previousSlide}
                      className="bg-white rounded-full p-5 shadow absolute left-4 top-1/2 -translate-y-1/2"
                    >
                      <FaChevronLeft />
                    </button>
                  </li>
                  <li>
                    <button
                      onClick={nextSlide}
                      className="bg-white rounded-full p-5 shadow absolute right-4 top-1/2 -translate-y-1/2"
                    >
                      <FaChevronRight />
                    </button>
                  </li>
                </ul>
              </div>
            ))}
          </div>

          <div className="hidden lg:block">
            <img
              src={mainImage}
              alt=""
              className="w-full lg:rounded-2xl cursor-pointer"
              onClick={() => setShowLightbox(true)}
            />
          </div>

          <ul className="hidden lg:flex items-center justify-start gap-5 flex-wrap mt-5">
            {products.map((item, index) => (
              <li
                key={item.id}
                onClick={() => setValue(index)}
                className={`${
                  index === value && 'border-2 border-orange-400 opacity-80'
                } border-2 rounded-2xl overflow-hidden cursor-pointer`}
              >
                <img src={item.mainImage} alt="" className="w-20" />
              </li>
            ))}
          </ul>
        </article>

        <article className="px-8 pb-10">
          <h2 className="bg-slate-100 py-1 px-2 text-orange-400 uppercase tracking-wide text-sm font-bold inline-block rounded shadow mb-10">
            {pro.company}
          </h2>
          <h1 className="text-slate-900 mb-10 font-bold text-3xl lg:text-4xl">{pro.name}</h1>
          <p className="text-slate-600 mb-10 leading-relaxed">{pro.description}</p>

          <div className="flex flex-wrap items-center justify-between lg:flex-col lg:items-start lg:gap-2">
            <ul className="flex items-center gap-5">
              <li className="text-slate-900 font-bold text-2xl">
                ${persentagecalculator(pro.price, pro.discount)}.00
              </li>
              <li className="bg-orange-100 py-1 px-2 text-orange-400 tracking-wide text-sm font-bold inline-block rounded shadow">
                {pro.discount}%
              </li>
            </ul>

            <p className="text-slate-600 text-sm">
              <s>${pro.price}.00</s>
            </p>
          </div>

          <div className="mt-10 lg:flex items-center justify-between gap-2">
            <ul className="flex items-center justify-between bg-slate-100 py-2 px-4 rounded shadow lg:flex-1">
              <li onClick={handleMinus} className="cursor-pointer">
                <img src={minus} alt="" />
              </li>
              <li>{amount}</li>
              <li onClick={() => setAmount(amount + 1)} className="cursor-pointer">
                <img src={plus} alt="" />
              </li>
            </ul>

            <div className="lg:flex-1">
              <button
                className="flex items-center justify-center gap-4 bg-orange-500 py-2 px-4 text-white font-bold rounded-lg shadow mt-5 w-full lg:mt-0 hover:bg-orange-600 transition-all duration-200"
                onClick={() => {
                  cartdata.push({ number: amount, prod: pro })
                }}
              >
                <AiOutlineShoppingCart /> Add to cart
              </button>
            </div>
          </div>
        </article>
      </section>
      <Footer />
    </>
  )
}
