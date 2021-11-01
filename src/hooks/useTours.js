import { useEffect, useState } from "react"

const useTours = () => {
    const [tours, setTours] = useState([]);

    useEffect(() => {
        fetch("https://protected-ocean-59347.herokuapp.com/places")
            .then(res => res.json())
            .then(data => setTours(data));
    }, []);
    return [tours, setTours];
}

export default useTours;