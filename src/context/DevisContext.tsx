'use client';

import { createContext, useContext, useState, ReactNode } from "react";

export interface DevisData {
  typeClient: string;
  typeProjet: string;
  urgence: string;
  description: string;
  budget: string;
  localisation: string;
  ville?: string;
  codePostal?: string;
  prenom: string;
  nom: string;
  email: string;
  telephone: string;
  accepted?: boolean; 
}

interface DevisContextType {
  data: DevisData;
  updateData: (newData: Partial<DevisData>) => void;
}

const defaultData: DevisData = {
  typeClient: "",
  typeProjet: "",
  urgence: "",
  description: "",
  budget: "",
  localisation: "",
  ville: "",
  codePostal: "",
  prenom: "",
  nom: "",
  email: "",
  telephone: "",
  accepted: false,
};

const DevisContext = createContext<DevisContextType | undefined>(undefined);

interface DevisProviderProps {
  children: ReactNode;
}

export function DevisProvider({ children }: DevisProviderProps) {
  const [data, setData] = useState<DevisData>(defaultData);

  const updateData = (newData: Partial<DevisData>) => {
    setData((prev) => ({ ...prev, ...newData }));
  };

  return (
    <DevisContext.Provider value={{ data, updateData }}>
      {children}
    </DevisContext.Provider>
  );
}

export function useDevis() {
  const context = useContext(DevisContext);
  if (!context) {
    throw new Error("useDevis must be used within a DevisProvider");
  }
  return context;
}
