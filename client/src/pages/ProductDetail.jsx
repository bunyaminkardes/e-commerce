// import { useParams } from "react-router-dom";
// import Layout from "../components/layout";
// import { useState } from "react";
// import { useEffect } from "react";
// import { getProductsById } from "../api/products";
// import { useCart } from "../contexts/cartContext";

// const ProductDetail = () => {

//     const { id } = useParams();
//     const [product, setProduct] = useState({});
//     const {addToCart} = useCart();

//     useEffect(() => {
//         const fetchProductById = async () => {
//             try {
//                 const data = await getProductsById(id);
//                 setProduct(data);
//             } catch (error) {
//                 console.error(error);
//             }
//         }
//         fetchProductById();
//     }, [id]);

//     useEffect(() => {
//         console.log("product ->", product);
//     }, [product])

//     return (
//         <Layout>
//             <div className="container">
//                 asd
//             </div>
//         </Layout>
//     );
// }

// export default ProductDetail;

import { useParams } from "react-router-dom";
import Layout from "../components/layout";
import { useState, useEffect } from "react";
import { getProductsById } from "../api/products";
import { useCart } from "../contexts/cartContext";

const ProductDetail = () => {
    const { id } = useParams();
    const [product, setProduct] = useState(null);
    const [selectedImage, setSelectedImage] = useState(null);
    const [quantity, setQuantity] = useState(1);
    const { addToCart } = useCart();

    useEffect(() => {
        const fetchProductById = async () => {
            try {
                const data = await getProductsById(id);
                setProduct(data);
                if (data.images && data.images.length > 0) {
                    setSelectedImage(data.images[0]);
                }
            } catch (error) {
                console.error(error);
            }
        };
        fetchProductById();
    }, [id]);

    const increaseQuantity = () => {
        if (product && quantity < product.stock) setQuantity(quantity + 1);
    };

    const decreaseQuantity = () => {
        if (quantity > 1) setQuantity(quantity - 1);
    };

    const handleAddToCart = () => {
        if (!product) return;
        addToCart({ ...product, quantity });
    };

    if (!product) return <Layout><div className="container p-6">Yükleniyor...</div></Layout>;

    return (
        <Layout>
            <div className="container flex flex-col md:flex-row gap-8 py-[3rem]">
                <div className="md:w-1/2">
                    <img
                        src={selectedImage || "/default-image.png"}
                        alt={product.name}
                        className="w-full rounded-lg border"
                    />
                    <div className="flex mt-4 gap-3">
                        {product.images?.map((img, i) => (
                            <img
                                key={i}
                                src={img}
                                alt={`${product.name} ${i + 1}`}
                                className={`w-16 h-16 object-cover rounded cursor-pointer border ${selectedImage === img ? "border-purple-600" : "border-gray-300"
                                    }`}
                                onClick={() => setSelectedImage(img)}
                            />
                        ))}
                    </div>
                </div>
                <div className="md:w-1/2 flex flex-col">
                    <h1 className="text-3xl font-semibold mb-2">{product.name}</h1>

                    <div className="flex items-center gap-4 mb-4">
                        <span className="text-2xl font-bold text-purple-700">{product.price}₺</span>
                        {product.oldPrice && (
                            <span className="text-gray-400 line-through">{product.oldPrice}₺</span>
                        )}
                    </div>

                    <p className="text-gray-700 mb-6 whitespace-pre-wrap">{product.description}</p>

                    <div className="flex items-center gap-4 mb-6">
                        <div className="flex items-center border rounded">
                            <button
                                onClick={decreaseQuantity}
                                className="px-3 py-1 hover:bg-gray-200 transition"
                            >
                                -
                            </button>
                            <span className="px-4">{quantity}</span>
                            <button
                                onClick={increaseQuantity}
                                className="px-3 py-1 hover:bg-gray-200 transition"
                            >
                                +
                            </button>
                        </div>
                        <span className="text-sm text-gray-500">
                            Stokta {product.stock ?? 0} adet var
                        </span>
                    </div>

                    <button
                        onClick={handleAddToCart}
                        className="bg-purple-600 text-white py-3 rounded hover:bg-purple-700 transition"
                    >
                        Sepete Ekle
                    </button>
                </div>
            </div>
        </Layout>

    );
};

export default ProductDetail;
