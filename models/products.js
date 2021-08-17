
const products = [
    {id: 1, name: 'product 1'},
    {id: 2, name: 'product 2'}
]

export default class Product {
    static async fetchProducts() {
        console.log("fetchProducts called")
        return products 
    }

    static async fetchProduct(id) {
        console.log("fetchProduct(id) called: ", id)
        return products[id-1] 
    }
}