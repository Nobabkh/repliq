const productdata = [
  {
    pid: 0,
    name: 'Fall Limited Edition Sneakers',
    company: 'Sneaker company',
    price: 250,
    discount: 50,
    description:
      'These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they’ll withstand everything the weather can offer.',
    image: [
      {
        id: 1,
        mainImage: '/images/image-product-1.jpg',
      },
      {
        id: 2,
        mainImage: '/images/image-product-2.jpg',
      },
      {
        id: 3,
        mainImage: '/images/image-product-3.jpg',
      },
      {
        id: 4,
        mainImage: '/images/image-product-4.jpg',
      },
    ],
  },
  {
    pid: 1,
    name: 'Fall Limited Edition HeadPhones',
    company: 'Headphone company',
    price: 250,
    discount: 50,
    description:
      'These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they’ll withstand everything the weather can offer.',
    image: [
      {
        id: 0,
        mainImage: '/images/headphone.jpg',
      },
    ],
  },
]
let cartdata = [
  {
    prod: productdata[0],
    number: 5,
  },
]
export { productdata, cartdata }
