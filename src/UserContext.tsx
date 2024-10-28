import axios from "axios";
import { createContext, useState, ReactNode, useEffect } from "react";

interface UserContextType {
  user: any; // replace 'any' with the type of your user
  setUser: (user: any) => void; // replace 'any' with the type of your user
  refreshUser: () => void; // Function to refresh user data
}

const UserContext = createContext<UserContextType>(null as any);

interface UserProviderProps {
  children: ReactNode;
}

export default function UserContextProvider({ children }: UserProviderProps) {
  const [user, setUser] = useState<null | { [key: string]: any }>(null); // replace with your user type

  const refreshUser = () => {
    axios
      .get("/profile") // replace with your API endpoint
      .then((res) => {
        setUser(res.data);
        console.log("User data refreshed:", res.data);
      })
      .catch((err) => {
        console.error("Failed to refresh user data:", err);
      });
  };

  useEffect(() => {
    refreshUser();
  }, []);

  return (
    <UserContext.Provider value={{ user, setUser, refreshUser }}>
      {children}
    </UserContext.Provider>
  );
}

export { UserContext };
