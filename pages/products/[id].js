import Product from "models/products"
import CurrentTime from "models/current-time"
import { useRouter } from "next/dist/client/router"

export async function getStaticPaths() {
    //const products = await Product.fetchProducts()

    //const paths = products.map((product) => ({
    //    params: {id: product.id.toString()}

    //}))
    //console.log(paths)
    const paths = []

    return {paths, fallback: true}
}

export async function getStaticProps({params}) {
    return {
        props: {
            product: await Product.fetchProduct(params.id),
            currentTime: await CurrentTime.fetchCurrentTime()
        },
        revalidate: 10
    }
}

export default function ProductPage({ product, currentTime }) {
    const router = useRouter()

    if (router.isFallback) {
        return <div>Loading...</div>
    }
    return <div>
        <h1>{product.id}. {product.name}</h1>
        <h5>current time: {currentTime.datetime}</h5>
        <div><a href="/products">to products</a></div>
    </div>
}