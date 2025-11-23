"use client";
import React from "react";
import ProtectedRoute from "../Component/ProtectedRoute";

const page = () => {
  return (
    <ProtectedRoute>
      <div>this is about page</div>
    </ProtectedRoute>
  );
};

export default page;
