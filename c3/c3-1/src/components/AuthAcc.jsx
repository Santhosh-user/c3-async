import { useState } from "react"
import { createContext } from "react"

export const AuthAcc = createContext()

export const AuthAccProvider = ({children})=>{
    const [authStat, setAuthStat] = useState(false)

    const flipAuthStat=()=>{
        setAuthStat(!authStat)
    }
    return <AuthAcc.Provider value={{authStat, flipAuthStat}}>{children}</AuthAcc.Provider>
}