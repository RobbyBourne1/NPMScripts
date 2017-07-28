const express = require('express')

const app = express()

app.get('/', (req, resp) => {
  resp.send('Hello World')
})

app.listen(3000, () => {
  console.log('Listening on port 3000')
})

// npm run start
