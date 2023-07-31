import React, { createContext, useContext, useEffect, useState } from 'react';
import CLIENT_COLORS from '../helpers/clients';

interface ClientColors {
  primary: string;
  primaryLight: string;
  primaryMedium: string;
  primaryDark: string;
}

interface ClientColorsContextValue {
  clientColors: ClientColors;
  setClient: (client: string) => void;
}

const ClientColorsContext = createContext<ClientColorsContextValue | undefined>(undefined);

export const useClientColors = () => {
  const context = useContext(ClientColorsContext);
  if (!context) {
    throw new Error('useClientColors must be used within a ClientColorsProvider');
  }
  return context;
};

// Helper function to compare objects
const isEqual = (a: any, b: any) => JSON.stringify(a) === JSON.stringify(b);

export const ClientColorsProvider: React.FC<{ client: string }> = ({ client, children }) => {
  const getDefaultColors = () => ({
    primary: '#FF7F11',
    primaryLight: '#FFDB9F',
    primaryMedium: '#FFA84C',
    primaryDark: '#B74608',
  });

  const [clientColors, setClientColors] = useState<ClientColors>(() => {
    const storedColors = localStorage.getItem('primaryColor');
    return storedColors ? JSON.parse(storedColors) : getDefaultColors();
  });

  useEffect(() => {
    const clientColorsData = CLIENT_COLORS;
    if (clientColorsData && clientColorsData[client]) {
      const newColors = {
        primary: clientColorsData[client][0],
        primaryLight: clientColorsData[client][1],
        primaryMedium: clientColorsData[client][2],
        primaryDark: clientColorsData[client][3],
      };

      if (!isEqual(newColors, clientColors)) {
        setClientColors(newColors);
        localStorage.setItem('primaryColor', JSON.stringify(newColors));
      }
    }
  }, [client, clientColors]);

  const handleSetClient = (newClient: string) => {
    console.info('handleSetClient:', newClient);
    if (newClient !== client) {
      setClientColors(getDefaultColors());
      localStorage.removeItem('primaryColor');
    }
  };

  return (
    <ClientColorsContext.Provider value={{ clientColors, setClient: handleSetClient }}>
      {children}
    </ClientColorsContext.Provider>
  );
};
