import Image from "next/image";
export default async function ProductDetails({ params }) {
  const { id } = await params;

  const res = await fetch(`https://dummyjson.com/products/${id}`, {
    next: { revalidate: 60 }, // caching enabled
  });

  const product = await res.json();
  console.log(product);

  return (
    <div style={{ border: "2px solid black", padding: "16px" }}>
      <h2>{product.title}</h2>
      <p><strong>Price:</strong> ${product.price}</p>
      <p><strong>Description:</strong> {product.description}</p>
      <p><strong>Category:</strong> {product.category}</p>
      <Image width={500} height={500} src="/images/mascara.webp" alt="Mascara Image"/>
    </div>
  );
}
