import { redirect } from "next/dist/server/api-utils";

export default function ProductDetails({ product }) {
  if (!product) {
    return <h1>Loading....</h1>;
  }
  return (
    <div className="container mt-5">
      <ul className="list-group">
        <li className="list-group-item">Title: {product.title}</li>
        <li className="list-group-item">Description: {product.description}</li>
        <li className="list-group-item">Price: {product.price}</li>
        <li className="list-group-item">Rating: {product.rating}</li>
        {product.images.map((img) => (
          <li className="list-group-item">
            <img src={img} alt="" width={100} height={100} />
          </li>
        ))}
      </ul>
    </div>
  );
}

export async function getStaticPaths() {
  return {
    paths: [{ params: { id: "1" } }, { params: { id: "2" } }],
    fallback: true,
  };
}

export async function getStaticProps(context) {
  const { params } = context;
  try {
    const fetchResponse = await fetch(
      `https://dummyjson.com/products/${params.id}`
    );
    const data = await fetchResponse.json();

    if (fetchResponse.status == "404") {
      return {
        redirect: {
          destination: "/error",
        },
      };
    }

    return {
      props: {
        product: data,
      },
    };
  } catch (ex) {
    console.log("Testing");
  }
}
