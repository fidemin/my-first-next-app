import Product from 'models/products'

export async function getStaticProps() {
    return {
        props: {
            products: await Product.fetchProducts()
        }
    }
}


export default function ProductsPage({ products }) {
    return (
      <>
        <h1>Products</h1> 
        <ul>
          {products.map((product) => (
            <li key={product.id}><a href={"/products/" + product.id}>{product.name}</a></li>
          ))}
        </ul>
      </>
    )
  }