import Link from "next/link";

function ProductsPage() {
    const arr =[1,2,3,4,5,6,7,8,9,10];
    return (
        <ul>
           {arr.map(id =>(
            <li key={id}>
                <Link href={`/products/${id}`}>Product {id}</Link>
            </li>
            ))}
        </ul>
    )
}

export default ProductsPage
