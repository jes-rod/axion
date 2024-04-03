import { redirect } from 'next/navigation';
import { getCookies } from 'next-client-cookies/server';

function Protected ({children}) {
    const cookies = getCookies()
    const token = cookies.get("TOKEN")

    if(token){

      return children
    }else{
      redirect('/signin')
    }
  
  
}

export default Protected;