import React, {createContext} from "react";


export const AuthContext = createContext();

export default function AuthProvider({ children }) {

    const [users, setUsers] = React.useState([{ name: 'abel', email: 'abel@espe.edu', password: 'secret123', balance: 100, isLogedU: false }])
    const[isLoged, setIsLoged] = React.useState(false)
/*     const [user, setUser] = React.useState(
        JSON.parse(localStorage.getItem('user')) || null
    ); */

/*     useEffect(() => {
        try {
            localStorage.setItem('user', JSON.stringify(user))
        } catch (error) {
            console.log('error in local storage')
        }
    }, [user]) */
    
    function login(user){
        const index = users.indexOf(user)
        const usersAux = [...users]
        usersAux[index].isLogedU = true
        setUsers(usersAux)
        setIsLoged(true)
       
      }

      function logout(user){
        const index = users.indexOf(user)
        const usersAux = [...users]
        usersAux[index].isLogedU = false
        setUsers(usersAux)
        setIsLoged(false)
       
      }
    
    function isLogedIn() {
        return isLoged
    }
    
    const contextValue = {
     /*    user, */
        users,
        login,
        logout,
        isLogedIn
      
    }
    return (
        <AuthContext.Provider value={contextValue}>
            {children}
        </AuthContext.Provider>
    )
}
