import { useRouter } from "next/router";

export default function Branch() {
  const router = useRouter();
  console.log(router.query);
  return (
    <div>
      <h1>Year {router.query.year}</h1>
      <h1>Branch {router.query.branch}</h1>
    </div>
  );
}

// export default function Branch({ data }) {
//   console.log(data);
//   return (
//     <div>
//       <h1>Year {data.year}</h1>
//       <h1>Branch {data.branch}</h1>
//     </div>
//   );
// }

// export async function getServerSideProps(context) {
//   const { params } = context;
//   console.log(params);

//   return {
//     props: {
//       data: params,
//     },
//   };
// }
