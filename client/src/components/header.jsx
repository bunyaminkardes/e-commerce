import { NavLink, useNavigate } from "react-router-dom";
import { FaCartShopping, FaUser } from "react-icons/fa6";
import { BsCart3, BsPerson } from "react-icons/bs";
import { FaSearch } from "react-icons/fa";
import CartPopup from "./cartPopup";
import { useEffect, useState } from "react";
import { useAuth } from "../contexts/authContext";
import { logoutUser } from "../api/auth";
import { useCart } from "../contexts/cartContext";

const Header = () => {

    const { user, setUser } = useAuth();
    const { totalQuantity } = useCart();
    const [isCartOpen, setIsCartOpen] = useState(false);
    const [searchQuery, setSearchQuery] = useState("");
    const navigate = useNavigate();

    const handleSearch = (e) => {
        e.preventDefault();
        if (searchQuery.trim() !== "") {
            navigate(`/search/${encodeURIComponent(searchQuery.trim())}`);
        }
    }

    const logout = async () => {
        try {
            await logoutUser();
            setUser(null)
            navigate('/');
        } catch (error) {
            console.error(error);
        }
    }

    useEffect(() => { console.log("user->", user) }, [])

    return (
        <header className="bg-[#805ad5] text-gray-100 p-[10px]">
            <div>
                <NavLink to={"/"}>
                    GO TO HOMEPAGE
                </NavLink>
            </div>
            <div className="h-[3rem] p-[10px]">
                <div className="container hidden lg:flex gap-x-[2rem] items-center justify-center">
                    <NavLink to="/category/spor">
                        SPOR
                    </NavLink>
                    <NavLink to="/category/giyim">
                        GİYİM
                    </NavLink>
                    <NavLink to="/category/elektronik">
                        ELEKTRONİK
                    </NavLink>
                    <NavLink to="/category/kozmetik">
                        KOZMETİK
                    </NavLink>
                    <NavLink to="/category/kitap">
                        KİTAP
                    </NavLink>
                    <form onSubmit={handleSearch} className="relative w-[200px]">
                        <input
                            type="search"
                            className="w-full border border-gray-300 rounded-[4px] pr-8 pl-2 py-[6px] text-sm"
                            placeholder="Ara..."
                            onChange={(e) => setSearchQuery(e.target.value)}
                        />
                        <FaSearch
                            size={16}
                            color="#f3f4f6"
                            className="absolute right-2 top-1/2 -translate-y-1/2 pointer-events-none"
                        />
                    </form>
                    <div
                        onClick={() => setIsCartOpen(!isCartOpen)}
                        className="flex ml-auto items-center relative cursor-pointer"
                    >
                        <div className="flex items-center space-x-[6px] relative">
                            <div className="relative">
                                <BsCart3 size={20} color="#f3f4f6" />
                                {totalQuantity > 0 && (
                                    <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
                                        {totalQuantity}
                                    </span>
                                )}
                            </div>
                            <span>Sepetim</span>
                        </div>
                        {isCartOpen && <CartPopup />}
                    </div>
                    {user ?
                        <>
                            <div className="flex space-x-[6px] items-center">
                                <BsPerson size={20} color="#f3f4f6" />
                                <span>{user.username}</span>
                            </div>
                            <div onClick={() => logout()} className="flex space-x-[6px] items-center cursor-pointer">
                                <BsPerson size={20} color="#f3f4f6" />
                                <span>Çıkış Yap</span>
                            </div>
                        </>
                        :
                        <NavLink to={"/login"} className="flex space-x-[6px] items-center">
                            <BsPerson size={20} color="#f3f4f6" />
                            <span>Giriş Yap</span>
                        </NavLink>}
                </div>
            </div>
        </header>
    )
}

export default Header;