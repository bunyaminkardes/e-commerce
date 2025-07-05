import { useEffect, useState } from "react";
import { NavLink, useParams } from "react-router-dom";
import { getProductsByCategory } from "../api/products";
import Layout from "../components/layout";
import { useCart } from "../contexts/cartContext";

const Products = () => {
    const { category } = useParams();
    const [products, setProducts] = useState([]);
    const { addToCart } = useCart();

    const fetchData = async () => {
        try {
            const data = await getProductsByCategory(category);
            setProducts(data);
        } catch (error) {
            console.error(error);
        }
    }

    useEffect(() => {
        fetchData();
    }, [category]);

    return (
        <Layout>
            <div className="container py-[2rem]">
                <h2 className="text-[26px] font-[400]">
                    Kategori: {category.toLocaleUpperCase("tr")}
                </h2>
                <div className="grid grid-cols-12 lg:gap-x-[3rem] gap-y-[2rem] my-[3rem]">
                    {products.map((product) => (
                        <div key={product._id} className="col-span-12 lg:col-span-3">
                            <div className="flex flex-col items-center space-y-[2rem]">
                                <NavLink to={`/product-detail/${product._id}`} className="flex flex-col">
                                    <img className="object-cover" src={product.images} alt="Placeholder" />
                                    <div className="flex flex-col lg:flex-row lg:justify-between py-[10px]">
                                        <span className="text-[rgba(0,0,0,0.625)] text-center">{product.name}</span>
                                        <span className="text-[rgba(0,0,0,0.625)] font-semibold text-center">{product.price}₺</span>
                                    </div>
                                </NavLink>
                                <button
                                    onClick={() => addToCart(product)}
                                    className="bg-[#6b46c1] hover:bg-[#9f7aea] text-white font-semibold py-[10px] px-4 rounded-lg transition-colors duration-200 w-1/2 lg:w-full block shadow-md hover:shadow-lg"
                                >
                                    Sepete Ekle
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </Layout>
    );
}

export default Products;