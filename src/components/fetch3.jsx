import { useState } from "react";



export const FetchData3 = () => {
    const [data, setData] = useState("");

    const fetchPromise = fetch('https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json');
    console.log(fetchPromise);
    
    fetchPromise.then((response) => {
        console.log(response)
        console.log(`Received response: ${response.status}`)
    });
    
    console.log("request started");

};

