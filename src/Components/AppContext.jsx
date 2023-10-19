import { createContext, useContext, useState } from "react";

const AppContext = createContext();

export const AppProvider = ({children}) => {

    const [loggedin, setLoggedin] = useState(false);

    return <AppContext.Provider value={{loggedin, setLoggedin}} >
        {children}
    </AppContext.Provider>
};

const useAppContext = () => { return useContext(AppContext) };

export default useAppContext;