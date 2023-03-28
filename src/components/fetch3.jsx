import { useEffect, useState } from "react";



export const FetchData3 = () => {
    const [data, setData] = useState("");

    const style = {"width": "18rem"};

    useEffect(() => {
        handleFetch();
    });

    const handleFetch = () => {
        const fetchPromise = fetch('https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json');
        //console.log(fetchPromise);

        fetchPromise.then((response) => {
            const jsonPromise = response.json();
            jsonPromise.then((data) => {
                console.log(data);
                setData(data);
            })
            console.log(`Received response: ${response.status}`)
        });

        console.log("request started");
    }

    return (
        <div className="row d-flex justify-content-between p-5">
            {
                data ? data.map((elem) => {
                    return (
                        <div class="card" style={style}>
                            <img src={elem.image} class="card-img-top" alt="food" />
                            <div class="card-body">
                                <h5 class="card-title">{elem.name}</h5>
                                <p class="card-text">{elem.type}</p>
                                <p class="card-text">{elem.price}</p>
                            </div>
                        </div>
                    )
                })
                :
                <h1>Loading...</h1>
            }
        </div>
    )
};

