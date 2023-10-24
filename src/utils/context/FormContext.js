import { createContext, useContext } from "react";


export const FormContext = createContext()
export function useFormContext() {
    const context = useContext(FormContext)

    if(!context){
        throw new Error("Something is wrong")
    }

    return context
}
