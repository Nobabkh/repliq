import React from 'react'
import App from '../App'
import { createRoot } from 'react-dom'
import { Provider } from 'react-redux'
import store from '../store'
import MApp from '../MApp'
export default function helper_init() {
  const constant = window.location.hostname.split('.')
  const host = constant[0]
  if (host === 'admin') {
    createRoot(document.getElementById('root')).render(
      <Provider store={store}>
        <App />
      </Provider>,
    )
  } else {
    createRoot(document.getElementById('root')).render(
      <div>
        <MApp />
      </div>,
    )
  }
}
