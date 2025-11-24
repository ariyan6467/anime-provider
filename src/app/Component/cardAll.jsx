"user client";

import Link from "next/link";
import { parse } from "path";
import React, { useContext } from "react";
import styled from "styled-components";
import { AuthContext } from "../Auth/Authprovider";

const Card = ({ anime }) => {
    console.log(anime);
    const {details,setdetails} = useContext(AuthContext);

     const limitedText = anime?.short_description
    ? anime.short_description.split(' ').slice(0, 5).join(' ') + '...'
    : 'Description not available';
   
   function handledetails(){
    setdetails(anime);
   }

  return (
    <StyledWrapper>
      <div className="card">
        <img
          src={anime.image}
          alt=""
          srcset=""
          className="h-full "
        />
        <p className="text-3xl font-serif  text-gradient">
         {anime.title}
        </p>
        <p> {limitedText}</p>
      
      {/* Details Button */}
 <Link
 onClick={handledetails}
 href={`/About/${anime._id}`}>
 
       <button className="relative py-1.5 px-15 rounded-lg overflow-hidden transition-all duration-500 group">
      <div className="absolute inset-0 rounded-lg p-[2px] bg-gradient-to-b from-[#654358] via-[#17092A] to-[#2F0D64]">
        <div className="absolute inset-0 bg-[#170928] rounded-lg opacity-90" />
      </div>
      <div className="absolute inset-[2px] bg-[#170928] rounded-lg opacity-95" />
      <div className="absolute inset-[2px] bg-gradient-to-r from-[#170928] via-[#1d0d33] to-[#170928] rounded-lg opacity-90" />
      <div className="absolute inset-[2px] bg-gradient-to-b from-[#654358]/40 via-[#1d0d33] to-[#2F0D64]/30 rounded-lg opacity-80" />
      <div className="absolute inset-[2px] bg-gradient-to-br from-[#C787F6]/10 via-[#1d0d33] to-[#2A1736]/50 rounded-lg" />
      <div className="absolute inset-[2px] shadow-[inset_0_0_15px_rgba(199,135,246,0.15)] rounded-lg" />
      <div className="relative flex items-center justify-center gap-2">
        <span className="text-lg font-normal bg-gradient-to-b from-[#D69DDE] to-[#B873F8] bg-clip-text text-transparent drop-shadow-[0_0_12px_rgba(199,135,246,0.4)] tracking-tighter">
            Details
        </span>
      </div>
      <div className="absolute inset-[2px] opacity-0 transition-opacity duration-300 bg-gradient-to-r from-[#2A1736]/20 via-[#C787F6]/10 to-[#2A1736]/20 group-hover:opacity-100 rounded-lg" />
    </button>
 </Link>

    <div className="absolute right-4 top-4 flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-xs font-semibold text-purple-600 backdrop-blur ring-1 ring-amber-300/30">
          <span className="h-2 w-2 rounded-full bg-purple-300" />
      {anime.price}
        </div>



      </div>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  .card {
    position: relative;
    width: 190px;
    height: 274px;
    background-color: #000;
    display: flex;
    flex-direction: column;
    justify-content: end;
    padding: 12px;
    gap: 12px;
    border-radius: 8px;
    cursor: pointer;
    background: cover;
    margin: 20px;
  }

  .card::before {
    content: "";
    position: absolute;
    inset: 0;
    left: -5px;
    margin: auto;
    width: 200px;
    height: 284px;
    border-radius: 10px;
    background: linear-gradient(-45deg, #e81cff 0%, #40c9ff 100%);
    z-index: -10;
    pointer-events: none;
    transition: all 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  }

  .card::after {
    content: "";
    z-index: -1;
    position: absolute;
    inset: 0;
    background: linear-gradient(-45deg, #fc00ff 0%, #00dbde 100%);
    transform: translate3d(0, 0, 0) scale(0.95);
    filter: blur(20px);
  }

  .heading {
    font-size: 20px;
    text-transform: capitalize;
    font-weight: 700;
  }

  .card p:not(.heading) {
    font-size: 14px;
  }

  .card p:last-child {
    color: #e81cff;
    font-weight: 600;
      fontSize: '1.2rem';
     whiteSpace: 'nowrap';
    overflow: 'hidden';
    textOverflow: 'ellipsis';
    maxWidth: '50px';
  }

  .card:hover::after {
    filter: blur(30px);
  }

  .card:hover::before {
    transform: rotate(-90deg) scaleX(1.34) scaleY(0.77);
  }
`;

export default Card;
