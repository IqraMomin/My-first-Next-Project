
async function ProductDetails({params}) {
  const {id} = await params;
    return (
        <div style={{ border: "2px solid black", padding: "16px" }}>
      <h2>
        Product {id} details page — content coming soon!
      </h2>
    </div>
    )
}

export default ProductDetails
