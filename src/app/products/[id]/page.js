import Image from "next/image";

async function getProduct(id) {
  const res = await fetch(`https://dummyjson.com/products/${id}`, {
    next: { revalidate: 60 },
  });

  if (!res.ok) {
    return null; 
  }

  return res.json();
}

// 🔥 Dynamic metadata
export async function generateMetadata({ params }) {
  const {id} = await params;
  const product = await getProduct(id);
  if (!product) {
    return {
      title: "Product Not Found | Product Store",
    };
  }


  return {
    title: `${product.title} | Product Store`,
    description: product.description,
  };
}

export default async function ProductDetails({ params }) {
  const {id} = await params;
  const product = await getProduct(id);

  return (
    <div style={{ border: "2px solid black", padding: "16px" }}>
      <h2>{product.title}</h2>
      <p><strong>Price:</strong> ${product.price}</p>
      <p><strong>Description:</strong> {product.description}</p>
      <p><strong>Category:</strong> {product.category}</p>

      <Image
        width={500}
        height={500}
        src="/images/mascara.webp"
        alt={product.title}
      />
    </div>
  );
}
