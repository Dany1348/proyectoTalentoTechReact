import { Navigate } from "react-router-dom";
import { useAuthContext } from "../context/AuthContext";


const RutaProtegidaL = ({children}) => {
  const { usuario ,rol } = useAuthContext();

  console.log("Usuario Context" ,usuario);
  console.log("Rol Context" ,rol);
  if(rol == "cliente" )
    return <Navigate to="/" replace />;
  else if ( rol=="admin")
    return <Navigate to="/admin" replace />;
  
  return children;
}

export default RutaProtegidaL;