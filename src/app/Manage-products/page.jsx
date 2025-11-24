"use client";
import React, { useEffect, useState } from 'react';
import Card from '../Component/ManageCards';

const Products = () => {
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
        <div className='max-w-[1250px] mx-auto '>
            <h1>Manage Products Page</h1>
            <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4  '>
                 {
                animeData.map((anime) => (
                    <Card anime={anime}></Card>
                )
                )}
            </div>
        </div>
    );
};

export default Products;