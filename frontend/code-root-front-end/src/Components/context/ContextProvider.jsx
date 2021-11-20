import {createContext,useState} from "react"

export const Context = createContext()

function ContextProvider({children}){
    const [productData,setProductData] = useState([])

    function changingData(data){
        setProductData(data)
    }

    return(
        <Context.Provider value={{productData,setProductData,changingData}}>
            {children}
        </Context.Provider>
    )
}

export default ContextProvider;