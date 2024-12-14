"use client"

import React, { createContext, useState, useEffect } from "react";
import axios from "axios";


// Create a Context for the glossary data
export const GlossaryDataContext = createContext();

export const GlossaryDataProvider = ({ children }) => {
  const [glossaryData, setGlossaryData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Determine the API URL based on the environment

  const apiUrl =
    process.env.NODE_ENV === "development"
      ? "http://localhost:8080/api/glossarydata" // Development URL
      : process.env.NEXT_PUBLIC_BACKEND_URL + "/api/glossarydata"; // Production URL


  // Fetch glossary data
  useEffect(() => {
    const fetchGlossaryData = async () => {
      try {
        console.log("Fetching data from:", apiUrl);
        // const supabase = await createClient();
        // const data = await supabase.from("healthcare_terms").select();
        // console.log("Supabase data: ", data);

        const response = await axios.get(apiUrl);
        setGlossaryData(response.data);
        setLoading(false);
      } catch (err) {
        setError("Error fetching glossary data");
        setLoading(false);
      }
    };

    fetchGlossaryData();
  }, [apiUrl]);

  return (
    <GlossaryDataContext.Provider value={{ glossaryData, loading, error }}>
      {children}
    </GlossaryDataContext.Provider>
  );
};