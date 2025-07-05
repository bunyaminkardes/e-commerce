import { useEffect } from "react";
import { useCart } from "../contexts/cartContext";

const CartPopup = () => {

    const { cartItems, addToCart, removeFromCart, clearCart, totalPrice } = useCart();

    return (
        <div
            onClick={(e) => e.stopPropagation()}
            className="cursor-auto absolute right-0 top-full mt-2 w-[360px] bg-white border border-gray-200 rounded-xl shadow-xl p-4 z-50"
        >
            <h3 className="text-lg text-gray-500 font-semibold mb-3 border-b pb-2">Sepetim</h3>

            {cartItems.length === 0 ? (
                <p className="text-sm text-gray-500">Sepetiniz boş.</p>
            ) : (
                <ul className="divide-y divide-gray-200 max-h-[200px] overflow-y-auto">
                    {cartItems.map((item) => (
                        <li key={item._id} className="py-2 flex justify-between items-center">
                            <div>
                                <p className="text-sm text-gray-500 font-medium">{item.name}</p>
                                <p className="text-xs text-gray-500">
                                    {item.quantity} x {item.price}₺
                                </p>
                            </div>

                            <div className="flex items-center gap-2">
                                <span className="text-sm text-gray-500 font-semibold">
                                    {item.price * item.quantity}₺
                                </span>
                                <button
                                    onClick={() => removeFromCart(item._id)}
                                    className="text-sm bg-gray-400 hover:bg-gray-300 w-6 h-6 flex items-center justify-center rounded-full"
                                >
                                    –
                                </button>
                                <button
                                    onClick={() => addToCart(item)}
                                    className="text-sm bg-gray-400 hover:bg-gray-300 w-6 h-6 flex items-center justify-center rounded-full"
                                >
                                    +
                                </button>
                            </div>
                        </li>
                    ))}
                </ul>
            )}

            <div className="flex justify-between items-center mt-4">
                <span className="font-semibold text-base text-gray-500">Toplam:</span>
                <span className="font-semibold text-base text-gray-500">{totalPrice} ₺</span>
            </div>

            <button
                className="mt-4 w-full bg-[#6b46c1] hover:bg-[#9f7aea] text-white text-sm font-medium py-2 px-4 rounded-md transition-colors"
            >
                Sepeti Görüntüle
            </button>

            <button
                onClick={clearCart}
                className="mt-4 w-full bg-[#6b46c1] hover:bg-[#9f7aea] text-white text-sm font-medium py-2 px-4 rounded-md transition-colors"
            >
                Sepeti Boşalt
            </button>

            <button
                className="mt-4 w-full bg-[#6b46c1] hover:bg-[#9f7aea] text-white text-sm font-medium py-2 px-4 rounded-md transition-colors"
            >
                Devam Et
            </button>
        </div>
    );
}

export default CartPopup;