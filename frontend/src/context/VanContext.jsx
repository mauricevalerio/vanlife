import { createContext, useReducer } from "react";

export const VanContext = createContext()

export function vanReducer(state, action) {
    switch (action.type) {
        case 'SET_VANS':
            return {
                vans: action.payload
            }
        // case 'DELETE_VANS':
        //     return {
        //         vans: state.vans.filter((van) => van.)
        //     }
    }

}

export function VanContextProvider({children}) {
    const [state, dispatch] = useReducer(vanReducer, {
        vans: null
    })

    console.log(state)
    return (
        <VanContext.Provider value={{state, dispatch}}>
            {children}
        </VanContext.Provider>
    )
}