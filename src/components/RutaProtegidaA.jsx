import { Navigate } from "react-router-dom";
import { useAuthContext } from "../context/AuthContext";


const RutaProtegidaA = ({children}) => {
  const { usuario ,rol } = useAuthContext();

  console.log("Usuario Context" ,usuario);
  console.log("Rol Context" ,rol);
  if(usuario != "admin")
    return <Navigate to="/login" replace />;
  
  return children;
}

export default RutaProtegidaA;