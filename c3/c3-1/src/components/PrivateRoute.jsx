import {useContext} from "react"
import { Navigate } from "react-router-dom"
import { AuthAcc } from "./AuthAcc"


export const ProtectedRoute=({children})=>{
    const {AuthStat, flipAuthStat} = useContext(AuthAcc)

    if(AuthStat) {
        return children
    }
    else {
        return <Navigate to={"/login"}></Navigate>
    }
}