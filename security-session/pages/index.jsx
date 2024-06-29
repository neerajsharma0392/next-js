import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const [user, setUser] = useState(null);
  const router = useRouter();

  const getUserData = async () => {
    var fetchResponse = await fetch("/api/getuser");
    var jsonData = await fetchResponse.json();
    if (jsonData.loggedin) {
      setUser(jsonData);
    } else {
      router.push("/login");
    }
  };

  useEffect(() => {
    getUserData();
  }, []);

  const logout = async () => {
    const response = await fetch("/api/logout");
    router.push("/login");
  };

  if (!user) {
    return <h1>Loading.....</h1>;
  }

  return (
    <div className="container">
      <h1>Session Demo</h1>
      <ul className="list-group mt-5">
        <li className="list-group-item">Name: {user?.name}</li>
        <li className="list-group-item">Age:{user?.age}</li>
        <li className="list-group-item">City:{user?.city}</li>
      </ul>

      <button onClick={logout} className="btn btn-danger mt-2">
        Logout
      </button>
    </div>
  );
}
