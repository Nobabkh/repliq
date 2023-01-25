import React from 'react'
import Header from '../mcomponents/Header'
import Footer from '../mcomponents/Footer'
import { ALLproducts } from './Products'

export default function Home() {
  return (
    <div>
      <Header />
      <div>Our products</div>
      <ALLproducts />
      <Footer />
    </div>
  )
}
