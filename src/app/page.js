"use client";
import { AuthContext } from "./Auth/Authprovider";
import Image from "next/image";
import { useContext, useEffect, useState } from "react";
import BannerSlider from "./Banner/BannerSlider";
import Cards from "./HomeCard/Cards";

export default function Home() {
  const { user, setUser, handlegooglesignin } = useContext(AuthContext);
  const [animeData, setAnimeData] = useState([]);
  const [loading, setLoading] = useState(true);
  console.log(user, handlegooglesignin);
  function handlesignin() {
    handlegooglesignin()
      .then((result) => {
        const loggeduser = result.user;
        setUser(loggeduser);
        console.log(loggeduser);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  useEffect(() => {
    fetch("http://localhost:5000/allanime")
      .then((response) => response.json())
      .then((data) => {
        setAnimeData(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching anime data:", error);
        setLoading(false); // Set loading to false even if there's an error
      });
  }, []);



  
  console.log(animeData);
  return <>
  <h1 onClick={handlesignin}>Welcome to Next Anime Provider</h1>
  <BannerSlider />
  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-6 justify-items-center bg-gray-800 max-w-[1200px] mx-auto">
     {
    animeData.map((anime, index) => ( <Cards key={anime?._id || anime?.id || index} anime={anime} />))
  }
  </div>
 
  </>;
  
}
