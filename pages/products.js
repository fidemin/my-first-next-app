export async function getStaticProps() {
    return {
        props: {
            products: [
                {id: 1, name: 'product 1'},
                {id: 2, name: 'product 2'}
            ]

        }
    }
}


export default function Products({ products }) {
    return (
      <>
        <h1>Products</h1> 
        <ul>
          {products.map((product) => (
            <li key={product.id}>{product.name}</li>
          ))}
        </ul>
      </>
    )
  }