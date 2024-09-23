import { useEffect, useState } from "react";

function useCurrencyInfo(currency) {
    const [data , setData]= useState({})
    useEffect(() => {
        fetch(`https://v6.exchangerate-api.com/v6/e55644a056e7989b9b601b0d/latest/${currency}`)
            .then((res)=>res.json())
            .then((res)=>setData(res.conversion_rates))
            .catch((error) => console.error('Error fetching data:', error));
    }, [currency])
    console.log(data)
    return data
}


export default useCurrencyInfo;