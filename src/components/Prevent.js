import { redirect } from 'next/navigation';
import { getCookies } from 'next-client-cookies/server';


function Prevent ({children}) {
    const cookies = getCookies();
    const token = cookies.get("TOKEN")
    console.log(token);

    if(!token){
      return children
    }else{
      redirect('/profile')
    }
  
  
}

export default Prevent;