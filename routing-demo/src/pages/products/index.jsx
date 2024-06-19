import Link from "next/link";

export default function Products({ products }) {
  console.log(products);
  return (
    <div className="container">
      <h1>Products</h1>
      <ul className="list-group">
        {products.map((item) => (
          <li className="list-group-item" key={item.id}>
            <Link href={`/products/${item.id}`}>{item.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export async function getStaticProps() {
  const fetchResponse = await fetch("https://dummyjson.com/products");
  const jsonData = await fetchResponse.json();

  return {
    props: {
      products: jsonData.products,
    },
  };
}
