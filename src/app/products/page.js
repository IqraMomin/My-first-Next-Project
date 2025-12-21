import Link from "next/link";

export const metadata = {
    title:"Products Store - All Products"
}
async function ProductsPage() {
    const res = await fetch("https://dummyjson.com/products", { next: { revalidate: 60 } });
    const data = await res.json();
    const products = data.products;

    return (
        <ul>
            {products.map((product) => (
                <li key={product.id}>
                    <Link href={`/products/${product.id}`}>
                        {product.title}
                    </Link>
                </li>
            ))}
        </ul>
    )
}

export default ProductsPage
