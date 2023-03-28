import { useEffect, useState } from "react"


export const FetchData2 = () => {
    const [userData, setUserData] = useState([]);
    const [title, setTitle] = useState('And the winner is...?');

    const handleData = () => {
        fetch('https://randomuser.me/api/?results=1')
            .then(response => response.json())
            .then(data => setUserData(data))
    };

    useEffect(() => {
        handleData();
    }, []);

    useEffect(() => {
        //console.log(userData);
    }, [userData.results]);

    return (
        <>
            <h4>{title}</h4>
            {
                Object.keys(userData).length > 0 ? (
                    <div>
                        <h1>{userData.results[0].name.first} {userData.results[0].name.last}</h1>
                    </div>
                ) : (
                    <p>Data failed...</p>
                )
            }
            <button onClick={handleData} className="btn rounded-0 border" >Again!</button>
        </>
    )


}