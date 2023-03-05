const express = require('express')

const dataBase = express()
let port= 3000

dataBase.listen(port , () => {
  console.log('listening')
})
