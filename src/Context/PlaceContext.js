import { createContext ,useState} from "react";



export const Place = createContext()

export const PlaceContext = ({children}) => {
    const [selectedCity,setSelectedCity] = useState()
    return (
        <Place.Provider value={{selectedCity,setSelectedCity}}>
            {children}
        </Place.Provider>
    )
}

