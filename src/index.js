const express = require('express')

const app = express()
const port = 3001

app.use(express.json())

const products = [
  { id: 1, name: 'Wireless Mouse', price: 29.99, stock: 120 },
  { id: 2, name: 'Mechanical Keyboard', price: 89.99, stock: 60 },
  { id: 3, name: 'USB-C Hub', price: 39.99, stock: 75 }
]

app.get('/', (req, res) => {
  res.json({
    service: 'product-service',
    status: 'running'
  })
})

app.get('/health', (req, res) => {
  res.json({
    status: 'ok'
  })
})

app.get('/products', (req, res) => {
  res.json(products)
})

app.get('/products/:id', (req, res) => {
  const productId = Number(req.params.id)
  const product = products.find((item) => item.id === productId)

  if (!product) {
    return res.status(404).json({ message: 'Product not found' })
  }

  res.json(product)
})

app.listen(port, () => {
  console.log(`product-service running on port ${port}`)
})