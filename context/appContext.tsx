"use client"

import React, {createContext, useContext, useState} from "react";

type AppContextProviderProps = {
    children: JSX.Element | React.ReactNode
}

type User = {
    id: number
    username: string
    email: string
}

type Context = {
    user: User | null
    isAuthorized: boolean
    isLoading: boolean,
}

type AppContext = {
    context: Context,
    setContext: React.Dispatch<React.SetStateAction<Context>>
}

const initialContextValues = {
    user: null,
    isAuthorized: false,
    isLoading: false
}

export const AppContext = createContext<AppContext | null>(null);

export default function AppContextProvider ({children}: AppContextProviderProps) {
    const [context, setContext] = useState<Context>(initialContextValues)

    return(
        <AppContext.Provider value={{
            context,
            setContext
        }}>
            {children}
        </AppContext.Provider>
    )
}

export function useAppContext () {
    const context = useContext(AppContext)

    if (!context) {
        throw new Error("useAppContext must be used inside AppContextProvider")
    }

    return context
}