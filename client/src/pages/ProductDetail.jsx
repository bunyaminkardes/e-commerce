import { useParams } from "react-router-dom";
import Layout from "../components/layout";
import { useState } from "react";
import { useEffect } from "react";
import { getProductsById } from "../api/products";

const ProductDetail = () => {

    const { id } = useParams();
    const [product, setProduct] = useState({});

    useEffect(() => {
        const fetchProductById = async () => {
            try {
                const data = await getProductsById(id);
                setProduct(data);
            } catch (error) {
                console.error(error);
            }
        }
        fetchProductById();
    }, [id]);

    useEffect(() => {
        console.log("product ->", product);
    }, [product])

    return (
        <Layout>
            <div className="container mx-auto p-4 py-[3rem]">
                <div className="flex flex-col md:flex-row gap-8">
                    <div className="w-full md:w-1/3 p-4 bg-white rounded-lg shadow-md flex items-center justify-center">
                        <img
                            src={product.images}
                            alt="Ürün Görseli"
                            className="max-w-full h-auto rounded-lg"
                        />
                    </div>
                    <div className="w-full md:w-1/2 p-6 bg-white rounded-lg shadow-md">
                        <h1 className="text-3xl font-bold mb-4 text-gray-800">{product.name}</h1>
                        <p className="text-gray-600 mb-6 text-lg">{product.description}</p>
                        <ul className="list-disc list-inside text-gray-700 mb-6">
                            <li className="mb-2">Ürün Fiyatı: {product.price}₺</li>
                            <li className="mb-2">Stok Miktarı: {product.stock} adet</li>
                            <li className="mb-2">Ürün Kategorisi: {product.category}</li>
                        </ul>
                        <div className="text-2xl font-semibold text-indigo-700 mb-4">
                            Fiyat: {product.price} TL
                        </div>
                        <button className="bg-indigo-600 text-white px-6 py-3 rounded-lg hover:bg-indigo-700 transition duration-300 ease-in-out">
                            Sepete Ekle
                        </button>
                    </div>
                    <div className="w-full md:w-1/4 p-4 bg-white rounded-lg shadow-md">
                        <h2 className="text-2xl font-bold mb-4 text-gray-800">Ek Bilgiler</h2>
                        <p className="text-gray-600 mb-4">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec non purus sapien. Donec vitae lacus ultricies, mollis nisi id, vehicula ex. Integer quis eleifend turpis.
                        </p>
                        <div className="mb-4">
                            <h3 className="font-semibold text-gray-700 mb-2">Kargolama:</h3>
                            <p className="text-gray-600">Ücretsiz kargo! 2-3 iş günü içinde teslimat.</p>
                        </div>
                        <div>
                            <h3 className="font-semibold text-gray-700 mb-2">Müşteri Yorumları:</h3>
                            <p className="text-yellow-500">★★★★★</p>
                            <p className="text-gray-600 text-sm">"Bu ürünü çok beğendim, beklediğimden daha iyi!" - Ayşe Y.</p>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    );
}

export default ProductDetail;