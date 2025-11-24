"use client";
import React, { useEffect, useState } from "react";
import ProtectedRoute from "../Component/ProtectedRoute";
import Card from "../Component/cardAll";

const AboutPage = () => {
  const [animeData, setAnimeData] = useState([]);

    useEffect(() => {
      fetch("http://localhost:5000/all")
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
  <h1 style={{ fontSize: '2rem', color: '#fff' }}>About Page</h1>
  <p style={{ fontSize: '1.2rem', color: '#bbb' }}>This is the about page, accessible only to authenticated users.</p>
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
