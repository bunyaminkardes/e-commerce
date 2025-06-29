import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getProductsByCategory } from "../api/products";
import Layout from "../components/layout";

const Products = () => {
    const { category } = useParams();
    const [products, setProducts] = useState([]);

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

    useEffect(() => { console.log("products ->", products) }, [products]);


    return (
        <Layout>
            <div className="container py-[2rem]">
                <h2 className="text-[26px] font-[400]">
                    {category} kategorisi
                </h2>
                <div className="grid grid-cols-12 gap-x-[2rem] gap-y-[2rem] my-[3rem]">
                    {products.map((product) => (
                        <div className="col-span-12 lg:col-span-3">
                            <div className="flex flex-col ">
                                <img className="object-cover" src="https://placehold.co/400" alt="Placeholder" />
                                <span className="text-[rgba(0,0,0,0.625)] text-center mt-[1rem]">{product.name}</span>
                                <span className="font-semibold text-center">{product.price}₺</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </Layout>
    );
}

export default Products;