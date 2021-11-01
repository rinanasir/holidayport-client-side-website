import useCart from '../../hooks/useCart';
import useTours from '../../hooks/useTours';
import Cart from '../Cart/Cart';
import ReviewItems from './ReviewItems';

const MyOrders = () => {
    const [tours, setTours] = useTours();
    const [cart, setCart] = useCart(tours);

    const handleRemove = _id => {
        console.log(_id);
    }

    return (
        <div>
            <h1 className="text-warning fs-1 fw-bold my-5 py-4">My Orders</h1>
            <div className="d-flex justify-content-evenly">
                <div>
                    <h3 className="text-warning fs-1 fw-bold border-bottom border-dark border-3 ms-2">Tours</h3>
                    {
                        cart.map(tour => <ReviewItems
                            key={tour._id}
                            tour={tour}
                            handleRemove={handleRemove}
                        ></ReviewItems>)
                    }
                </div>
                <div>
                    <Cart cart={cart}></Cart>
                </div>
            </div>
        </div>
    );
};

export default MyOrders;