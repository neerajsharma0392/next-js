import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import { useEffect, useState } from "react";
import useSWR from "swr";
//// Nodejs Module for showing incremental regeneration
// import path from "path";
// import fsPromises from "fs/promises";

export default function ClientSideRendering() {
  const fetcher = (url) => fetch(url).then((res) => res.json());

  const { data } = useSWR("https://dummyjson.com/products", fetcher);
  // console.log(data);
  return (
    <div className="container">
      <h1>Client Side Rendering</h1>
      <ul className="list-group">
        {data?.products.map((item) => (
          <li className="list-group-item" key={item.id}>
            {item.title}
          </li>
        ))}
      </ul>
    </div>
  );
}

// export default function IncrementalGeneration({ data }) {
//   return (
//     <div className="container">
//       <ul className="list-group">
//         {data.map((item, index) => (
//           <li className="list-group-item" key={index}>
//             {item.name}
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }

// export default function Home({ products }) {
//   return (
//     <div className="container">
//       <ul className="list-group">
//         {products.map((item) => (
//           <li className="list-group-item" key={item.id}>
//             {item.title}
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }

// export async function getServerSideProps(context) {
//   //console.log(context);
//   const { res } = context;
//   console.log("getServerSideProps called...");
//   res.setHeader("Cache-Control", "max-age=20,public,stale-while-revalidate=59");
//   const fetchResponse = await fetch("https://dummyjson.com/products");
//   const jsonData = await fetchResponse.json();

//   return {
//     props: {
//       products: jsonData.products,
//     },
//   };
// }

// export async function getStaticProps(context) {
//   console.log("getStaticProps called.....");
//   const fetchResponse = await fetch("https://dummyjson.com/products");
//   const jsonData = await fetchResponse.json();
//   return {
//     props: {
//       products: jsonData.products,
//     },
//   };
// }

//// Incremental Static Regeneration

// export async function getStaticProps(context) {
//   const filePath = path.join(process.cwd(), "jsonData/data.json");
//   const jsonData = await fsPromises.readFile(filePath);
//   const data = JSON.parse(jsonData);

//   return {
//     props: {
//       data,
//     },
//     revalidate: 30,
//   };
// }
