"use client"

import React, {createContext, useContext, useState} from "react";

type AppContextProviderProps = {
    children: JSX.Element | React.ReactNode
}

type User = {
    id: number
    name: string
    email: string
    flightNumber: number
}

type Context = {
    user: User | null
    isAuthorized: boolean
}

type AppContext = {
    context: Context,
    setContext: React.Dispatch<React.SetStateAction<Context>>
}

// const initialContext = {
//     user: null,
//     isAuthorized: false
// }

export const AppContext = createContext<AppContext | null>(null);

// JSX.Element | React.ReactNode

export default function AppContextProvider ({children}: AppContextProviderProps) {
    const [context, setContext] = useState<Context>()

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