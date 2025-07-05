import { createContext, useState, useEffect, useContext } from "react";
import toast from "react-hot-toast";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
    const [cartItems, setCartItems] = useState([]);

    const totalPrice = cartItems.reduce(
        (total, item) => total + item.price * item.quantity,
        0
    );

    const totalQuantity = cartItems.reduce((sum, item) => sum + item.quantity, 0);

    const addToCart = (product) => {

        const existingItem = cartItems.find(item => item._id === product._id);
        if (!existingItem) {
            toast.success("Ürün sepete eklendi.");
        }

        setCartItems((prevItems) => {
            const existingItem = prevItems.find((item) => item._id === product._id);
            if (existingItem) {
                return prevItems.map((item) => item._id === product._id ? { ...item, quantity: item.quantity + 1 } : item);
            } else {
                return [...prevItems, { ...product, quantity: 1 }];
            }
        });
    };

    const removeFromCart = (productId) => {
        setCartItems((prevItems) => {
            const existingItem = prevItems.find((item) => item._id === productId);
            if (!existingItem) {
                return prevItems;
            }
            if (existingItem.quantity > 1) {
                return prevItems.map((item) => item._id === productId ? { ...item, quantity: item.quantity - 1 } : item);
            } else {
                return prevItems.filter((item) => item._id !== productId);
            }
        });
    }

    const clearCart = () => {
        setCartItems([]);
        toast.success("Sepet başarıyla temizlendi.");
    }

    return (
        <CartContext.Provider value={{ cartItems, addToCart, removeFromCart, clearCart, totalPrice, totalQuantity }}>
            {children}
        </CartContext.Provider>
    );
};

export const useCart = () => useContext(CartContext);