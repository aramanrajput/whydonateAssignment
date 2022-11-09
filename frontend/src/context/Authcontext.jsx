
import { createContext } from "react";
import {useState} from "react"
export const AuthContext= createContext()



export const AuthContextProvider=({children})=>{

let [token,setToken]=useState(null)

let signin=(value)=>{
    setToken(value)
}
console.log("token",token)
return( <AuthContext.Provider value={{signin}}>
    {children}
        </AuthContext.Provider>)
   
}