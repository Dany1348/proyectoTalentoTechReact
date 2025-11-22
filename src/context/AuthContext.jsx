import {useState , useContext ,createContext} from 'react';


// creamos el contexto de Autenticacion 
const AuthContext = createContext();

export const AuthProvider = ({ children }) => {

  const [usuario, setUsuario] = useState(null);
  const [rol, setRol] = useState(null);
  
  const login = (nombreUsuario , rolUsuario) => {
    // Simulamos la creacion del token 
    const token = `fake-token-${nombreUsuario}`;
    localStorage.setItem('authToken', token);
    setUsuario(nombreUsuario);
    setRol(rolUsuario);
  }                              

  const logout = () => {
    localStorage.removeItem('authToken');
    setUsuario(null);
    setRol(null);
  };

  return (
    <AuthContext.Provider value={{usuario,rol, login, logout}}>
      {children}
    </AuthContext.Provider>
  ); 
}

export const useAuthContext = () => useContext(AuthContext);

export default AuthProvider;