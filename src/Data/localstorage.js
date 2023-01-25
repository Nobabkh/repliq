import { GetAPI_KEY } from '../database/KeyHandeler'
import CryptoJS from 'crypto-js'

const SAVE_PERMANENT = (name, value) => {
  localStorage.setItem(name, CryptoJS.AES.encrypt(value, GetAPI_KEY()))
}
const DELETE_STORAGE = (name) => {
  localStorage.removeItem(name)
}
const GET_FROM_STORAGE_ENCRIPTED = (name) => {
  return CryptoJS.AES.decrypt(localStorage.getItem(name), GetAPI_KEY())
}

const GET_FROM_STORAGE = (name) => {
  return localStorage.getItem(name), GetAPI_KEY()
}
const SAVE_WITH_DURATION_EN = (vname, value, day) => {
  localStorage.setItem(vname, CryptoJS.AES.encrypt(value, GetAPI_KEY()))
  let exdate = new Date(Date.now())
  exdate.setDate(exdate.getDate() + day)
  let exdata = JSON.parse(localStorage.getItem('expdates'))
  if (exdata == null) {
    exdata = []
  }

  let myob = { date: exdate.toDateString(), name: vname }
  let inside = false
  exdata.map((data) => {
    if (data.name === vname) {
      console.log(data.name + ' ' + vname)
      inside = true
      console.log('updating')
      console.log(exdate)
      return {
        ...data,
        date: exdate.toDateString(),
      }
    } else {
      return data
    }
  })
  if (!inside) {
    exdata.push(myob)
  }

  localStorage.setItem('expdates', JSON.stringify(exdata))
}

const SAVE_WITH_DURATION = (vname, value, day) => {
  localStorage.setItem(vname, value)
  let exdate = new Date(Date.now())
  exdate.setDate(exdate.getDate() + day)
  let exdata = JSON.parse(localStorage.getItem('expdates'))
  if (exdata == null) {
    exdata = []
  }

  let myob = { date: exdate.toDateString(), name: vname }
  let inside = false
  console.log(exdata)
  exdata.map((data) => {
    if (data.name === vname) {
      console.log(data.name + ' ' + vname)
      inside = true
      console.log('updating')
      console.log(exdate)
      return {
        ...data,
        date: exdate.toDateString(),
      }
    } else {
      return data
    }
  })
  if (!inside) {
    exdata.push(myob)
  }

  localStorage.setItem('expdates', JSON.stringify(exdata))
}
const CHECK_VALIDITY = () => {
  let exdata = JSON.parse(localStorage.getItem('expdates'))
  if (exdata != null) {
    let current_date = new Date(Date.now())
    for (let i = 0; i < exdata.length; i++) {
      const data = exdata[i]
      let comp = new Date(data.date)
      if (comp <= current_date) {
        DELETE_STORAGE(data.name)
        console.log(exdata)
        const temp1 = exdata.slice(0, i - 1)
        const temp2 = exdata.slice(i + 1, exdata.length - 1)
        exdata = temp1.concat(temp2)
        console.log(exdata)
        SAVE_WITHOUT_ENCRIPTION('espdates', JSON.stringify(exdata))
      }
    }
  }
}
const SAVE_WITHOUT_ENCRIPTION = (name, value) => {
  localStorage.setItem(name, value)
}

export {
  SAVE_PERMANENT,
  SAVE_WITH_DURATION,
  DELETE_STORAGE,
  GET_FROM_STORAGE,
  CHECK_VALIDITY,
  SAVE_WITHOUT_ENCRIPTION,
  GET_FROM_STORAGE_ENCRIPTED,
  SAVE_WITH_DURATION_EN,
}
