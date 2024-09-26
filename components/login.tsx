'use client';
import { ConnectButton, useActiveAccount } from "thirdweb/react";
import { Chain, client } from "../utils/constants";
import Converter from "./converter";
const Login: React.FC = () =>{
    const account = useActiveAccount();
    return(
    <div style={{
        display: "flex",
        flexDirection: "column"
        ,alignItems:"center",
        justifyContent:"center",
        height:"100vh"   
    }}>  
        {account ? (
            <div style={{textAlign:"center"}}>
            <ConnectButton
            client={client}
            chain={Chain} 
        />
            <Converter/>
         </div>
        ) :(
         <div style={{textAlign:"center"}}>
              <ConnectButton
            client={client}
            chain={Chain} 
        /> </div>   
            
            
        )}
           
    </div>
    )
};
export default Login;