import { Navigate } from "react-router-dom";
import Cookies from 'universal-cookie';
import Profile from "../profile/Profile.js";
const cookies = new Cookies();

function Protected ({children}) {
  
    const token = cookies.get("TOKEN")

    if(token){
  //      return <Profile />;
  
      return children
    }else{
      return <Navigate to='/signin' replace />
    }
  
  
}

export default Protected;