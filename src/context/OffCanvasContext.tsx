import { createContext, ReactNode, useState, useContext } from "react";

type OffCanvasProps = {
  children: ReactNode;
};

type OffCanvasContextType = {
  isOnoffcanvas: boolean;
  toggleCanvas: () => void;
};

const OffCanvasContext = createContext<OffCanvasContextType | undefined>(
  undefined
);

const OffcanvasContextProvider = ({ children }: OffCanvasProps) => {
  const [isOnoffcanvas, setIsOnoffcanvas] = useState(false);

  const toggleCanvas = () => {
    setIsOnoffcanvas((prev) => !prev);
  };

  return (
    <OffCanvasContext.Provider value={{ isOnoffcanvas, toggleCanvas }}>
      {children}
    </OffCanvasContext.Provider>
  );
};

const useOffCanvas = (): OffCanvasContextType => {
  const context = useContext(OffCanvasContext);
  if (context === undefined) {
    throw new Error(
      "useOffCanvas must be used within an OffcanvasContextProvider"
    );
  }
  return context;
};

export const useOffCanvasContext = () => {
  return useContext(OffCanvasContext);
};

export { OffcanvasContextProvider, useOffCanvas };
