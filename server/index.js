const mongoose = require('mongoose')
const express = require('express')
const app = express()
const config = require('./config/')
const FakeDb = require('./fake-db')
const productRoutes = require('./routes/products')
const path = require('path')
const PORT = process.env.PORT || '3001'


mongoose.connect(config.DB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
  useCreateIndex: true
}).then(
  () => {
    if (process.env.NODE_ENV !== 'production') {
      // const fakeDb = new FakeDb()
      // fakeDb.initDb()
    }
  }
)

app.use('/api/v1/products', productRoutes)

if (process.env.NODE_ENV == 'production') {
  const appPath = path.join(__dirname, '..', 'dist/sample')
  app.use(express.static(appPath))
  app.get('*', function(req, res) {
    res.sendFile(path.resolve(appPath, 'index.html'))
  })
}

app.listen(PORT, function() {
  console.log('I am running')
})

