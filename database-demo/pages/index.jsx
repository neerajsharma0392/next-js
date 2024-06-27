import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";

const inter = Inter({ subsets: ["latin"] });


export default function Home({data}){
  return(
    <div className="container">
      <h1>Database Demo</h1>
      <ul className="list-group-item">
    {data.map((user,index)=><li key={index} className="list-group-item">
      <div className="container">
        <h4>Name : {user.name}</h4>
        <h4>Age : {user.age}</h4>
        <h4>City : {user.city}</h4>
        <h4>Email : {user.email}</h4>
      </div>
    </li>)}

      </ul>

    </div>
  )
}

export async function getServerSideProps(){
  const fetchResponse= await fetch("http://localhost:3000/api/users");
  const jsonResponse=await fetchResponse.json();

  return {
    props:{
      data:jsonResponse
    }

  }
}

// export default function Home() {
//   const makePostCall=async()=>{
//     var fetchResponse= await fetch("http://localhost:3000/api/users",{
//       method:"POST",
//       body: JSON.stringify({name:"Ahmad"})
//     })
//     var jsonResponse=await fetchResponse.json();
//     console.log(jsonResponse);
//   }
//   makePostCall();
//   return (
//     <>
//     <h1>Database Demo</h1>

//     </>
//   );
// }
