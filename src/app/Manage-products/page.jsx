"use client";
import React, { useEffect, useState } from 'react';
import Card from '../Component/ManageCards';
import ProtectedRoute from '../Component/ProtectedRoute';

const Products = () => {
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
            <div className='max-w-[1250px] mx-auto '>
            <h1>Manage Products Page</h1>
            <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4  '>
                 {
                animeData.map((anime) => (
                    <Card key={anime._id} anime={anime}></Card>
                )
                )}
            </div>
        </div>
        </ProtectedRoute>
    );
};

export default Products;