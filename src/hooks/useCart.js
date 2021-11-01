import { useEffect, useState } from "react"
import { getStoredCart } from "../utilities/fakedb";

const useCart = tours => {
    const [cart, setCart] = useState([]);

    useEffect(() => {
        if (tours.length) {
            const savedCart = getStoredCart();
            const storedCart = [];
            for (const key in savedCart) {
                const addedTour = tours.find(singleTour => singleTour._id === key);
                if (addedTour) {
                    const quantity = savedCart[key];
                    addedTour.quantity = quantity;
                    storedCart.push(addedTour);
                }
            }
            setCart(storedCart);
        }
    }, [tours])
    return [cart, setCart];
}

export default useCart;