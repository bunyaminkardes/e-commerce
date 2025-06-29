import { NavLink } from "react-router-dom";
import { FaCartShopping, FaUser } from "react-icons/fa6";
import { BsCart3, BsPerson } from "react-icons/bs";
import { FaSearch } from "react-icons/fa";
import CartPopup from "./cartPopup";
import { useState } from "react";

const Header = () => {

    const [isCartOpen, setIsCartOpen] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
    }

    return (
        <header className="bg-[#fff] p-[10px]">
            {/* HEADER */}
            <div>
                <NavLink to={"/"}>
                    GO TO HOMEPAGE
                </NavLink>
            </div>
            {/* NAVBAR */}
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
                    <div className="relative w-[200px]">
                        <input
                            type="search"
                            className="w-full border border-gray-300 rounded-[4px] pr-8 pl-2 py-[6px] text-sm"
                            placeholder="Ara..."
                        />
                        <FaSearch
                            size={16}
                            color="#2f3033"
                            className="absolute right-2 top-1/2 -translate-y-1/2 pointer-events-none"
                        />
                    </div>
                    <div onClick={() => setIsCartOpen(!isCartOpen)} className="flex ml-auto space-x-[6px] items-center relative cursor-pointer">
                        <BsCart3 size={20} color="#2f3033" />
                        <span>Sepetim</span>
                        {isCartOpen && <CartPopup />}
                    </div>
                    <NavLink to={"/Login"} className="flex space-x-[6px] items-center">
                        <BsPerson size={20} color="#2f3033" />
                        <span>Giriş Yap</span>
                    </NavLink>
                </div>
            </div>
        </header>
    )
}

export default Header;