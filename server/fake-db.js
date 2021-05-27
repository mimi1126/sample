const Product = require('./model/product')

class FakeDb {
  constructor() {
    this.products = [
      {
        id: 0,
        name: 'Phone XL',
        price: 799,
        description: 'A large phone with one of the best screens',
        heading1: 'head 1',
        heading2: 'head 2',
        heading3: 'head 3'
      },
      {
        id: 1,
        name: 'Phone Mini',
        price: 699,
        description: 'A great phone with one of the best cameras',
        heading1: 'head 1',
        heading2: 'head 2',
        heading3: 'head 3'
      },
      {
        id: 2,
        name: 'Phone Standard',
        price: 299,
        description: '',
        heading1: 'head 1',
        heading2: 'head 2',
        heading3: 'head 3'
      }
    ]
  }

  async initDb() {
    await this.cleanDb()
    this.pushProductsToDb()
  }

  async cleanDb() {
    await Product.deleteMany({})
  }

  pushProductsToDb() {
    this.products.forEach(
      (product) => {
        const newProduct = new Product(product)
        newProduct.save()
      }
    )
  }

  seeDb() {
    this.pushProductsToDb()
  }
}

module.exports = FakeDb
