import React from 'react'
import Header from '../mcomponents/Header'
import Footer from '../mcomponents/Footer'

export default function Login() {
  return (
    <div>
      <Header />
      <LoginBody />
      <Footer />
    </div>
  )
}

function LoginBody() {
  const [formdata, setformdata] = React.useState({
    email: '',
    password: '',
  })

  function HandleChange(event) {
    setformdata((prevState) => {
      return {
        ...prevState,
        [event.target.name]:
          event.target.type !== 'checkbox' ? event.target.value : event.target.checked,
      }
    })
  }
  return (
    <div className="min-h-screen p-6 bg-gray-100 flex items-center justify-center">
      <div className="container max-w-screen-lg mx-auto">
        <div>
          <h2 className="font-semibold text-xl text-gray-600">Login</h2>
          <p className="text-gray-500 mb-6">Login here</p>

          <div className="bg-white rounded shadow-lg p-4 px-4 md:p-8 mb-6">
            <form onSubmit={cancelsubmit}>
              <div className="grid gap-4 gap-y-2 text-sm grid-cols-1 lg:grid-cols-3">
                <div className="text-gray-600">
                  <p className="font-medium text-lg">Personal Details</p>
                  <p>Please fill out all the fields.</p>
                </div>

                <div className="lg:col-span-2">
                  <div className="grid gap-4 gap-y-2 text-sm grid-cols-1 md:grid-cols-5">
                    <div className="md:col-span-5">
                      <label htmlFor="email">Email Address</label>
                      <input
                        type="text"
                        name="email"
                        id="email"
                        className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                        value={formdata.email}
                        onChange={HandleChange}
                        placeholder="email@domain.com"
                      />
                    </div>
                    <div className="md:col-span-5">
                      <label htmlFor="email">Password</label>
                      <input
                        type="password"
                        name="password"
                        id="password"
                        className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                        value={formdata.password}
                        onChange={HandleChange}
                      />
                    </div>

                    <div className="md:col-span-5 text-right">
                      <div className="inline-flex items-end">
                        <button
                          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                          onClick={() => {
                            console.log(formdata)
                          }}
                        >
                          Register
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}
function cancelsubmit(e) {
  e.preventDefault()
}
