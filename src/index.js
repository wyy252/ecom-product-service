const app = require('./app')

const port = 3001

app.listen(port, () => {
  console.log(`product-service running on port ${port}`)
})