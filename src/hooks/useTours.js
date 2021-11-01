import { useEffect, useState } from "react"

const useTours = () => {
    const [tours, setTours] = useState([]);

    useEffect(() => {
        fetch("http://localhost:5000/places")
            .then(res => res.json())
            .then(data => setTours(data));
    }, []);
    return [tours, setTours];
}

export default useTours;