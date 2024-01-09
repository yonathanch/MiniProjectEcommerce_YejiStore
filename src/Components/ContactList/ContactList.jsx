import { gql, useQuery } from "@apollo/client";
import { useEffect, useState } from "react";

export const GetContactList = gql`
    query MyQuery {
        Product {
            id
            name
            numberphone
            emailaddres
            message    
        }
    }
`

const ProductList = () => {
    const { data, loading, error } = useQuery(GetContactList)
    const [contact, setContact] = useState([])

    useEffect(() => {
        console.log('loading: ', loading);
        console.log('data gql: ', data);
        console.log('error: ', error);

        //check if data is still fetching
        if(!loading && error !== undefined){

            setContact(data.Contact)
        }

    })

    return(
        <>
            {
                loading?
                    <p>wait,masih Loading </p>:
                    data?.Product.map(item => 
                        <div>
                            <p>{item.Product_name}</p>
                        </div>
                    )
            }
        </>
    )
}

export default ProductList