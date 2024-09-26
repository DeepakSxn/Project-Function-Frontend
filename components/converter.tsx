import { TransactionButton, useReadContract } from "thirdweb/react";
import { CONTRACT } from "../utils/constants";
import { Transaction } from "mongodb";
import { prepareContractCall } from "thirdweb";

const Converter: React.FC = () => {
    const { data: value, isLoading: loadingConversion, refetch: refetchValue } = useReadContract({
        contract: CONTRACT,
        method: "getUSDValue",
    });

    const { data: type, isLoading: typingConversion, refetch: refetchType } = useReadContract({
        contract: CONTRACT,
        method: "currentConversion", 
    });

    const refetchAll = () => {
        refetchValue();
        refetchType();
    };
    return(
        <div style={{marginTop:"25px"}}> 
        <h1>Conversion of 1 USD To </h1>
        {loadingConversion ? (
            <h2>...</h2>
        ):(
            
            <h2>{type?.toString()}  is {value?.toString()}</h2>
        )}
            <div style={{
                display: "flex",
                justifyContent:"center",
                gap:"10px",
                marginTop:"10px"
            }}>
                <TransactionButton
                    transaction={()=>prepareContractCall({
                        contract: CONTRACT,
                        method:"convertToRS"
                    })}
                    onTransactionConfirmed={()=>refetchAll }
                    >USDtoRS</TransactionButton>

                <TransactionButton transaction={()=>prepareContractCall({
                        contract: CONTRACT,
                        method:"convertToRUB"
                    })}onTransactionConfirmed={()=>refetchAll }>USDtoRub
                    </TransactionButton>
                <TransactionButton transaction={()=>prepareContractCall({
                        contract: CONTRACT,
                        method:"convertToJYEN"
                    })}onTransactionConfirmed={()=>refetchAll }>USDtoJYEN
                    </TransactionButton>
                    <TransactionButton transaction={()=>prepareContractCall({
                        contract: CONTRACT,
                        method:"resetToUSD"
                    })}onTransactionConfirmed={()=>refetchAll }>Reset
                    </TransactionButton>
            </div>
        </div>
    )
};

export default Converter;