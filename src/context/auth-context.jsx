import { createContext, useState } from "react"


export const AuthContext = createContext({});


const AuthProvider = ({children})=>{

    const [ name , setName] = useState("")


    return  <AuthContext.Provider value={{name  , setName}}>
             {children}
            </AuthContext.Provider>
    
}

export default AuthProvider ; 