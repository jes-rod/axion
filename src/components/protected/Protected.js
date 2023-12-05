import { Navigate } from "react-router-dom";
import Cookies from 'universal-cookie';
const cookies = new Cookies();

function Protected ({children}) {
  
    const token = cookies.get("TOKEN")

    if(token){

      return children
    }else{
      return <Navigate to='/signin' replace />
    }
  
  
}

export default Protected;