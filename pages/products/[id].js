import Product from "models/products"

export async function getStaticPaths() {
    const products = await Product.fetchProducts()

    const paths = products.map((product) => ({
        params: {id: product.id.toString()}

    }))
    console.log(paths)

    return {paths, fallback: false}
}

export async function getStaticProps({params}) {
    return {
        props: {
            product: await Product.fetchProduct(params.id)
        }
    }
}

export default function ProductPage({ product }) {
    return <div>
        <h1>{product.id}. {product.name}</h1>
    </div>
}