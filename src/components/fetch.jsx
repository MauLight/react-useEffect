import { useState, useEffect } from "react";

export const FetchData = () => {
    const [btcData, setBtcData] = useState(null);
    const [title, setTitle] = useState("Current BTC/USD data");

    const handleData = () => {
        fetch(`https://api.coindesk.com/v1/bpi/currentprice.json`)
            .then((response) => response.json())
            .then((data) => setBtcData(data.bpi.USD))
            .catch((error) => console.log(error));
    };

    useEffect(() => {
        console.log(btcData);
        handleData();
    }, []);

    return (
        <div>
            {
                btcData ? <>
                    <h1>{title}</h1>
                    <p>Code: {btcData.code}</p>
                    <p>Symbol: {btcData.symbol}</p>
                    <p>Rate: {btcData.rate}</p>
                    <p>Description: {btcData.description}</p>
                    <p>Rate Float: {btcData.rate_float}</p>
                </> : <h4>Data Pending...</h4>
            }
        </div>
    );
}