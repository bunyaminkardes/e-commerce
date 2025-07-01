import { NavLink, useParams } from "react-router-dom";
import Layout from "../components/layout";
import { useState } from "react";
import { useEffect } from "react";
import { getProductsBySearch } from "../api/products";

const Search = () => {

    const { searchQuery } = useParams();
    const [searchResults, setSearchResults] = useState([]);

    useEffect(() => {
        const fetchSearchResults = async () => {
            if (searchQuery) {
                const data = await getProductsBySearch(searchQuery);
                setSearchResults(data);
            }
        }
        fetchSearchResults();
    }, [searchQuery]);

    return (
        <Layout>
            <div className="container py-[2rem]">
                <h2 className="text-[26px] font-[400]">
                    Arama Sonuçları:
                </h2>
                <div className="grid grid-cols-12 gap-x-[2rem] gap-y-[2rem] my-[3rem]">
                    {searchResults.length === 0 && <span className="col-span-12">Hiçbir sonuç bulunamadı...</span>}
                    {searchResults.map((product) => (
                        <div key={product._id} className="col-span-12 lg:col-span-3">
                            <NavLink to={`/product-detail/${product._id}`} className="flex flex-col">
                                <img className="object-cover" src={product.images} alt="Placeholder" />
                                <span className="text-[rgba(0,0,0,0.625)] text-center mt-[1rem]">{product.name}</span>
                                <span className="font-semibold text-center">{product.price}₺</span>
                            </NavLink>
                        </div>
                    ))}
                </div>
            </div>
        </Layout>
    );
}

export default Search;