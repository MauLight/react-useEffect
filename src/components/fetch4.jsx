import { useEffect, useState } from "react";



export const FetchData4 = () => {
    const [data, setData] = useState([]);

    const style = { "width": "18rem" };

    useEffect(() => {
        handleFetch();
    }, []);

    const handleFetch = () => {
        const fetchPromise1 = fetch('https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json');
        const fetchPromise2 = fetch('https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/not-found');
        const fetchPromise3 = fetch('https://mdn.github.io/learning-area/javascript/oojs/json/superheroes.json');
        console.log("request started");

        Promise.all([fetchPromise1, fetchPromise2, fetchPromise3])
            .then((responses) => {
                for ( const response of responses) {
                    console.log(response)
                    console.log(`${response.url} ${response.status}`);
                    return response.json();
                }
            })
            .then((data) => {
                console.log(data);
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

