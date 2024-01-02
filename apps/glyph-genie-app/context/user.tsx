"use client";

import { useClerk } from "@clerk/nextjs";
import { User } from "@prisma/client/edge";
import { createContext, useContext } from "react";
import useSWR from "swr";

export type UserContextType = {
  user: User | null
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
  const { data: genieUser } = useSWR<User>(user ? '/user/api' : null, (url: string) => fetcher(url, user?.id))

  return (
    <UserContext.Provider value={{ user: genieUser as User }}>
      {children}
    </UserContext.Provider>
  );
}

export const useUser = () => useContext(UserContext);