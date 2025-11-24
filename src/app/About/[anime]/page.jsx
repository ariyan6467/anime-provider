"use client";

import Image from "next/image";
import { AuthContext } from "../../Auth/Authprovider";
import { useContext } from "react";
import styled from "styled-components";

export default function AnimeDetailsPage({ params }) {
  const { details } = useContext(AuthContext);
  const { anime } = params;

  return (
    <Container>
      {/* Large Image/Banner */}
      <ProductBanner>
        <img
          src={details.image}
          alt="Product Banner"
          className="banner-image"
        />
      </ProductBanner>

      {/* Product Title */}
      <ProductTitle>{details.title}</ProductTitle>

      {/* Full Description */}
      <ProductDescription>{details.short_description}</ProductDescription>

      {/* Meta Info */}
      <MetaInfo>
        <p>
          <strong>Price:</strong> {details.price}
        </p>
        <p>
          <strong>Date:</strong> {details.release_date}
        </p>
      </MetaInfo>

      {/* Back Button */}
      <BackButton onClick={() => window.history.back()}>Back</BackButton>
    </Container>
  );
}

const Container = styled.div`
  padding: 40px;
  max-width: 1000px;
  margin: 0 auto;
  background-color: transparent;
  border-radius: 15px;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.1);
  color: #e0e0e0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center; /* Align text in the center */
`;

const ProductBanner = styled.div`
  margin-bottom: 30px;
  width: 100%;
  max-width: 800px;
  img {
    width: 100%;
    height: auto;
    border-radius: 15px;
    border: 1px solid #333;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
  }
`;

const ProductTitle = styled.h1`
  font-size: 2.5rem;
  font-weight: bold;
  margin: 20px 0;
  color: #fff;
  letter-spacing: 1px;
`;

const ProductDescription = styled.div`
  font-size: 1.1rem;
  margin-top: 15px;
  line-height: 1.7;
  color: #c7c7c7;
  max-width: 900px;
  margin-bottom: 25px;
`;

const MetaInfo = styled.div`
  margin-top: 20px;
  font-size: 1rem;
  color: #c7c7c7;
  p {
    margin: 10px 0;
    font-weight: 500;
  }
`;

const BackButton = styled.button`
  background-color: #6200ea;
  color: white;
  padding: 12px 30px;
  border: none;
  border-radius: 8px;
  margin-top: 30px;
  cursor: pointer;
  font-size: 1rem;
  font-weight: bold;

  &:hover {
    background-color: #3700b3;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
  }
`;
