"use client"

import React, { createContext, useState, useEffect } from "react";
import axios from "axios";

// Create a Context for the glossary data
export const GlossaryDataContext = createContext();

export const GlossaryDataProvider = ({ children }) => {
  const [glossaryData, setGlossaryData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch glossary data
  useEffect(() => {
    const fetchGlossaryData = async () => {
      try {
        const response = await axios.get(
          "http://localhost:8080/api/glossarydata");
        setGlossaryData(response.data);
        setLoading(false);
      } catch (err) {
        setError("Error fetching glossary data");
        setLoading(false);
      }
    };

    fetchGlossaryData();
  }, []);

  return (
    <GlossaryDataContext.Provider value={{ glossaryData, loading, error }}>
      {children}
    </GlossaryDataContext.Provider>
  );
};