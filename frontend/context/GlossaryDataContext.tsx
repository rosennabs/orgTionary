"use client"

import React, { ReactNode, createContext, useState, useEffect } from "react";
import axios from "axios";

// Define the interface for a glossary item
export interface GlossaryItem {
  id: string;
  word: string;
  definition: string;
  does_not_mean: string;
  example: string;
  related_words: string[];
}

// Define the interface for the context
export interface GlossaryDataContextType {
  glossaryData: GlossaryItem[];
  loading: boolean;
  error: string | null;
}

// Create a Context for the glossary data
export const GlossaryDataContext = createContext<GlossaryDataContextType>({
  glossaryData: [],
  loading: true,
  error: null,
});


// Provide the context in a component
export const GlossaryDataProvider = ({children}: { children: ReactNode }) => {
  const [glossaryData, setGlossaryData] = useState<GlossaryItem[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

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