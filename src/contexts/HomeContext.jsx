import { createContext, useContext, useState } from "react";

const HomeContext = createContext();
function HomeProvider({ children }) {
  const [isNavOpen, setIsNavOpen] = useState(false);
  function handleClick() {
    setIsNavOpen((curr) => !curr);
  }
  return (
    <HomeContext.Provider value={{ handleClick, isNavOpen }}>
      {children}
    </HomeContext.Provider>
  );
}

function useHome() {
  const context = useContext(HomeContext);
  if (context === undefined)
    throw new Error("HomeContext was accessed outside the HomeProvider");
  return context;
}
export { HomeProvider, useHome };
