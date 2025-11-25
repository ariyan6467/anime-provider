"use client";
import React, { useEffect, useState } from "react";
import ProtectedRoute from "../Component/ProtectedRoute";
import Card from "../Component/cardAll";
import Dropdown from "../Component/Dropdown";
import SearchBar from "../Component/SearchBar";

const AboutPage = () => {
  const [animeData, setAnimeData] = useState([]);

    useEffect(() => {
      fetch("https://next-anime-server.vercel.app/all")
        .then((response) => response.json())
        .then((data) => {
          setAnimeData(data);
         
        })
        .catch((error) => {
          console.error("Error fetching anime data:", error);
         
        });
    }, []);
   
    console.log(animeData);

  return (
    <ProtectedRoute>
         <div className="max-w-[1200px] mx-auto">
            <div style={{ textAlign: 'center', padding: '20px' }}>
  <h1 className="bg-gradient-to-r from-fuchsia-500 to-cyan-300 bg-clip-text text-transparent text-4xl font-black leading-tight sm:text-5xl md:text-6xl" >All Anime</h1>
  <p style={{ fontSize: '1.2rem', color: '#bbb' }}>This is the about page, accessible only to authenticated users.</p>
</div>
      <div className="flex justify-between">
        <Dropdown></Dropdown>
        <SearchBar></SearchBar>
      </div>
      <div className=" p-2.5 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4  ">
         {
        animeData.map((anime) => (
          <Card key={anime?._id || anime?.id || anime?.title} anime={anime} />
        ))
      }
      </div>
         </div>
    </ProtectedRoute>
  );
};

export default AboutPage;
