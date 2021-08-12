
const products = [
    {id: 1, name: 'product 1'},
    {id: 2, name: 'product 2'}
]

export default class Product {
    static async fetchProducts() {
        return products 
    }

    static async fetchProduct(id) {
        return products[id-1] 
    }
}