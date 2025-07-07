import { useEffect, useState } from "react";
export default function Jokes() {
    let [jokes, setJokes] = useState({});
    const [reload, setReload] = useState(false);



    useEffect(() => {
        const URL = "https://v2.jokeapi.dev/joke/Any";
        const getNewJoke = async () => {
            let response = await fetch(URL);
            let jsonresponse = await response.json();
            console.log(jsonresponse);
            setJokes({ setup: jsonresponse.setup, delivery: jsonresponse.delivery });
        };

        getNewJoke();
    }, [reload, setReload]);


    return (
        <>
            <h4>{jokes.setup}</h4>
            <h6>{jokes.delivery}</h6>

            <h2 style={{ cursor: 'pointer', border: '1px solid black', padding: '5px', borderRadius: '10px' }} onClick={() => {
                setReload(!reload)
            }}>Get new jojokes</h2>

        </>
    )
}