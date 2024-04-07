'use client'

import { createContext, useContext, useState } from 'react'

const IdContext = createContext(null)

export const IdContextProvider = ({ children }) => {
    const [id, setId] = useState(null)

    return (
        <IdContext.Provider value={{ id, setId }}>
            {children}
        </IdContext.Provider>
    )
}

export const useIdContext = () => useContext(IdContext)