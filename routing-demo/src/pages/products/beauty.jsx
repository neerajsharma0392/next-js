export default function Beauty({ products }) {
  return (
    <div>
      <h1>Smartphones</h1>
      <ul className="list-group">
        {products?.map((item) => (
          <li key={item.id} className="list-group-item">
            {item.title}
          </li>
        ))}
      </ul>
    </div>
  );
}

export async function getServerSideProps() {
  const fetchResponse = await fetch("https://dummyjson.com/products");
  const data = await fetchResponse.json();

  return {
    props: {
      products: data.products.filter((p) => p.category == "beauty"),
    },
  };
}
