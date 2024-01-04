"use client";

import { useClerk } from "@clerk/nextjs";
import { User } from "@prisma/client/edge";
import { createContext, useContext } from "react";
import useSWR from "swr";
import { Image } from "./image";

export type UserContextType = {
  user: User & { Images: Image[] } | null
}

export const UserContext = createContext<UserContextType>({
  user: null
});

type UserProviderProps = {
  children: React.ReactNode;
}

const fetcher = (url: string, userId?: string) => fetch(url, { method: 'POST', body: JSON.stringify({ userId }) }).then(res => res.json())

export const UserProvider = ({ children }: UserProviderProps) => {
  const { user } = useClerk();
  const { data: genieUser } = useSWR<User & { Images: Image[] }>(user ? '/user/api' : null, (url: string) => fetcher(url, user?.id))

  return (
    <UserContext.Provider value={{ user: genieUser as User & { Images: Image[] } }}>
      {children}
    </UserContext.Provider>
  );
}

export const useUser = () => useContext(UserContext);