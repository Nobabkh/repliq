import axios from 'axios'
const NO_RESPONSE = (props) => {
  const options = {
    url: props.url,
    method: 'POST',
    header: {
      'Access-Control-Allow-Origin': ' *',
      Accept: 'application/json',
      'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8 ',
      // 'Content-Type': 'multipart/form-data; boundary=<calculated when request is sent>'
    },
    data: props.data,
  }
  console.log(options.body)
  axios(options).then((response) => {})
}

const WITH_RESPONSE_CALLBACK = (props) => {
  let maindata = new FormData()
  props.body.map((item) => {
    maindata.append(item.name, item.value)
  })
  const options = {
    url: props.url,
    method: 'POST',
    header: {
      'Access-Control-Allow-Origin': ' *',
      Accept: 'application/json',
      'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
      // 'Content-Type': 'multipart/form-data; boundary=<calculated when request is sent>'
    },
    data: maindata,
  }
  console.log(options)
  axios(options).then((response) => {
    props.Responsecallback({ res: response, data: props.body })
  })
}

export { NO_RESPONSE, WITH_RESPONSE_CALLBACK }
