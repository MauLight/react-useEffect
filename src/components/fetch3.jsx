import { useEffect, useState } from "react";



export const FetchData3 = () => {
    const [data, setData] = useState("");

    const style = { "width": "18rem" };

    useEffect(() => {
        handleFetch();
    }, []);

    const handleFetch = () => {
        const fetchPromise = fetch('https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json');
        //console.log(fetchPromise);
        console.log("request started");

        fetchPromise
            .then((response) => {
                if (!response.ok) {
                    throw new Error(`HTTP error: ${response.status}`)
                }
                console.log(`Received response: ${response.status}`);
                return response.json()
            })
            .then((data) => {
                //console.log(data);
                setData(data);
            })
            .catch((error) => {
                console.log(`Could not get data: ${error}`);
            });
    };

return (
    <div className="row d-flex justify-content-between p-5">
        {
            data ? data.map((elem) => {
                return (
                    <div className="card" key={elem.name} style={style}>
                        <img src={elem.image} className="card-img-top" alt="food" />
                        <div className="card-body">
                            <h5 className="card-title">{elem.name}</h5>
                            <p className="card-text">{elem.type}</p>
                            <p className="card-text">US$ {elem.price}</p>
                        </div>
                    </div>
                )
            })
                :
                <h1>Loading...</h1>
        }
    </div>
)
    }

